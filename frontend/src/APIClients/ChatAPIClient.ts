import baseAPIClient from "@/APIClients/BaseAPIClient";
import { isSuccess } from "../utils/apiUtils";
import { ChatDTO } from "@/types/types";

const base = await baseAPIClient();

const sendMessage = async (message: string, file: File): Promise<ChatDTO | null> => {
  try {
    const formData = new FormData();

    formData.append("prompt", message);
    formData.append("file", file);

    const res = await base.post(
      `/chat`, formData, {
	headers: {
	  "Content-Type": "multipart/form-data"
	}
    });

    if (!isSuccess(res) || res.data.error) {
      throw new Error(`Response status ${res.status}`);
    }

    return res.data as ChatDTO;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
}
export default {
  sendMessage
}
