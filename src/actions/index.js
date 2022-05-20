// ? Les Action Types :
// * De simple string qui reprennent les différents valeurs des clés types des action creators
// * ils permettent la gestion d'erreur et l'autocompletion dans le reducer : ./reducer/index.js
export const CHANGE_MESSAGE_INPUT_VALUE = 'CHANGE_MESSAGE_INPUT_VALUE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CHANGE_EMAIL_INPUT_VALUE = 'CHANGE_EMAIL_INPUT_VALUE';
export const CHANGE_PASSWORD_INPUT_VALUE = 'CHANGE_PASSWORD_INPUT_VALUE';

// ? Les Action Creators :
// * Des fonctions qui renvoie un objet avec une clé 'type' qui possède en valeur
// * le nom d'une action écrite en UPPER_CAMEL_CASE, qui sera importé par le reducer
export const changeInputValue = (value) => ({
  type: 'CHANGE_MESSAGE_INPUT_VALUE',
  payload: value,
});

export const submitForm = (author, content) => ({
  type: 'ADD_MESSAGE',
  author,
  content,
});

export const toggleSettings = () => ({
  type: 'TOGGLE_SETTINGS',
});

export const changeEmailInputValue = (value) => ({
  type: 'CHANGE_EMAIL_INPUT_VALUE',
  payload: value,
});

export const changePasswordInputValue = (value) => ({
  type: 'CHANGE_PASSWORD_INPUT_VALUE',
  payload: value,
});
