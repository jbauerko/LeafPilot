import baseAPIClient from "@/APIClients/BaseAPIClient";
import { isSuccess } from "../utils/apiUtils";

const base = await baseAPIClient();

const compileTex = async (file: File): Promise<Uint8Array | null> => {
  try {
    const formData = new FormData();

    formData.append("file", file);

    const res = await base.post(
      `/compile`, formData, {
	headers: {
	  "Content-Type": "multipart/form-data"
	},
	responseType: "blob"
      }
    );

    if (!isSuccess(res)) {
      throw new Error(`Response status ${res.status}`);
    }

    const arrayBuffer = await res.data.arrayBuffer();

    const pdfBytes = new Uint8Array(arrayBuffer);

    return pdfBytes;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
}
export default {
  compileTex
}
