import React, { useState } from "react";
import useWebSocket from "../hooks/useWebSocket";

const Chat = () => {
    const [input, setInput] = useState("");
    const { messages, isConnected, sendMessage } = useWebSocket("ws://localhost:3000");

    const handleSend = () => {
        sendMessage(input);
        setInput("");
    };

    return (
        <div className="chat-container">
            <h2>WebSocket Chat</h2>
            <div className="status">
                Status: {isConnected ? "Connected" : "Disconnected"}
            </div>
            <div className="messages">
                {messages.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your message"
                />
                <button onClick={handleSend} disabled={!isConnected}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
