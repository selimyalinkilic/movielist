import React, {useState, useEffect} from 'react';

import Search from '../Search/Search';
import MoviesList from '../MoviesList/MovieList';

const API_MOVIE_URL = 'https://www.omdbapi.com/?s=pokemon&type=movie&apikey=62f90678';

const Movies = () => {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(API_MOVIE_URL)
      .then(res => res.json())
      .then(res => {
        setMovies(res.Search);
        setLoading(false);
      })
  }, []);

  const search = searchVal => {
    setLoading(true);
    setErrorMessage(null);

    fetch(`https://www.omdbapi.com/?s=${searchVal}&type=movie&apikey=62f90678`)
      .then(res => res.json())
      .then(response => {
        if(response.Response === "True"){
          setMovies(response.Search);
          setLoading(false);
        }else{
          setErrorMessage(response.Error);
          setLoading(false);
        }
      })
  }
  return (
    <div className="moviesContent">
      <Search search={search} />
      {
        loading && !errorMessage ? (
          <div className="w-100 d-flex justify-content-center">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <MoviesList movies={movies} />
        )
      }
    </div>
  )
}

export default Movies;