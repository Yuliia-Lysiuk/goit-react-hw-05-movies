import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';
const api_key = '0a2814b3bd9896999647754a4eaffe27';

export async function getTrendingWeek() {
  const response = await axios.get(
    `${baseURL}trending/movie/day?api_key=${api_key}`
  );
  return response.data.results;
}

export async function getMovieById(movie_id) {
  const response = await axios.get(
    `${baseURL}movie/${movie_id}?api_key=${api_key}`
  );
  return response.data;
}

export async function getCast(movie_id) {
  const response = await axios.get(
    `${baseURL}movie/${movie_id}/credits?api_key=${api_key}`
  );
  return response.data.cast;
}

export async function getReviews(movie_id) {
  const response = await axios.get(
    `${baseURL}movie/${movie_id}/reviews?api_key=${api_key}`
  );
  return response.data.results;
}

export async function getSearchMovie(query) {
  const response = await axios.get(
    `${baseURL}search/movie?api_key=${api_key}&query=${query}`
  );
  return response.data.results;
}
