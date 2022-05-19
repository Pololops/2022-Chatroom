// Import des action types défini dans .actions/index.js
import { CHANGE_INPUT_TEXT, ADD_MESSAGE } from '../actions';

// L'état initial de l'App
const initialState = {
  inputText: '',
  messages: [],
};

// ? Reducer : Fonction de base de Redux pour gérer le store
// Prend le state courant et une action en paramètres
// En fonction de l'action, elle va retourner un nouveau state
//* C'est donc un traducteur d'intention en modification de state
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_TEXT: {
      return {
        ...state, // reprise de tout l'ancien state
        inputText: action.inputText,
      };
    }

    case ADD_MESSAGE: {
      return {
        ...state, // reprise de tout l'ancien state
        messages: [
          {
            surname: action.surname,
            content: action.content,

          },
          ...state.messages, // reprise de tout les messages
        ],
      };
    }

    default:
      return state;
  }
};

export default reducer;
