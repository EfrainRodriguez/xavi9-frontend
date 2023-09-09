import { LoadPdfProvider } from "./context/load-file.context";
import LoadFiles from "./LoadFiles";

const LoadFilesIndex = () => {
  return (
    <LoadPdfProvider>
      <LoadFiles />
    </LoadPdfProvider>
  );
};

export default LoadFilesIndex;
