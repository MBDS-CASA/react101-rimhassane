// Fonction pour sélectionner aléatoirement un élément d'un tableau
export function getRandomItem(array) {
  if (!array || array.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Fonction pour obtenir une note aléatoire depuis data.json
export function getRandomNote(data) {
  return getRandomItem(data);
}