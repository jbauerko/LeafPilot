export type Message = {
  content: string;
  role: "user" | "bot",
  diff?: string | null;
};

export type ChatDTO = {
  latex: string;
  message: string;
  error: string | null;
};
