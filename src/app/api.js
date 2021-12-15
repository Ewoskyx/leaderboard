const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/vGG9xDVHB3hp7rXU4bg8/scores';
export async function getScore() {
  const response = await fetch(gameUrl);
  const data = await response.json();
  return data;
}

export async function createScore(gameJson) {
  const response = await fetch(gameUrl, {
    method: 'POST',
    body: JSON.stringify(gameJson),
    headers: { 'Content-Type': 'application/json' },

  });
  const data = await response.json();
  return data;
}