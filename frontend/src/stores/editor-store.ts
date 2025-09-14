import { createStore } from "zustand/vanilla";

export type EditorState = {
  content: string;
  compiledPdf: Uint8Array | undefined;
  isCompiling: boolean;
};

export type EditorActions = {
  setContent: (newContent: string) => void
  setPdf: (file: Uint8Array | null) => void
  setIsCompiling: (isCompiling: boolean) => void
};

export type EditorStore = EditorState & EditorActions;

export const initEditorStore = (): EditorState => {
  return { 
    content: "",
    compiledPdf: undefined,
    isCompiling: false,
  }
}

export const defaultInitState: EditorState = {
  content: "",
  compiledPdf: undefined,
  isCompiling: false,
};


export const createEditorStore = (
  initState: EditorState = defaultInitState,
) => {
  return createStore<EditorStore>()((set) => ({
    ...initState,
    setContent: (content: string) => {
      set(_ => ({ content }));
    },
    setPdf: (file: Uint8Array | null) => {
      console.log(typeof file);
      if (file) {
	set(_ => ({ compiledPdf: file }));
      }
    },
    setIsCompiling: (isCompiling: boolean) => {
      set(_ => ({ isCompiling }));
    },
  }))
};
