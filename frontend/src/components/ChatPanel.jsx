import { useState } from "react";

export default function ChatPanel() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input) return;
    setMessages([...messages, input]);
    setInput("");
  }

  return (
    <div className="bg-zinc-900 p-4 rounded-xl h-full">
      <div className="h-96 overflow-auto mb-4">
        {messages.map((msg, i) => (
          <div key={i}>{msg}</div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 p-2 rounded bg-zinc-800"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}