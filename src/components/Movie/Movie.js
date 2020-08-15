import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import MovieDetail from '../MovieDetail/MovieDetail';

const Movie = () => { 
  
  let {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=62f90678`)
      .then(res => res.json())
      .then(res => {
        setMovie(res);
        setLoading(false);
      })
  }, [id]);
  return (
    <div className="movie">
      {
        loading && !errorMessage ? (
          <div className="w-100 d-flex justify-content-center mt-3">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          <MovieDetail movie={movie} />
        )  
      }
    </div>
  )
}

export default Movie;
            