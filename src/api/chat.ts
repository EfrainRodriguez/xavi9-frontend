import axios from "axios";

export async function chatApi(question: string): Promise<any> {
  const response = await axios.post(
    `http://127.0.0.1:5000/api/chat`,
    { question },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}
