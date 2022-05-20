import './style.scss';

import { useSelector, useDispatch } from 'react-redux';
import {
  toggleSettings,
  changeEmailInputValue,
  changePasswordInputValue,
} from 'src/actions';

export default function Settings() {
  const { isOpen, email, password } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleFormToggle = () => {
    dispatch(toggleSettings());
  };

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
      className={!isOpen ? 'settings' : 'settings settings--open'}
    >
      <button
        type="button"
        className="settings__toggler"
        onClick={handleFormToggle}
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
