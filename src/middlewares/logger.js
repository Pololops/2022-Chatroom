// ? Un Middlewares dans Redux :
// * Une fonction triple fléchée :
// * La 1ère prend le store en paramètre
// * La 2ème prend next en paramètre
// * La 3ème prend l'action courante en paramètre
// C'est la technique du currying : un param par fonction récupéré par les suivantes
// ? Toutes les actions vons passer dans tous les middlewares avant d'atteindre le reducer
const logger = (store) => (next) => (action) => {
  console.log('LOGGER : ', action);

  // ? Pour laisser passer l'action à la prochaine fonction et au réducer : next(action);
  next(action);
};

export default logger;
