import { useState } from "react";
import {
  Box,
  Card,
  TextField,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { Send, Delete } from "@mui/icons-material";

import { useChatContext } from "./context/chat.context";
import { sendChatQuestion } from "./context/chat.actions";
import ChatMessageBbble from "../../components/chat/ChatMessage";

const Chat = () => {
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [messages, setMessages] = useState([
    {
      text: "Hello, how can I help you?",
      isBot: true,
    },
  ]);

  const {
    state: { isLoading },
    dispatch,
  } = useChatContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentMessage !== "") {
      setMessages((prev) => [...prev, { text: currentMessage, isBot: false }]);
      sendChatQuestion(dispatch, currentMessage)
        .then((response) => {
          setMessages((prev) => [
            ...prev,
            {
              text: response?.response,
              isBot: true,
            },
          ]);
        })
        .catch(() => {
          setMessages((prev) => [
            ...prev,
            {
              text: "Sorry, an error occurred. Please try again later.",
              isBot: true,
            },
          ]);
        })
        .finally(() => {
          setCurrentMessage("");
        });
    }
  };

  const handleClearChat = () => {
    setMessages([messages[0]]);
  };

  return (
    <Card
      sx={{
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <Tooltip title="Clear Chat" placement="top">
            <IconButton onClick={handleClearChat}>
              <Delete />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              overflowY: "auto",
              maxHeight: "65vh",
              display: "flex",
              flexDirection: "column-reverse",
            }}
          >
            <Box>
              {messages.map((message, index) => (
                <ChatMessageBbble
                  key={index}
                  message={message.text}
                  isSender={!message.isBot}
                />
              ))}
            </Box>
          </Box>
        </Box>
        {isLoading && (
          <Typography variant="caption" color="textSecondary">
            Generating response...
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            autoFocus
            disabled={isLoading}
            placeholder="Type your message..."
            name="message"
            value={currentMessage}
            InputProps={{
              endAdornment: (
                <IconButton type="submit">
                  <Send />
                </IconButton>
              ),
            }}
            onChange={handleChange}
          />
        </form>
      </Box>
    </Card>
  );
};

export default Chat;
