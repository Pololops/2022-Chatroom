import PropTypes from 'prop-types';
import './style.scss';

import { useSelector, useDispatch } from 'react-redux';
import { changeEmailInputValue, changePasswordInputValue } from '../../actions';

export default function Settings({ isConnectFormOpen, handleFormClick }) {
  const { email, password } = useSelector((state) => state.connectForm);
  const dispatch = useDispatch();

  const handleEmailInputChange = (event) => {
    dispatch(changeEmailInputValue(event.target.value));
  };

  const handlePasswordInputChange = (event) => {
    dispatch(changePasswordInputValue(event.target.value));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className={!isConnectFormOpen ? 'settings' : 'settings settings--open'}
    >
      <button
        type="button"
        className="settings__button"
        onClick={handleFormClick}
      >
        +
      </button>

      <form className="settings__form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="email"
          name="email"
          autoComplete="on"
          className="settings__form__email"
          placeholder="Email"
          value={email}
          onChange={handleEmailInputChange}
        />

        <input
          type="password"
          id="password"
          name="password"
          autoComplete="on"
          className="settings__form__password"
          placeholder="Mot de passe"
          value={password}
          onChange={handlePasswordInputChange}
        />

        <button type="submit" className="settings__form__button">
          Envoyer
        </button>
      </form>
    </div>
  );
}

Settings.propTypes = {
  isConnectFormOpen: PropTypes.bool.isRequired,
  handleFormClick: PropTypes.func.isRequired,
};
