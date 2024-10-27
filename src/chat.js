// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Chat.css';
// import logo from './assets/chatgpt.svg';
// import addBtn from './assets/add-30.png';
// import msgIcon from './assets/message.svg';
// import home from './assets/home.svg';
// import saved from './assets/bookmark.svg';
// import rocket from './assets/rocket.svg';
// import sendBtn from './assets/send.svg';
// import userIcon from './assets/userimg.jpg';
// import model from './assets/model.gif';

// function Chat() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [allMessages, setAllMessages] = useState([]); // For storing all fetched messages

//   useEffect(() => {
//     // Fetch all messages from the backend
//     const fetchMessages = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/messages');
//         if (response.data.success) {
//           setAllMessages(response.data.messages);
//         }
//       } catch (error) {
//         console.error('Error fetching messages:', error);
//       }
//     };
//     fetchMessages();
//   }, []);

//   const handleNewChat = () => {
//     setMessages([]); 
//   };

//   const handleSendMessage = async () => {
//     console.log("Sending message...");
//     if (input.trim()) {
//       const userMessage = { role: 'user', text: input };
//       const updatedMessages = [...messages, userMessage];
//       setMessages(updatedMessages);
  
//       try {
//         const response = await axios.post('http://localhost:5000/chat', userMessage);
//         if (response.data.success) {
//           const botMessage = response.data.message;
//           setMessages(prevMessages => [...prevMessages, botMessage]);
//         }
//       } catch (error) {
//         console.error('Failed to send message:', error);
//       }
//       setInput('');
//     }
//   };

//   return (
//     <div className="Chat">
//       <div className='sideBar'>
//         <div className='upperSide'>
//           <div className='upperSideTop'>
//             <img src={logo} alt="logo" className='logo'/>
//             <span className='brand'>Mr.Bot</span>
//           </div>
//           <button   className='midBtn'  onClick={handleNewChat}>
//             <img src={addBtn} alt="add" className='addBtn'/>New Chat
//           </button>
          
//           <div className='upperSideBottom'>
//             {allMessages.map((msg, index) => (
//               <button key={index} className='query'>
//                 <img src={msgIcon} alt="msg"/>{msg.text}
//               </button>
//             ))}
//           </div>
          
//           <div className='model'>
//             <img src={model} alt='model'/>
//           </div>
//         </div>

//         <div className='lowerSide'>
//           <div className='listItems'><img src={home} alt='' className='listItemsImg'/>Home</div>
//         </div>
//       </div>

//       <div className='main'>
//         <div className='chats'>
//           {messages.map((msg, index) => (
//             <div key={index} className={`chat ${msg.role === 'bot' ? 'bot' : ''}`}>
//               <img className='chatImg' src={msg.role === 'bot' ? logo : userIcon} alt='' height='50%'/>
//               <p className='txt'>{msg.text}</p>
//             </div>
//           ))}
//         </div>
//         <div className='chatFooter'>
//           <div className='inp'>
//             <input
//               type='text'
//               placeholder='Send a message...'
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
//             />
//             <button className='send' onClick={handleSendMessage}><img src={sendBtn} alt=''/></button>
//           </div>
//           <p>Mr.Bot can make mistakes. Check important info.</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Chat;

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Chat.css';
import logo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/userimg.jpg';
import model from './assets/model.gif';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    // Fetch all messages from the backend
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/messages');
        if (response.data.success) {
          setAllMessages(response.data.messages);
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    // Scroll to the bottom of the chat whenever messages change
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleNewChat = () => {
    setMessages([]); 
  };

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { role: 'user', text: input };
      setMessages(prevMessages => [...prevMessages, userMessage]);
  
      try {
        const botResponse = await getResponseFromGemini(input);
        const botMessage = { role: 'bot', text: botResponse };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Failed to send message:', error);
      }
      setInput('');
    }
  };

  const getResponseFromGemini = async (prompt) => {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      console.error("Gemini API key is missing in environment variables.");
      throw new Error("Gemini API key is missing");
    }

    console.log("API Key:", process.env.GEMINI_API_KEY);


    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
      }),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        console.error('Response status:', response.status);
        throw new Error('Failed to fetch response from Gemini API');
      }
      
      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error('Error fetching from Gemini API:', error);
      throw error;
    }
  };
  
  return (
    <div className="Chat">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={logo} alt="logo" className='logo'/>
            <span className='brand'>Mr.Bot</span>
          </div>
          <button className='midBtn' onClick={handleNewChat}>
            <img src={addBtn} alt="add" className='addBtn'/>New Chat
          </button>
          
          <div className='upperSideBottom'>
            {allMessages.map((msg, index) => (
              <button key={index} className='query'>
                <img src={msgIcon} alt="msg"/>{msg.text}
              </button>
            ))}
          </div>
          
          <div className='model'>
            <img src={model} alt='model'/>
          </div>
        </div>

        <div className='lowerSide'>
          <div className='listItems'><img src={home} alt='' className='listItemsImg'/>Home</div>
        </div>
      </div>

      <div className='main'>
        <div className='chats' ref={messageContainerRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`chat ${msg.role === 'bot' ? 'bot' : ''}`}>
              <img className='chatImg' src={msg.role === 'bot' ? logo : userIcon} alt='' height='50%'/>
              <p className='txt'>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input
              type='text'
              placeholder='Send a message...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button className='send' onClick={handleSendMessage}><img src={sendBtn} alt=''/></button>
          </div>
          <p>Mr.Bot can make mistakes. Check important info.</p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
