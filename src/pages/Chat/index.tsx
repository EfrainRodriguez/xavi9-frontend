import { useState } from "react";
import { Box, Card, TextField, IconButton, Tooltip } from "@mui/material";
import { Send, Delete } from "@mui/icons-material";

import ChatMessage from "../../components/chat/ChatMessage";

const initialMessages: ChatMessage[] = [
  {
    message: "Hi, I am Xavi9-Bot, How can I help you?",
    isSender: false,
  },
];

interface ChatMessage {
  message: string;
  isSender: boolean;
}

const Chat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [currentMessage, setCurrentMessage] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentMessage !== "") {
      setMessages([
        ...messages,
        {
          message: currentMessage,
          isSender: true,
        },
      ]);
      setCurrentMessage("");
    }
  };

  const handleClearChat = () => {
    setMessages(initialMessages);
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
                <ChatMessage
                  key={index}
                  message={message.message}
                  isSender={message.isSender}
                />
              ))}
            </Box>
          </Box>
        </Box>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
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
