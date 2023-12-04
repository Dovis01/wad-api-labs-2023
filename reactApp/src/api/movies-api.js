export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=3949a8e40149fe7ea222fce59c7d0f73&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };