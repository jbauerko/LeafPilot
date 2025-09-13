import { Menubar, MenubarGroup, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from "@/components/ui/menubar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuGroup, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Leaf, ArrowRight } from "lucide-react";
import CompileAPIClient from "@/APIClients/CompileAPIClient";
import { useEditorStore } from "@/providers/editor-store-provider";
import { strToTex } from "@/utils/helpers";

interface MenuProps {
};

export default function Menu ({}: MenuProps) {
  const { content } = useEditorStore(
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
	onClick={()=>
	  //console.log("Testing")
	  CompileAPIClient.compileTex(strToTex(content))
	}>
	  Compile
	<ArrowRight />
      </Button>
    </Menubar>
  );
}
