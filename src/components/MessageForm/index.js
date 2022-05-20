import './style.scss';

// ? Le hook useSelector de Redux permet de lire les propriétés du state
import { useSelector, useDispatch } from 'react-redux';

// * Import des actions configurées dans notre implémentation de Redux
import { changeInputValue, submitForm } from '../../actions';

import Input from './Input';
import Button from './Button';

const regexForSubmitForm = /^(?!^ +$).+$/;

export default function MessageForm() {
  // ? useSelector() : un hook redux pour lire une clé du store
  const newMessage = useSelector((state) => state.newMessage);

  // ? UseDispatch() : un hook redux pour modifier une clé du store
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(changeInputValue(event.target.value));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newMessage.match(regexForSubmitForm)) {
      dispatch(submitForm('Super Chat', newMessage));
    }
  };

  return (
    <form className="chat-form" onSubmit={handleFormSubmit}>
      <Input inputValue={newMessage} onChange={handleInputChange} />
      <Button />
    </form>
  );
}
