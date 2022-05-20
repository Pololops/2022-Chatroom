import './styles.scss';

// Components' Imports
import Messages from '../Messages';
import Form from '../Form';
import Settings from '../Settings';

function App() {
  return (
    <div className="app">
      <h1>Chatroom</h1>
      <Messages />
      <Form />
      <Settings />
    </div>
  );
}

export default App;
