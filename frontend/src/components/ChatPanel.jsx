import { useEffect, useState } from "react";
import socket from "../services/socket";

export default function ChatPanel() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("chat-message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("chat-message");
    };
  }, []);

  function sendMessage() {
    if (!input.trim()) return;

    socket.emit("chat-message", input);
    setInput("");
  }

  return (
    <div className="bg-zinc-900 p-4 rounded-xl h-full">
      <div className="h-96 overflow-auto mb-4">
        {messages.map((msg, i) => (
          <div key={i} className="mb-2">
            {msg}
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          className="flex-1 p-2 rounded bg-zinc-800"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="px-3 py-2 bg-purple-600 rounded"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}