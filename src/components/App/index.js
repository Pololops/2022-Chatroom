import './styles.scss';

import { useSelector, useDispatch } from 'react-redux';
import { toggleConnectForm } from '../../actions';

// Components' Imports
import Messages from '../Messages';
import MessageForm from '../MessageForm';
import Settings from '../Settings';

function App() {
  const isConnectFormOpen = useSelector((state) => state.isConnectFormOpen);
  const dispatch = useDispatch();

  const handleFormClick = () => {
    dispatch(toggleConnectForm(!isConnectFormOpen));
  };

  return (
    <div className="app">
      <h1>Chatroom</h1>
      <Messages />
      <MessageForm />
      <Settings
        isConnectFormOpen={isConnectFormOpen}
        handleFormClick={handleFormClick}
      />
    </div>
  );
}

export default App;
