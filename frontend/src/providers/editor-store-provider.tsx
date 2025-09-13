"use client"
import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type EditorStore,
  createEditorStore,
  initEditorStore,
} from "@/stores/editor-store";

export type EditorStoreApi = ReturnType<typeof createEditorStore>;

export const EditorStoreContext = createContext<EditorStoreApi | undefined>(
  undefined
);

export interface EditorStoreProviderProps {
  children: ReactNode
}

export const EditorStoreProvider = ({
  children
}: EditorStoreProviderProps) => {
  const storeRef = useRef<EditorStoreApi | null>(null);

  if (storeRef.current === null) {
    storeRef.current = createEditorStore(initEditorStore());
  }

  return (
    <EditorStoreContext.Provider value={storeRef.current}>
      {children}
    </EditorStoreContext.Provider>
  )
}

export const useEditorStore = <T,>(
  selector: (store: EditorStore) => T,
): T => {
  const counterStoreContext = useContext(EditorStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useEditorStore must be used within EditorStoreProvider`);
  }

  return useStore(counterStoreContext, selector)
}
