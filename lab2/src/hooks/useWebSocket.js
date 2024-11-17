import { useState, useEffect, useRef } from "react";

const useWebSocket = (url) => {
    const [messages, setMessages] = useState([]);
    const [isConnected, setIsConnected] = useState(false);
    const socketRef = useRef(null);

    useEffect(() => {
        socketRef.current = new WebSocket(url);

        socketRef.current.onopen = () => {
            setIsConnected(true);
            console.log("WebSocket connected");
        };

        socketRef.current.onmessage = (event) => {
            setMessages((prev) => [...prev, event.data]);
        };

        socketRef.current.onclose = () => {
            setIsConnected(false);
            console.log("WebSocket disconnected");
        };

        socketRef.current.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        return () => {
            socketRef.current?.close();
        };
    }, [url]);

    const sendMessage = (message) => {
        if (socketRef.current && isConnected) {
            socketRef.current.send(message);
        } else {
            console.error("WebSocket is not connected.");
        }
    };

    return { messages, isConnected, sendMessage };
};

export default useWebSocket;
