import axios from "axios";

export async function chatApi(question: string): Promise<any> {
  const response = await axios.post(
    `https://xavi9backend.azurewebsites.net/api/chat`,
    { question },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
}
