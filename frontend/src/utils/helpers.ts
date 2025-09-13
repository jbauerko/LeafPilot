
export const strToTex = (fileContent: string) => {
  const formData = new FormData();

  const texFile = new File([fileContent], "main.tex", { type: "text/x-tex" });

  formData.append("file", texFile);

  return formData;
};
