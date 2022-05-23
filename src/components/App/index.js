import './styles.scss';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { wsConnect } from 'src/actions';

// Components' Imports
import Messages from '../Messages';
import MessageForm from '../MessageForm';
import Settings from '../Settings';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(wsConnect());
  }, []);

  return (
    <>
      <div className="app">
        <h1>Chatroom</h1>
        <Messages />
        <MessageForm />
      </div>
      <Settings />
    </>
  );
}

export default App;
