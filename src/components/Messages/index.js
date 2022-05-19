// import PropTypes from 'prop-types';

import './style.scss';

import Message from './Message';

export default function Messages({ props }) {
  return (
    <div className="messages">
      <Message />
      <Message />
      <Message />
    </div>
  );
}

// Messages.defaultProps = {
// 	props: '',
// };

// Messages.propTypes = {
// 	props: PropTypes.number|string|bool|func|array|object.isRequired,
// };
