import { ChatProvider } from "./context/chat.context";
import Chat from "./Chat";

const ChatIndex = () => {
  return (
    <ChatProvider>
      <Chat />
    </ChatProvider>
  );
};

export default ChatIndex;
