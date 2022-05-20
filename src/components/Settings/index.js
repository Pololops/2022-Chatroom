import './style.scss';

import { useSelector, useDispatch } from 'react-redux';
import { toggleSettings, changeSettingsValue, login } from 'src/actions';

import Input from '../Input';

export default function Settings() {
  const { isOpen, email, password } = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const handleFormToggle = () => {
    dispatch(toggleSettings());
  };

  const handleSettingsChange = (event) => {
    dispatch(changeSettingsValue(event.target.name, event.target.value));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Pour se logger on va dispatch une action
    dispatch(login());
  };

  return (
    <div className={!isOpen ? 'settings' : 'settings settings--open'}>
      <button
        type="button"
        className="settings__toggler"
        onClick={handleFormToggle}
      >
        +
      </button>

      <form className="settings__form" onSubmit={handleFormSubmit}>
        <Input
          id="email"
          name="email"
          className="settings__form__email"
          placeholder="Email"
          value={email}
          onChange={handleSettingsChange}
          autoComplete="on"
        />

        <Input
          type="password"
          id="password"
          name="password"
          className="settings__form__password"
          placeholder="Mot de passe"
          value={password}
          onChange={handleSettingsChange}
          autoComplete="on"
        />

        <button type="submit" className="settings__form__button">
          Envoyer
        </button>
      </form>
    </div>
  );
}
