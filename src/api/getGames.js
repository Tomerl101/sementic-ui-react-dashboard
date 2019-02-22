export function getGames() {
  return new Promise((resolve, reject) => {
    fetch('https://cors-anywhere.herokuapp.com/https://gamecancellations.herokuapp.com/games')
      .then(response => response.json())
      .then(result => resolve(result))
      .catch(error => reject(error))
  });
}