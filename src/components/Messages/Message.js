// import PropTypes from 'prop-types';

export default function Message({ props }) {
  return (
    <div className="messages__content">
      <div className="messages__content__name">Super Chat</div>
      <div className="messages__content__text">Salut ça va ?</div>
    </div>
  );
}

// Message.defaultProps = {
// 	props: '',
// };

// Message.propTypes = {
// 	props: PropTypes.number|string|bool|func|array|object.isRequired,
// };
