const auth = (store) => (next) => (action) => {
  console.log('auth');
  switch (action.type) {
    case type: {

    }

    default:
      next(action);
  }
};

export default auth;
