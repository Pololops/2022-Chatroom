import './styles.scss';

import { useState } from 'react';

// Components' Imports
import Messages from '../Messages';
import Form from '../Form';
import Settings from '../Settings';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="app">
      <h1>Chatroom</h1>
      <Messages />
      <Form />
      <Settings isFormOpen={isFormOpen} handleClick={toggleForm} />
    </div>
  );
}

export default App;
