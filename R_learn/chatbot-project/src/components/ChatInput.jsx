import { useState } from "react";
import { Chatbot } from "supersimpledev";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }
  //  lifting the state up.
  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        // controlled Input
        className="chat-input"
        //we can not style a fragment but we can style a div.
      />
      <button onClick={sendMessage} className="send-button">
        Send
      </button>
    </div>
    /* <input /> is a self closing tag in JSX 
        what i don't know is what is the need for a empty tag
        <input and button cannot be returned at the same time so we need to group them using div 
        */
  );
}
