import './style.scss';

// ? Le hook useSelector de Redux permet de lire les propriétés du state
import { useSelector } from 'react-redux';

import Message from './Message';

export default function Messages() {
  // ? Récupération des propriétés nécessaires, du state, avec le hook custom useSelector de redux
  const messages = useSelector((state) => state.messages);
  return (
    <div className="messages">
      {messages.map(({ surname, content }) => (
        <Message key={content} surname={surname} content={content} />
      ))}
    </div>
  );
}
