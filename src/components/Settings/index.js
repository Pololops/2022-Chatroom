import PropTypes from 'prop-types';
import './style.scss';

export default function Settings({ isFormOpen, handleClick }) {
  return (
    <div className={!isFormOpen ? 'settings' : 'settings settings--open'}>
      <button type="button" className="settings__button" onClick={handleClick}>
        +
      </button>

      <form className="settings__form">
        <input
          type="text"
          id="email"
          name="email"
          autoComplete="on"
          className="settings__form__email"
          placeholder="Email"
        />

        <input
          type="password"
          id="password"
          name="password"
          autoComplete="on"
          className="settings__form__password"
          placeholder="Mot de passe"
        />

        <button type="submit" className="settings__form__button">
          Envoyer
        </button>
      </form>
    </div>
  );
}

Settings.defaultProps = {
  isFormOpen: false,
};

Settings.propTypes = {
  isFormOpen: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};
