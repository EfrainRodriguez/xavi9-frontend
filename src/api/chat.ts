import axios from "axios";

export async function chatApi(question: string): Promise<any> {
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/chat`,
    { question }
  );
  return response.data;
}
