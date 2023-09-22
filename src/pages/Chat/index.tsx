import { useState } from "react";
import { Box, Card, TextField, IconButton } from "@mui/material";
import { Send } from "@mui/icons-material";

import ChatMessage from "../../components/chat/ChatMessage";

interface ChatMessage {
  message: string;
  isSender: boolean;
}

const Chat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      message: "Hi, I am Xavi9-Bot, How can I help you?",
      isSender: false,
    },
  ]);
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
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              overflowY: "auto",
              height: "65vh",
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
        <form
          onSubmit={handleSubmit}
        >
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
