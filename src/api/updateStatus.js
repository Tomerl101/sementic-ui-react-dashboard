export function updateStatus(id, status) {
  return new Promise((resolve, reject) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://gamecancellations.herokuapp.com/game/${id}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status })
    })
      .then(response => response.json())
      .then(result => {
        resolve(result);
      })
      .catch(error => reject(error))
  })
}