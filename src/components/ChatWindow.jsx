import { useRef, useEffect } from "react";
import Message from "./Message";
import { knowledgeBase } from "../data/knowledgeBase";


// Suggested questions shown in the chatbox.
// Keep these in sync with knowledgeBase keys.
const SUGGESTED_QUESTIONS = [
  "Why should I use VS Code over other editors?",
  "What is the difference between a workspace and a folder?",
  "What is the best initial setup for beginners?",
  "What does an advanced VS Code setup look like?",
  "How should I go about learning VS Code effectively?",
  "What is the Activity Bar?"
];

// If any suggested question doesn't exist in knowledgeBase (after updates),
// replace it with the first available matching key so buttons always work.
const ensuredSuggestedQuestions = SUGGESTED_QUESTIONS.map((q) =>
  knowledgeBase[q] ? q : Object.keys(knowledgeBase)[0]
);



function ChatWindow({ messages, onSend }) {
  // 1. Create a reference to point to an empty div at the bottom
  const endOfMessagesRef = useRef(null);

  // 2. Automatically scroll to that div whenever 'messages' change
  useEffect(() => {
    // The smooth behavior makes the scroll look nice
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((message) => (
        <Message
          key={message.id}
          sender={message.sender}
          text={message.text}
        />
      ))}
      
      {/* Suggestion Buttons placed inside the chat window so they scroll */}
      <div className="suggestions">
        {ensuredSuggestedQuestions.map((q, index) => (

          <button 
            key={index} 
            className="suggestion-btn" 
            onClick={() => onSend(q)}
          >
            {q}
          </button>
        ))}
      </div>

      {/* 3. Place the empty div at the very end of the message list */}
      <div ref={endOfMessagesRef} />
    </div>
  );
}

export default ChatWindow;