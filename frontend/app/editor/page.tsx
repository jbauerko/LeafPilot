"use client";

import { useEffect } from "react";
import { Editor, useMonaco } from "@monaco-editor/react";

interface EditProps {
};

export default function Edit ({}: EditProps) {
  const monaco = useMonaco();

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
  }, [monaco]);

  return (
    <Editor 
      height="90vh"
      theme="vs-dark"
      defaultLanguage="latex"
    />
  );
}
