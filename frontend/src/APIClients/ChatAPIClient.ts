import baseAPIClient from "@/APIClients/BaseAPIClient";
import { isSuccess } from "../utils/apiUtils";
import { ChatDTO } from "@/types/types";

const base = await baseAPIClient();

const sendMessage = async (message: string, source: File, attached: File | null): Promise<ChatDTO | null> => {
  try {
    const formData = new FormData();

    formData.append("prompt", message);
    formData.append("source", source);
    if (attached) {
      formData.append("attached", attached);
    }

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
