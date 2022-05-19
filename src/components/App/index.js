import './styles.scss';

// Components' Imports
import Input from '../Input';
import Messages from '../Messages';

function App() {
  return (
    <div className="app">
      <h1>Chatroom</h1>
      <Messages />
      <Input />
    </div>
  );
}

export default App;
