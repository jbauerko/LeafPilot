"use client";

import { useEffect, useState, useRef } from "react";
import { Message } from "@/types/types";
import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ArrowUp, LoaderCircle, ChevronDown, Square } from "lucide-react";
import { cn } from "@/lib/utils";
import ChatAPIClient from "@/APIClients/ChatAPIClient";
import { strToTex } from "@/utils/helpers";
import { useEditorStore } from "@/providers/editor-store-provider";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogFooter } from "@/components/ui/dialog";
import { DiffEditor } from "@monaco-editor/react";

interface ChatProps {
  messages: Message[],
  addMessage: (message: Message) => void,
};

export default function Chat ({ messages, addMessage }: ChatProps) {
  const [input, setInput] = useState("");
  const isWaiting = messages?.at(-1)?.role=="user";
  const messagesRef = useRef<HTMLDivElement>(null);

  const { content } = useEditorStore(
    (state) => state
  );

  const models = [
    {
      model: "ChatGPT"
    }
  ];

  const initialMessages = [
    "Generate a Jake's Resume template",
    "Convert these equations into LaTeX format",
    "Explain and typeset the quadratic formula in LaTeX",
  ]

  useEffect(() => {
    if (messages.length > 0 && messagesRef.current) {
      messagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages.length]);

  const onSubmit = async (input: string) => {
    if (input.length == 0) return;
    addMessage({content: input, role: "user"});
    setInput("");
    const data = await ChatAPIClient.sendMessage(input, strToTex(content));
    if (data) {
      addMessage({content: data.message, role: "bot"});
    }
  };

  return (
    <Card className="w-[20vw] gap-0 h-[calc(100vh-2.25rem)] rounded-none">
      <CardHeader className="flex flex-row items-center shrink-0 pb-1">
	<DropdownMenu>
	  <DropdownMenuTrigger asChild>
	    <div className="flex flex-row justify-between w-full items-center">
	      <div className="flex flex-row items-center shrink-0 pb-1 gap-2">
		<Avatar>
		  <AvatarImage src={"./profile.png"} alt="Chat Profile Image" />
		  <AvatarFallback>C</AvatarFallback>
		</Avatar>
		<div className="flex flex-col gap-0.5">
		  <div className="text-sm">ChatGPT</div>
		  <div className="text-muted-foreground text-xs">chatgpt@gmail.com</div>
		</div>
	      </div>
	      <ChevronDown className="size-6" />
	    </div>
	  </DropdownMenuTrigger>
	  <DropdownMenuContent className="w-[18vw]">
	    {models.map((model, i) => (
	      <div className="w-full pl-4 py-2" key={i}>
		{model.model}
	      </div>
	    ))}
	  </DropdownMenuContent>
	</DropdownMenu>
      </CardHeader>
      <CardContent className={
	cn("flex flex-col px-0 flex-1 overflow-hidden",
	  messages.length==0
	  ? "py-7" 
	  : ""
	)
      }>
	<ScrollArea className="px-6 flex-1 h-full">
	  <div className="flex flex-col gap-2 w-full pb-2">
	    {messages.length
	      ? <div>
		{messages.map((message, i) => {
		  return <div key={i} className={cn(
		    "flex flex-col gap-2 px-3 py-2 text-sm w-inherit text-wrap hyphens-auto break-words",
		    message.role=="user"
		      ? "bg-primary text-primary-foreground ml-auto rounded-lg max-w-[80%]"
		      : ""
		  )}
		    ref={(i==messages.length-1) ? messagesRef : undefined}
		  >
		    {message.content}
		    {message.role=="bot" && (
		      <Dialog>
			<DialogTrigger asChild>
			  <Button variant="secondary" className="w-min">
			    See Diffview
			  </Button>
			</DialogTrigger>
			<DialogContent className="w-[-webkit-fill-available] max-w-[100vw] h-[100vh]">
			  <DialogHeader>
			    <DialogTitle>Diff View</DialogTitle>
			    <DialogDescription>See the suggested changes made by AI</DialogDescription>
			  </DialogHeader>
			  <DiffEditor
			    theme="vs-dark"
			    original={content}
			    modified={content+'.'}
			  />
			  <DialogFooter>
			    <DialogClose>Close</DialogClose>
			  </DialogFooter>
			</DialogContent>
		      </Dialog>
		    )}
		  </div>
		})}
		{isWaiting && <LoaderCircle className="size-3 animate-spin" />}
	      </div>
	      
	      : <div className="gap-6 flex-col flex">
		<p className="w-full text-center">
		  What are you working on?
		</p>

		<div className="flex flex-col gap-2">
		  {initialMessages.map((message, i) => (
		    <p 
		      key={i}
		      className="border rounded-md px-4 py-2 hover:bg-secondary/90 select-none"
		      onClick={()=> {
			setInput(message);
			onSubmit(message);
		      }}
		    >
		      {message}
		    </p>
		  ))}
		</div>
	      </div>
	    }
	  </div>
	</ScrollArea>
      </CardContent>
      <CardFooter className="gap-2 shrink-0">
	<form
	  onSubmit={(e) => {
	    e.preventDefault();
	    onSubmit(input);
	  }}
	  className="w-full relative"
	>
	  <Textarea
	    placeholder="Type a message..."
	    value={input}
	    onKeyPress={(e)=>{
	      if (e.key=="Enter") {
		e.preventDefault();
		onSubmit(input);
	      }
	    }}
	    rows={1}
	    onChange={(e: any) => setInput(e.target.value)}
	    className="flex-1 pr-10 resize-none max-h-32 scrollbar-none"
	  />
	  <Button 
	    type="submit"
	    size="icon"
	    className="absolute rounded-full top-1/2 size-6 right-2 -translate-y-1/2"
	    disabled={input.length==0 || isWaiting} 
	  >
	    {isWaiting
	      ? <Square className="size-3" />
	      : <ArrowUp/>}
	  </Button>
	</form>
      </CardFooter>
    </Card>
  );
}
