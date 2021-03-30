const API_KEY = "fde439d4dfe0d33dac9a4897b95615bb";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMoview: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

//  https://api.themoviedb.org/3/movie/top_rated?api_key=fde439d4dfe0d33dac9a4897b95615bb&language=en-US

// https://api.themoviedb.org/3/discover/movie?api_key=fde439d4dfe0d33dac9a4897b95615bb&withgenres=35-comedy
