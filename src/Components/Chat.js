import React, { useState, useEffect } from 'react';
import { getMessages, postMessage } from '../Services/chatService.js';


const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        const response = await getMessages();
        setMessages(response.data);
    };

    const handleSendMessage = async () => {
        if (newMessage.trim()) {
            const message = { content: newMessage, sender: 'User' }; // Modify sender as needed
            await postMessage(message);
            setNewMessage('');
            fetchMessages();
        }
    };

    return (
        <div>
            <h1>Chat Application</h1>
            <div className="messages">
                {messages.map((msg) => (
                    <div key={msg.id}>
                        <strong>{msg.sender}</strong>: {msg.content}
                    </div>
                ))}
            </div>
            <div className="input">
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
