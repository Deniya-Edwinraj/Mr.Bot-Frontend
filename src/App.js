import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './main.js'; 
import Chat from './chat.js';
import LoginForm from './Login.js';
import RegisterForm from './Register.js';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chatbot" element={<Chat />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />

        </Routes>
      </div>
    </Router>
    </>

  );
}

export default App;
