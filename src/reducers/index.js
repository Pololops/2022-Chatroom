// Import des action types défini dans .actions/
import {
  CHANGE_MESSAGE_INPUT_VALUE,
  ADD_MESSAGE,
  TOGGLE_SETTINGS,
  CHANGE_SETTINGS_VALUE,
} from 'src/actions';

// Import des selectors  défini dans .selectors/
import { getHighestId } from 'src/selectors';

// L'état initial de l'App
const initialState = {
  newMessage: '',
  messages: [],
  settings: {
    isOpen: false,
    email: '',
    password: '',
  },
};

// ? Reducer : Fonction de base de Redux pour gérer le store
// Prend le state courant et une action en paramètres
// En fonction de l'action, elle va retourner un nouveau state
//* C'est donc un traducteur d'intention en modification de state
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_MESSAGE_INPUT_VALUE: {
      return {
        ...state, // reprise de tout l'ancien state
        newMessage: action.payload,
      };
    }

    case ADD_MESSAGE: {
      const newMessage = {
        id: getHighestId(state.messages) + 1,
        author: action.author,
        content: action.content,
      };

      const newMessages = [...state.messages];
      newMessages.push(newMessage);

      return {
        ...state, // reprise de tout l'ancien state
        messages: newMessages,
        newMessage: '',
      };
    }

    case TOGGLE_SETTINGS: {
      return {
        ...state, // reprise de tout l'ancien state
        settings: {
          ...state.settings,
          isOpen: !state.settings.isOpen,
        },
      };
    }

    case CHANGE_SETTINGS_VALUE: {
      return {
        ...state, // reprise de tout l'ancien state
        settings: {
          ...state.settings,
          [action.key]: action.value,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
