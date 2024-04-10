import axios from 'axios';

const API_KEY = '43226276-a07a0c17e428cfffb021b9b05';

const params = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
});

export function fetchImages(userSearch) {
  const url = `https://pixabay.com/api/?${params}&q=${encodeURIComponent(
    userSearch
  )}`;
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        throw new Error(response.status);
      }
      return data.hits;
    });
}
