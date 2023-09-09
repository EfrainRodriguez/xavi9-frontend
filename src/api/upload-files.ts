import axios from "axios";

export async function uploadPdfApi(files: File[]): Promise<any> {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("files", file);
  });
  const response = await axios.post(
    `https://xavi9backend.azurewebsites.net/api/load-files`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
}
