import PropTypes from 'prop-types';

export default function Input({ inputValue, onChange }) {
  console.log(inputValue);
  return (
    <input
      type="input"
      className="chat-form__input"
      placeholder="Saisissez votre message…"
      value={inputValue}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
