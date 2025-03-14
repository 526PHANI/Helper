import React, { useState, useEffect } from "react";
import { db, auth } from "./firebaseConfig";
import { collection, addDoc, query, orderBy, onSnapshot } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import "./Chat.css"; // Import the styles

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [user, setUser] = useState(null); 
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });

    return () => unsubscribe();
  }, []);

  const login = async () => {
    await signInWithPopup(auth, provider);
  };

  const sendMessage = async () => {
    if (!text.trim() || !user) return;

    await addDoc(collection(db, "messages"), {
      text,
      user: user.displayName || "Anonymous",
      timestamp: new Date(),
    });
    setText("");
  };

  return (
    <div className="chat-container">
      <h2>Chat Room</h2>
      {!user ? (
        <button className="login-button" onClick={login}>Login with Google</button>
      ) : (
        <>
          <p className="welcome-text">Welcome, {user.displayName}!</p>
          <div className="message-input-container">
            <input
              type="text"
              className="message-input"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type a message..."
            />
            <button className="send-button" onClick={sendMessage}>Send</button>
          </div>

          <ul className="messages-list">
            {messages.map((msg, index) => (
              <li key={index} className="message">
                <strong>{msg.user}:</strong> {msg.text}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Chat;
