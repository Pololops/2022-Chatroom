import PropTypes from 'prop-types';

import { useRef, useEffect } from 'react';

export default function Input({
  type,
  id,
  name,
  className,
  placeholder,
  value,
  onChange,
  autoComplete,
}) {
  // Création d'un autofocus sur le champs de texte au chargement du composant
  const inputRef = useRef();
  useEffect(() => {
    if (className === 'chat-form__input') {
      inputRef.current.focus();
    }
  }, []);

  return (
    <input
      ref={inputRef}
      type={type}
      id={id}
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  );
}

Input.defaultProps = {
  type: 'text',
  id: '',
  name: '',
  className: '',
  placeholder: '',
  autoComplete: 'off',
};

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
};
