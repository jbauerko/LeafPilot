"use client";

import { useState, useEffect } from "react";
import { useEditorStore } from "@/providers/editor-store-provider";
import { Message } from "@/types/types";
import { Editor, useMonaco } from "@monaco-editor/react";
import { RAW_LATEX_COMMANDS, toCompletionItem } from "@/constants/latexCommands";
import Chat from "@/components/Editor/Chat";
import Menu from "@/components/Editor/Menu";

interface EditProps {
};

export default function Edit ({}: EditProps) {
  const monaco = useMonaco();
  const [messages, setMessages] = useState<Message[]>([]);

  const { setTerm } = useEditorStore(
    (state) => state,
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

    monaco?.languages.registerCompletionItemProvider("latex", {
      triggerCharacters: ["\\"],
      provideCompletionItems: (model, position) => {
	const suggestions = RAW_LATEX_COMMANDS.map((cmd) =>
	  toCompletionItem(cmd, model, position)
	);

	return { suggestions } ;
      }
    });
  }, [monaco]);

  return (
    <div className="flex flex-col">
      <Menu />
      <div className="flex flex-row h-[calc(100vh-2.25rem)]">
	<Editor
	  width="40vw"
	  theme="vs-dark"
	  defaultLanguage="latex"
	  className="w-[40vw] h-[calc(100vh-2.25rem)]"
	  onChange={(value) => setTerm(value ?? "")} //TODO: Make this not 
	/>
	<div className="w-[40vw]">
	  PDF
	</div>
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
