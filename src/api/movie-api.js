import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjI5OGY0OTFkOTQxN2RhY2Y1MTY0ZmJmZDA3NjMwZCIsIm5iZiI6MTczMzU3NzI4MC40NzQsInN1YiI6IjY3NTQ0YTQwODAyYmFkMTYwOTFhZDlkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jHrWqerW1WimpGrg-GYWjf-GZKJD8UjkpKo1_2YQKRw";

const movieApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    include_adult: false,
    language: "en-US",
  },
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    accept: "application/json",
  },
});

export const getTrendingMovies = async () => {
  const { data } = await movieApi.get("/trending/movie/day");
  return data;
};

export const searchMovies = async (query, page) => {
  const { data } = await movieApi.get("/search/movie", {
    params: {
      query,
      page,
    },
  });
  return data;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await movieApi.get(`/movie/${movieId}`);
  return data;
};

export const getMovieActors = async (movieId) => {
  const { data } = await movieApi.get(`/movie/${movieId}/credits`);
  return data;
};

export const getMovieReviews = async (movieId, page) => {
  const { data } = await movieApi.get(`/movie/${movieId}/reviews`, {
    params: {
      page,
    },
  });
  return data;
};
