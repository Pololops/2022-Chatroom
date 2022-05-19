// import PropTypes from 'prop-types';

import './style.scss';

export default function Input({ props }) {
  return (
    <form className="chat-form">
      <input
        type="input"
        className="chat-form__input"
        placeholder="Saisissez votre message…"
      />
      <button type="button" className="chat-form__button">
        {'>'}
      </button>
    </form>
  );
}

// Input.defaultProps = {
// 	props: '',
// };

// Input.propTypes = {
// 	props: PropTypes.number|string|bool|func|array|object.isRequired,
// };
