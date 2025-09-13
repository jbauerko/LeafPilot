export type Message = {
  content: string;
  role: "user" | "bot",
};

export type ChatDTO = {
  latex: string;
  message: string;
  error: string | null;
};
