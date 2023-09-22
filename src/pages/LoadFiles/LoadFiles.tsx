import { Box, Button, Card, CardContent } from "@mui/material";
import { useSnackbar } from "notistack";
import { Send } from "@mui/icons-material";

import { useLoadPdfContext } from "./context/load-file.context";
import { setFiles, sendPdfFiles } from "./context/load-file.actions";
import UploadFile from "../../components/UploadFile";

const LoadFiles = () => {
  const {
    state: { isLoading, files },
    dispatch,
  } = useLoadPdfContext();

  const { enqueueSnackbar } = useSnackbar();

  const handleChangeFiles = (files: File[]) => {
    dispatch(setFiles(files));
  };

  const handleClearFiles = () => {
    dispatch(setFiles([]));
  };

  const handleUploadFiles = () => {
    sendPdfFiles(dispatch, files)
      .then(() => {
        enqueueSnackbar("Files uploaded successfully", { variant: "success" });
      })
      .catch(() => {
        enqueueSnackbar("Error uploading files", { variant: "error" });
      })
      .finally(() => {
        handleClearFiles();
      });
  };

  return (
    <Card>
      <CardContent>
        <UploadFile
          disabled={isLoading}
          isLoading={isLoading}
          onChange={handleChangeFiles}
        />
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            variant="contained"
            color="primary"
            disabled={isLoading || files.length === 0}
            sx={{ mr: 1 }}
            endIcon={<Send />}
            onClick={handleUploadFiles}
          >
            Send Files
          </Button>
          <Button
            variant="outlined"
            color="error"
            disabled={isLoading || files.length === 0}
            onClick={handleClearFiles}
          >
            Clear
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LoadFiles;
