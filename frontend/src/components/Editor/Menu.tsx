"use client";
import { useState } from "react";
import { Menubar, MenubarGroup, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuGroup, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight, LoaderCircle } from "lucide-react";
import CompileAPIClient from "@/APIClients/CompileAPIClient";
import { useEditorStore } from "@/providers/editor-store-provider";
import { strToTex } from "@/utils/helpers";

interface MenuProps {
};

export default function Menu ({}: MenuProps) {
  const [isLoading, setIsLoading] = useState(false);

  const { content, setPdf } = useEditorStore(
    (state) => state
  );

  return (
    <Menubar className="p-2 rounded-none">
      <Button variant="ghost">
	<Leaf/>
	VibeTex
      </Button>
      <MenubarMenu>
	<MenubarTrigger>
	  File
	</MenubarTrigger>
	<MenubarContent>
	  <MenubarItem>
	    Save
	  </MenubarItem>
	  <MenubarItem>
	    Save As
	  </MenubarItem>
	</MenubarContent>
      </MenubarMenu>
      <Button
	disabled={isLoading}
	onClick={async ()=>{
	  //console.log("Testing")
	  setIsLoading(true);
	  const file = await CompileAPIClient.compileTex(strToTex(content));
	  setPdf(file);
	  setIsLoading(false);
	}}>
	  Compile
	{isLoading
	  ? <LoaderCircle className="animate-spin" />
	  : <ArrowRight />}
      </Button>
    </Menubar>
  );
}
