// Import des action types défini dans .actions/
import { CHANGE_INPUT_TEXT, ADD_MESSAGE } from '../actions';

// Import des selectors  défini dans .selectors/
import { getHighestId } from '../selectors';

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
      const newMessage = {
        id: getHighestId(state.messages) + 1,
        author: action.author,
        content: action.content,
      };

      const messagesWithNewMessage = [
        ...newMessage,
        ...state.messages,
      ];

      return {
        ...state, // reprise de tout l'ancien state
        messages: messagesWithNewMessage,
      };
    }

    default:
      return state;
  }
};

export default reducer;
