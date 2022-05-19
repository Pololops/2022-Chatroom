import PropTypes from 'prop-types';

export default function Message({ author, content }) {
  return (
    <div className="messages__message">
      <div className="messages__message__author">{author}</div>
      <div className="messages__message__content">{content}</div>
    </div>
  );
}

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
