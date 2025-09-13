import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { EditorStoreProvider } from "@/providers/editor-store-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <EditorStoreProvider>
      <div className="h-screen flex overflow-hidden">
	{children}
      </div>
    </EditorStoreProvider>
  );
}
