import './styles.scss';

// Components' Imports
import Messages from '../Messages';
import MessageForm from '../MessageForm';
import Settings from '../Settings';

function App() {
  return (
    <div className="app">
      <h1>Chatroom</h1>
      <Messages />
      <MessageForm />
      <Settings />
    </div>
  );
}

export default App;
