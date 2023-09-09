import { useCallback, useState } from "react";
import {
  CircularProgress,
  Box,
  Typography,
  FormHelperText,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import { experimentalStyled as styled } from "@mui/material/styles";
import { FileUpload } from "@mui/icons-material";

import { fData } from "../../utils/formatNumber";

const RootStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  margin: "auto",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  border: `1px dashed ${theme.palette.grey[500]}`,
}));

const DropZoneStyle = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  marginLeft: "auto",
  marginRight: "auto",
  overflow: "hidden",
  borderRadius: theme.shape.borderRadius,
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    cursor: "pointer",
  },
}));

const LoadingStyle = styled("div")(() => ({
  zIndex: 99,
  display: "flex",
  alignItems: "center",
  position: "absolute",
  justifyContent: "center",
}));

const PlaceholderStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  color: theme.palette.grey[600],
  "& svg": {
    width: 48,
    height: 48,
    fontSize: 48,
    marginBottom: 1,
  },
}));

interface UploadFileProps {
  isLoading?: boolean;
  url?: string | null;
  disabled?: boolean;
  caption?: string;
  allowFileFormats?: Array<{
    label: string;
    extension: string;
  }>;
  error?: string | null;
  maxFileSize?: number;
  previewWidth?: number;
  previewHeight?: number;
  placeholderText?: string;
  onChange?: (value: File[]) => void;
}

const UploadFiles = ({
  caption = "",
  error = null,
  isLoading = false,
  disabled = false,
  allowFileFormats = [
    {
      label: ".pdf",
      extension: "application/pdf",
    },
  ],
  maxFileSize = 200000000, // bytes
  placeholderText = "Drop your file here or click to select one",
  onChange = () => {},
}: UploadFileProps) => {
  const [isError, setIsError] = useState<string | null>(null);

  const handleDrop = useCallback(
    async (files: File[]) => {
      setIsError(null);

      const totalSize = files.reduce((acc, file) => acc + file.size, 0);

      const checkSize = totalSize <= maxFileSize;
      const checkType = allowFileFormats.some((format) =>
        files.some((file) => file.type === format.extension)
      );

      if (!checkSize) {
        setIsError("size-invalid");
        return;
      }

      if (!checkType) {
        setIsError("type-invalid");
        return;
      }

      onChange(files);
    },
    [onChange, maxFileSize, allowFileFormats]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    multiple: true,
    disabled,
  });

  return (
    <RootStyle>
      <DropZoneStyle {...getRootProps()}>
        <input {...getInputProps()} />

        {isLoading && (
          <LoadingStyle>
            <CircularProgress />
          </LoadingStyle>
        )}
        <PlaceholderStyle className={`dropPlaceholder`}>
          <FileUpload />
          <Typography variant="body2">{placeholderText}</Typography>
          <Typography variant="caption" textAlign="center">
            {caption && caption}
            {!caption && (
              <span>
                Only{" "}
                {allowFileFormats.map((format, index) =>
                  index === allowFileFormats.length - 1
                    ? format.label
                    : `${format.label}, `
                )}{" "}
                files are allowed. <br />
                Maximum size of {fData(maxFileSize)}MB.
              </span>
            )}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {isError === "size-invalid" && (
              <FormHelperText error>{`Error: File size is greater than
               ${fData(maxFileSize)}`}</FormHelperText>
            )}

            {isError === "type-invalid" && (
              <FormHelperText error>
                Error: Only{" "}
                {allowFileFormats.map((format, index) =>
                  index === allowFileFormats.length - 1
                    ? format.label
                    : `${format.label}, `
                )}
                {" "}files are allowed.
              </FormHelperText>
            )}

            {error !== null && <FormHelperText error>{error}</FormHelperText>}
          </Box>
        </PlaceholderStyle>
      </DropZoneStyle>
    </RootStyle>
  );
};

export default UploadFiles;
