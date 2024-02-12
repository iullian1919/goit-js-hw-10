const URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_RDy6jqtPmwfzc1FCp2q900KgoO9AlNDL94F9L0clH6IprCkr2CSP1Q2Gn842JVqG';

export function fetchBreeds() {
  return fetch(`${URL}/breeds?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${URL}/images/search?api_key=${API_KEY}&breed_ids=${breedId}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
