// ? Import de StrictMode : un composant mère qui permet d'être mieux alerté des erreurs de code
import { StrictMode } from 'react';

import { render } from 'react-dom';

// ? Import du composant Provider de Redux pour englober App et lui founir notre store
import { Provider } from 'react-redux';

import App from 'src/components/App';
import store from './store';

const rootReactElement = (
  <StrictMode>
    {/* met à dispo le store de Redux pour les composant enfant de Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

const target = document.getElementById('root');

render(rootReactElement, target);
