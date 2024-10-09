import './Chat.css';
import logo  from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/userimg.jpg';
import model from './assets/model.gif';

function Chat() {
  return (
    <div className="Chat">
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'>
            <img src={logo} alt="logo" className='logo'/>
            <span className='brand'>Mr.Bot</span>
          </div>
          <button className='midBtn'>
            <img src={addBtn} alt="add" className='addBtn'/>New Chat
          </button>
          <div className='upperSideBottom'>
            <button className='query'><img src={msgIcon} alt="msg"/>What is programming ?</button>
            <button className='query'><img src={msgIcon} alt="msg"/>What is networking ?</button>
          </div>

          <div className='model'>
            <img src={model} alt='model'/>
          </div>
        </div>

        <div className='lowerSide'>
          <div className='listItems'><img src={home} alt='' className='listItemsImg'/>Home</div>
          <div className='listItems'><img src={saved} alt='' className='listItemsImg'/>Saved</div>
          <div className='listItems'><img src={rocket} alt='' className='listItemsImg'/>Upgrade to Pro</div>
        </div>
      </div>

      <div className='main'>
        <div className='chats'>
          <div className='chat'>
            <img className='chatImg' src={userIcon} alt='' height='50%'/><p className='txt'>Hi</p>
          </div>
          <div className='chat bot'>
            <img className='chatImg' src={logo} alt=''/><p className='txt'>Hello... <br/> I'm Mr.Bot and I'm here to help you!</p>
          </div>
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Send a message...'/><button className='send'><img src={sendBtn} alt=''/></button>
          </div>
          <p>Mr.Bot can make mistakes. Check important info.</p>
        </div>
      </div>
    </div>
  );
}

export default Chat;

