// ? Action types : de simple string qui reprennent les différents types des action creators
// * ils permettent la gestion d'erreur et l'autocompletion dans le reducer : ./reducer/index.js
export const CHANGE_INPUT_TEXT = 'CHANGE_INPUT_TEXT';
export const ADD_MESSAGE = 'ADD_MESSAGE';

// ? Action creators : des fonctions qui renvoie un objet de type action et transmises au reducer
export const changeInputText = (inputText) => ({
  type: 'CHANGE_INPUT_TEXT',
  inputText,
});

export const submitForm = (surname, content) => ({
  type: 'ADD_MESSAGE',
  surname,
  content,
});
