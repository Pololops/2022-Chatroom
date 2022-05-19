import './style.scss';

// ? Le hook useSelector de Redux permet de lire les propriétés du state
import { useSelector, useDispatch } from 'react-redux';

// * Import des actions configurées dans notre implémentation de Redux
import { changeInputText, submitForm } from '../../actions';

import Input from './Input';
import Button from './Button';

export default function Form() {
  // ? useSelector() : un hook redux pour lire une clé du store
  const inputText = useSelector((state) => state.inputText);

  // ? UseDispatch() : un hook redux pour modifier une clé du store
  const dispatch = useDispatch();

  const handleInputChange = () => (event) => {
    dispatch(changeInputText(event.target.value));
  };

  const handleFormSubmit = () => (event) => {
    event.preventDefault();
    dispatch(submitForm('Super Chat', inputText));
    dispatch(changeInputText(''));
  };

  return (
    <form className="chat-form" onSubmit={handleFormSubmit(submitForm)}>
      <Input
        inputText={inputText}
        onChange={handleInputChange(changeInputText)}
      />
      <Button />
    </form>
  );
}
