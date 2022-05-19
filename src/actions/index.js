// ? Les Action Types :
// * De simple string qui reprennent les différents valeurs des clés types des action creators
// * ils permettent la gestion d'erreur et l'autocompletion dans le reducer : ./reducer/index.js
export const CHANGE_INPUT_TEXT = 'CHANGE_INPUT_TEXT';
export const ADD_MESSAGE = 'ADD_MESSAGE';

// ? Les Action Creators :
// * Des fonctions qui renvoie un objet avec une clé 'type' qui possède en valeur
// * le nom d'une action écrite en UPPER_CAMEL_CASE, qui sera importé par le reducer
export const changeInputText = (inputText) => ({
  type: 'CHANGE_INPUT_TEXT',
  inputText,
});

export const submitForm = (author, content) => ({
  type: 'ADD_MESSAGE',
  author,
  content,
});
