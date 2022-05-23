import { useEffect } from 'react';
/* eslint-disable import/prefer-default-export */

export function useSound(soundPath, ...deps) {
  // ...deps permet de récupérer tous les autres arguments
  useEffect(() => {
    // Lecture d'un fichier audio en JS à chaque nouveau message
    if (deps[0].length > 0) {
      const sound = new Audio(soundPath);
      sound.play();
    }
  }, deps);
}
