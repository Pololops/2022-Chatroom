import './styles.scss';

// Components' Imports
import Messages from '../Messages';
import Form from '../Form';

function App() {
  return (
    <div className="app">
      <h1>Chatroom</h1>
      <Messages />
      <Form />
    </div>
  );
}

export default App;
