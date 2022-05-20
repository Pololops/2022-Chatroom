import { legacy_createStore as createStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import reducer from 'src/reducers';
import logger from 'src/middlewares/logger';
import auth from 'src/middlewares/auth';

// ? Commande pour permettre à l'extension Chrome Redux DevTools de se connecter à notre app
// * Si la fonction __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ existe, alors on connecte le Redux Devtools
// * avec la prise en charge des autres enhancers(ex: Middleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// ? Le store est le gardien du state dans Redux, un objet qui contient 5 méthodes, dont :
// * getState() : permet de récupérer le state
// * dispatch() : permet de modifier le state
// * subscribe() : permet de s'abonner aux changements de state
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, auth)),
);

export default store;
