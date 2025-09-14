"use client";

import { useState, useEffect, useMemo } from "react";
import { useEditorStore } from "@/providers/editor-store-provider";
import { Message } from "@/types/types";
import { Editor, DiffEditor, useMonaco } from "@monaco-editor/react";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { RAW_LATEX_COMMANDS, toCompletionItem } from "@/constants/latexCommands";
import Chat from "@/components/Editor/Chat";
import Menu from "@/components/Editor/Menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import dynamic from "next/dynamic";

const Document = dynamic(
  () => import("react-pdf").then((mod) => mod.Document),
  {
    ssr: false,
    loading: () => <div className="w-[40vw]">Loading document...</div>,
  }
);

const Page = dynamic(
  () => import("react-pdf").then((mod) => mod.Page),
  {
    ssr: false,
    loading: () => <div className="w-[40vw]">Loading page...</div>,
  }
);

interface EditProps {
};

export default function Edit ({}: EditProps) {
  const monaco = useMonaco();
  const [messages, setMessages] = useState<Message[]>([]);

  const { content, setContent, compiledPdf } = useEditorStore(
    (state) => state,
  );

  const file = useMemo(
    () => (compiledPdf ? { data: compiledPdf } : null),
    [compiledPdf]
  );

  useEffect(() => {
    monaco?.languages.register({ id: "latex" });

    monaco?.languages.setMonarchTokensProvider("latex", {
      tokenizer: {
	root: [
	  [/\\[a-zA-Z]+/, "keyword"],
	  [/%.*$/, "comment"],
	  [/{[^}]]*}/, "string"],
	],
      }
    });

    monaco?.languages.setLanguageConfiguration("latex", {
      comments: { lineComment: "%" },
      brackets: [["{", "}" ], ["[", "]"], ["(", ")"]],
      autoClosingPairs: [
	{ open: "{", close: "}" },
	{ open: "[", close: "]" },
	{ open: "(", close: ")" },
      ]
    });

    (async () => {
      const { pdfjs } = await import("react-pdf");
      pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
    })();

  });

  return (
    <div className="flex flex-col">
      <Menu />
      <div className="flex flex-row h-[calc(100vh-2.25rem)]">
	<Editor
	  width="40vw"
	  theme="vs-dark"
	  defaultLanguage="latex"
	  className="w-[40vw] h-[calc(100vh-2.25rem)]"
	  value={content}
	  onChange={(value) => setContent(value ?? "")}
	/>
	<ScrollArea className="h-[calc(100vh-2.25rem)] w-[40vw]">
	  <Document
	    className="w-[40vw]"
	    file={file}
	    onLoadSuccess={()=>console.log("Succesfully loaded pdf")}
	  >
	    <Page 
	      className=""
	      pageNumber={1}
	      width={typeof window !== "undefined" ? Math.floor(window.innerWidth * 0.4) : undefined}
	    />
	  </Document>
	</ScrollArea>
	<Chat
	  messages={messages}
	  addMessage={(message) => {
	    setMessages((prev) => [...prev, message])
	    console.log(messages)
	  }}
	/>
      </div>
    </div>
  );
}
