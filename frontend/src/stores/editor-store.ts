import { createStore } from "zustand/vanilla";

export type EditorState = {
  content: string;
  compiledPdf: Uint8Array | undefined;
};

export type EditorActions = {
  setTerm: (newContent: string) => void
  setPdf: (file: Uint8Array | null) => void
};

export type EditorStore = EditorState & EditorActions;

export const initEditorStore = (): EditorState => {
  return { 
    content: "",
    compiledPdf: undefined,
  }
}

export const defaultInitState: EditorState = {
  content: "",
  compiledPdf: undefined,
};


export const createEditorStore = (
  initState: EditorState = defaultInitState,
) => {
  return createStore<EditorStore>()((set) => ({
    ...initState,
    setTerm: (newContent: string) => {
      set(_ => ({ content: newContent }));
    },
    setPdf: (file: Uint8Array | null) => {
      console.log(typeof file);
      if (file) {
	set(_ => ({ compiledPdf: file }));
      }
    }
  }))
};
