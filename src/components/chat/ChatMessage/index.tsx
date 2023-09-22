import { Box, useMediaQuery, type Theme } from "@mui/material";
import { SmartToy, Person } from "@mui/icons-material";

interface ChatMessageProps {
  message: string;
  isSender: boolean;
}
const ChatMessage = ({ message, isSender }: ChatMessageProps) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSender ? "row-reverse" : "row",
        mb: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          minWidth: 40,
          height: 40,
          borderRadius: "50%",
          bgcolor: isSender ? "primary.main" : "info.main",
          color: "primary.contrastText",
          mx: 1,
        }}
      >
        {isSender ? <Person /> : <SmartToy />}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
          maxWidth: isMobile ? "100%" : "70%",
          borderRadius: "10px",
          bgcolor: isSender ? "primary.main" : "info.main",
          color: "primary.contrastText",
        }}
      >
        {message}
      </Box>
    </Box>
  );
};

export default ChatMessage;
