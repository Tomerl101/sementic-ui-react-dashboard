export function getGames() {
  return new Promise((resolve, reject) => {
    fetch('games')
      .then(response => response.json())
      .then(result => resolve(result))
      .catch(error => reject(error))
  });
}