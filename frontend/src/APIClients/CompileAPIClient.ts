import baseAPIClient from "@/APIClients/BaseAPIClient";
import { isSuccess } from "../utils/apiUtils";

const base = await baseAPIClient();

const compileTex = async (formData: FormData): Promise<any> => {
  try {
    const res = await base.post(
      `/compile`, formData, {
	headers: {
	  "Content-Type": "multipart/form-data"
	}
      }
    );

    if (!isSuccess(res)) {
      throw new Error(`Response status ${res.status}`);
    }

    return res.data;
  } catch (error) {
    console.log("Error:", error);
    return null;
  }
}
export default {
  compileTex
}



// /api/compile

//post
//form data: 
