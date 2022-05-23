import './style.scss';
import dingSound from 'src/assets/sounds/message-pop-alert.mp3';

// ? Le hook useSelector de Redux permet de lire les propriétés du state
import { useSelector } from 'react-redux';

import { useRef, useEffect } from 'react';

import { useSound } from 'src/hooks';

import Message from './Message';

export default function Messages() {
  // ? Récupération des propriétés nécessaires, du state, avec le hook custom useSelector de redux
  const messages = useSelector((state) => state.messages);

  // useRef() permet de marquer un composant React
  // pour qu'une fois injecté dans le DOM on puisse le cibler
  const messagesRef = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    // * Scroll auto au bas d'un élément
    // messagesRef.current.scroll(0, scrollRef.current.scrollHeight); // ancienne méthode
    scrollRef.current.scrollIntoView({ behavior: 'smooth' }); // nouvelle méthode
  }, [messages]);

  useSound(dingSound, messages);

  return (
    <div className="messages" ref={messagesRef}>
      {messages.map((message) => (
        <Message key={message.id} {...message} />
      ))}
      <div ref={scrollRef} />
    </div>
  );
}
