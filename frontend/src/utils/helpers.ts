
export const strToTex = (fileContent: string): File => {
  const texFile = new File([fileContent], "main.tex", { type: "text/x-tex" });
  
  return texFile;
};
