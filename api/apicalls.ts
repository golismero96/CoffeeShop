const apikey: string = "e7851f4f677924b2fe5e45749260ffb9";
export const nowPlayingMovies: string = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
export const upcomingMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}`;
export const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`;
export const topRatedMovies = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`;
export const searchMovies = (keyword: string) => {
  return `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${keyword}`;
};
