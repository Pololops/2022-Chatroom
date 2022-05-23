// Import des action types défini dans .actions/
import {
  CHANGE_MESSAGE_INPUT_VALUE,
  ADD_MESSAGE,
  TOGGLE_SETTINGS,
  CHANGE_SETTINGS_VALUE,
  SAVE_USER,
} from 'src/actions';

// L'état initial de l'App
const initialState = {
  newMessage: '',
  messages: [],
  settings: {
    isOpen: true,
    email: '',
    password: '',
  },
  user: {
    pseudo: 'Anonyme',
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
        settings: {
          ...state.settings,
          isOpen: false,
        },
      };
    }

    case ADD_MESSAGE: {
      const { id, author, content } = action.payload;

      const newMessage = {
        id,
        author,
        content,
      };

      return {
        ...state, // reprise de tout l'ancien state
        messages: [...state.messages, newMessage],
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

    case SAVE_USER: {
      return {
        ...state, // reprise de tout l'ancien state
        user: {
          pseudo: action.payload,
        },
        settings: {
          isOpen: false,
          email: '',
          password: '',
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
