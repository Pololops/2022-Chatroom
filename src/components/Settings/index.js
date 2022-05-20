// import PropTypes from 'prop-types';
import './style.scss';

export default function Settings() {
  return (
    <div className="settings">
      <button type="button" className="settings__button">
        +
      </button>

      <form className="settings__form">
        <input
          type="text"
          id="email"
          className="settings__form__email"
          placeholder="Email"
        />

        <input
          type="password"
          id="password"
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

// Settings.defaultProps = {
// props: '',
// };

// Settings.propTypes = {
// props: PropTypes.number|string|bool|func|array|object|node.isRequired,
// };
