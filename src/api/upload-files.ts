import axios from "axios";

export async function uploadPdfApi(files: File[]): Promise<any> {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("files", file);
  });
  const response = await axios.post(
    `${import.meta.env.VITE_API_URL}/api/load-files`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
}
