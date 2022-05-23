import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useSelector } from 'react-redux';
import { isMessageMine } from 'src/selectors';

export default function Message({ author, content }) {
  const isMine = useSelector(isMessageMine(author));

  // const classnames = isMine ? 'messages__message' : 'messages__message messages__message--right';
  // ? classNames : une librairie NPM pour remplacer plusieurs ternaires sur les class du JSX
  const classnames = classNames('messages__message', { 'messages__message--right': !isMine });

  return (
    <div className={classnames}>
      <div className="messages__message__author">{author}</div>
      <div className="messages__message__content">{content}</div>
    </div>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
