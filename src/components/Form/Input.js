import PropTypes from 'prop-types';

export default function Input({ inputText, onChange }) {
  return (
    <input
      type="input"
      className="chat-form__input"
      placeholder="Saisissez votre message…"
      value={inputText}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  inputText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
