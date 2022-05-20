import axios from 'axios';
import { LOGIN, saveUser } from 'src/actions';

const auth = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      // ? la méthode getState() du store Redux permet de récupérer les données du state
      const state = store.getState();

      axios
        .post('http://localhost:3001/login', {
          email: state.settings.email,
          password: state.settings.password,
        })
        .then((response) => {
          store.dispatch(saveUser(response.data.pseudo));
        })
        .catch((error) => console.log(error));

      break;
    }

    default:
      next(action);
  }
};

export default auth;
