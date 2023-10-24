import axios from 'axios';

const API_KEY = '02cdb7a51a2e3d1e8057374db8e49782';
const URL = 'https://api.themoviedb.org/3';
const default_poster =
  'https://shop-cdn1-2.vigbo.tech/shops/126035//products/21752720/images/2-e62e01f93c697739149c01b31defa96b.jpg?version=undefined';

// Запрос популярных фильмов
export const fetchAllMovies = async () => {
  const { data } = await axios.get(
    `${URL}/trending/movie/week?api_key=${API_KEY}`
  );
  return data.results;
};

// Поиск фильмов по названию
export const fetchSearchMovies = async searchQuery => {
  const { data } = await axios.get(
    `${URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
  return data;
};

// Детали фильма
export const fetchMovieDetails = async movieId => {
  const { data } = await axios.get(
    `${URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return data;
};

// Актерский состав
export const fetchMovieCast = async movieId => {
  const { data } = await axios.get(
    `${URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return data.cast;
};

// Обзоры фильма
export const fetchMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${URL}/movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  return data.results;
};

// Постер фильма
export const filmposter = poster_path =>
  poster_path
    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
    : default_poster;
