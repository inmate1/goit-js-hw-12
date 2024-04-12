import axios from 'axios';

export async function fetchImages(params) {
  const url = `https://pixabay.com/api/?${params}`;
  const response = await axios(url);
  if (response.data.hits.length === 0) {
    return;
  }
  return response.data;
}
