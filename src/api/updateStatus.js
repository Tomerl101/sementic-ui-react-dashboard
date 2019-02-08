export function updateStatus(id, status) {
  return new Promise((resolve, reject) => {
    fetch(`/game/${id}`, {
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
      .catch(error => console.log(error))
  })
}