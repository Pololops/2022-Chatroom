import PropTypes from 'prop-types';

import { useRef, useEffect } from 'react';

export default function Input({ inputValue, onChange }) {
  // Création d'un autofocus sur le champs de texte au chargement du composant
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <input
      ref={inputRef}
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
