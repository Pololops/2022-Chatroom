import './style.scss';

import { useSelector, useDispatch } from 'react-redux';
import { toggleSettings, changeSettingsValue, login } from 'src/actions';

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

    // Pour se logguer on va dispatch une action
    dispatch(login());

    // const response = await axios.post('http://localhost:3001/login', {
    //   email: 'acidman@herocorp.io',
    //   password: 'fructis',
    // });
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
        <input
          type="text"
          id="email"
          name="email"
          autoComplete="on"
          className="settings__form__email"
          placeholder="Email"
          value={email}
          onChange={handleSettingsChange}
        />

        <input
          type="password"
          id="password"
          name="password"
          autoComplete="on"
          className="settings__form__password"
          placeholder="Mot de passe"
          value={password}
          onChange={handleSettingsChange}
        />

        <button type="submit" className="settings__form__button">
          Envoyer
        </button>
      </form>
    </div>
  );
}
