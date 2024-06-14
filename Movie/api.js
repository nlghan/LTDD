const API_KEY = '2557471b';
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&`;

export const getMovies = async () => {
  try {
    const response = await fetch(`${API_URL}s=House`);
    const data = await response.json();
    if (data.Response === 'True') {
      const movies = data.Search;
      if (!movies || movies.length === 0) {
        return null;
      }

      // Fetch detailed information for each movie using imdbID
      const detailedMovies = await Promise.all(
        movies.map(async (movie) => {
          const movieResponse = await fetch(`${API_URL}i=${movie.imdbID}`);
          const movieData = await movieResponse.json();
          return movieData;
        })
      );

      return detailedMovies;
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
