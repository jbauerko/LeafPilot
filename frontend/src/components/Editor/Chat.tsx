"use client";

import { toast } from "sonner";
import { useEffect, useState, useRef } from "react";
import { Message } from "@/types/types";
import { Card, CardHeader, CardFooter, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ArrowUp, LoaderCircle, ChevronDown, Square, Eye, Check, Plus, X, File, FileAudio } from "lucide-react";
import { cn } from "@/lib/utils";
import ChatAPIClient from "@/APIClients/ChatAPIClient";
import CompileAPIClient from "@/APIClients/CompileAPIClient";
import { strToTex } from "@/utils/helpers";
import { useEditorStore } from "@/providers/editor-store-provider";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { DiffEditor } from "@monaco-editor/react";

interface ChatProps {
  messages: Message[],
  addMessage: (message: Message) => void,
};

export default function Chat ({ messages, addMessage }: ChatProps) {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const isWaiting = messages?.at(-1)?.role=="user";
  const messagesRef = useRef<HTMLDivElement>(null);
  const attachedFileRef = useRef<HTMLInputElement>(null);

  const { content, setContent, setIsCompiling, setPdf } = useEditorStore(
    (state) => state
  );

  const models = [
    {
      model: "Llama"
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
    setAttachedFile(null);
    if (attachedFileRef.current) {
      attachedFileRef.current.value = "";
    }
    const data = await ChatAPIClient.sendMessage(input, strToTex(content), attachedFile);
    if (data) {
      addMessage({content: data.message, role: "bot", diff: data.latex});
    } else {
      toast.error("Failed to send message", {
	richColors: true
      })
    }
  };

  const handleAttach = () => {
    attachedFileRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // single file
    console.log("Selected file:", e.target.files);
    if (file) {
      console.log("Selected file:", file);
      setAttachedFile(file);
      e.target.value = "";
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
		  <div className="text-sm">Llama Versatile</div>
		  <div className="text-muted-foreground text-xs">llama-3.3-70b-versatile</div>
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
		    {message.role=="bot" && message.diff && (
		      <Dialog>
			<div className="flex flex-row gap-2">
			  <DialogTrigger asChild>
			    <Button variant="secondary" className="w-min">
			      <Eye />
			    </Button>
			  </DialogTrigger>
			  <Button variant="secondary" className="w-min" disabled={content==message.diff} onClick={async ()=>{
			    if (message.diff) {
			      setContent(message.diff)
			      setIsCompiling(true);
			      const file = await CompileAPIClient.compileTex(strToTex(message.diff));
			      setPdf(file);
			      setIsCompiling(false);
			    }
			  }}>
			    <Check />
			  </Button>
			</div>
			<DialogContent className="w-[80vw] max-w-none">
			  <DialogHeader>
			    <DialogTitle>Diff View</DialogTitle>
			    <DialogDescription>See the suggested changes made by AI</DialogDescription>
			  </DialogHeader>
			  <div className="flex self-center items-center justify-center w-full flex-row min-h-0 w-[70vw] h-[80vh]">
			    <DiffEditor
			      //width="40vw"
			      theme="vs-dark"
			      original={content}
			      modified={message.diff}
			    />
			  </div>
			  <DialogFooter className="flex flex-row justify-between shrink-0 h-min">
			    <DialogClose>Close</DialogClose>
			    <DialogClose asChild>
			      <Button 
				disabled={isLoading || (message.diff == content)}
				onClick={async () =>{
				  if (message.diff) {
				    setIsLoading(true);
				    setContent(message.diff);
				    setIsCompiling(true);
				    const file = await CompileAPIClient.compileTex(strToTex(message.diff));
				    setPdf(file);
				    setIsLoading(false);
				    setIsCompiling(false);
				}}}>
				{isLoading 
				  ? <LoaderCircle className="animate-spin"/>
				  : <p>Accept</p>}
			      </Button>
			    </DialogClose>
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
      <CardFooter className="gap-2 shrink-0 flex flex-col">
	{attachedFile && (
	  <Card
	    className="px-4 resize-none py-2 w-full scrollbar-none flex-1 items-center flex-row justify-between"
	  >
	    <div className="flex flex-row gap-4">
	      <div className="bg-primary rounded-lg p-3 flex flex-col self-center justify-center items-center">
		{attachedFile.name.includes("mp3")
		? <FileAudio />
		: <File />}
	      </div>
	      <div className="flex flex-col gap-0.5">
		<p className="font-semibold">{attachedFile.name}</p>
		<p>
		{attachedFile.name.includes("mp3") ? "Audio" : "File"}
		</p>
	      </div>
	    </div>
	    <Button onClick={()=>setAttachedFile(null)} variant="ghost">
	      <X />
	    </Button>
	    {/*attachedFile.name*/}
	  </Card>
	)}
	<form
	  onSubmit={(e) => {
	    e.preventDefault();
	    onSubmit(input);
	  }}
	  className="w-full relative"
	>
	  <Textarea
	    disabled={isWaiting}
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
	    className="flex-1 px-10 resize-none max-h-32 scrollbar-none"
	  />
	  <Tooltip>
	    <Input
	      onChange={handleFileChange}
	      ref={attachedFileRef ?? undefined}
	      className="hidden invisible"
	      type="file"
	      accept=".md,.txt,.mp3"
	    />
	    <TooltipTrigger asChild>
	      <Button
		onClick={handleAttach}
		  className="absolute rounded-full top-1/2 size-6 left-2 -translate-y-1/2"
	      >
		<Plus
		/>
	      </Button>
	    </TooltipTrigger>
	    <TooltipContent>
	      Attach Files
	    </TooltipContent>
	  </Tooltip>
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
