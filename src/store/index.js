import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducer';

// ? Le store est le gardien du state dans Redux, un objet qui contient 5 méthodes, dont :
// * getState() : permet de récupérer le state
// * dispatch() : permet de modifier le state
// * subscribe() : permet de s'abonner aux changements de state
const store = configureStore(
  {
    reducer,
  },

  // ? Commande pour permettre à l'extension Chrome Redux DevTools de se connecter à notre app
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
