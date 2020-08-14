import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';

import './MovieDetail.scss'

class MovieDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie : []
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movie : this.props.movie
      })
      console.log(this.state.movie)
    }, 1500);
  }
  render() {
    const { movie } = this.state;
    return (
      <div className="container">
        { 
          <div className="movieDet" key={movie.imdbID}>
            <h3 className="movieTitle">{movie.Title || <Skeleton width={300} /> }</h3>
            <div className="movieDetRow">
              { 
                movie.Poster ? 
                <img src={movie.Poster} className="moviePoster"  alt={movie.Title} /> : <Skeleton width={300}  height={445} />
              }
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">Süre : </div>
              <div className="movieDetCol">
                { movie.Runtime || <Skeleton /> }
              </div>
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">Tür : </div>
              <div className="movieDetCol">{movie.Genre || <Skeleton />}</div>
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">Yönetmen : </div>
              <div className="movieDetCol">{movie.Director || <Skeleton />}</div>
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">Oyuncular : </div>
              <div className="movieDetCol">{movie.Actors || <Skeleton />}</div>
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">IMDB Puanı : </div>
              <div className="movieDetCol">{movie.imdbRating || <Skeleton />}</div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default MovieDetail;