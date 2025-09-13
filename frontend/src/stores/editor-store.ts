import { createStore } from "zustand/vanilla";

export type EditorState = {
  content: string;
};

export type EditorActions = {
  setTerm: (newContent: string) => void
};

export type EditorStore = EditorState & EditorActions;

export const initEditorStore = (): EditorState => {
  return { 
    content: ""
  }
}

export const defaultInitState: EditorState = {
  content: ""
};


export const createEditorStore = (
  initState: EditorState = defaultInitState,
) => {
  return createStore<EditorStore>()((set) => ({
    ...initState,
    setTerm: (newContent: string) => {
      set(_ => ({ content: newContent }));
    },
  }))
};
