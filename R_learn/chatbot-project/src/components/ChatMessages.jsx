import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  //put hooks at the top of the component
  //Hooks should not be inside anything.

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            /* why are we using {} instead of ()?
                    the answer could be that {} accept dynamic attributes directly
                    ()saves the value as string where as {} save the res ult into this props */
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
