import PropTypes from 'prop-types';

export default function Message({ author, content, userId }) {
  return (
    <div
      className={
        userId % 2 === 0
          ? 'messages__message messages__message--right'
          : 'messages__message'
      }
    >
      <div className="messages__message__author">{(author !== '') ? author : 'Anonyme'}</div>
      <div className="messages__message__content">{content}</div>
    </div>
  );
}

Message.defaultProps = {
  userId: 1,
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  userId: PropTypes.number,
};
