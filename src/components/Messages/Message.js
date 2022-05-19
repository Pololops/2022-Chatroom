import PropTypes from 'prop-types';

export default function Message({ surname, content }) {
  return (
    <div className="messages__message">
      <div className="messages__message__surname">{surname}</div>
      <div className="messages__message__content">{content}</div>
    </div>
  );
}

Message.propTypes = {
  surname: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
