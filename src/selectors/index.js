/* eslint-disable import/prefer-default-export */

// ? Les Seletors
// * Des fonctions qui prennent en paramètre tout le state ou une partie seulement
// * et qui renvoient des données dérivées de ce state

/**
 * function qui retourne la plus grande id d'un tableau d'objets
 * @param {array} items un tableau d' objets avec une propriété id
 * @returns l'id max
 */
export function getHighestId(items) {
  if (items.length === 0) {
    return 0;
  }

  const ids = items.map((item) => item.id);
  return Math.max(...ids);
}
