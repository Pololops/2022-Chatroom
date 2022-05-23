// Les actions
import { WS_CONNECT, SEND_MESSAGE, addMessage } from 'src/actions';

let socket;

const websocket = (store) => (next) => (action) => {
  switch (action.type) {
    case WS_CONNECT: {
      // ? Connexion au server configuré avec websocket
      socket = window.io('http://localhost:3001');

      socket.on('server_message', (message) => {
        store.dispatch(addMessage(message));
      });

      break;
    }

    case SEND_MESSAGE: {
      const state = store.getState();

      socket.emit('client_message', {
        author: state.user.pseudo,
        content: state.newMessage,
      });

      break;
    }

    default:
      next(action);
  }
};

export default websocket;
