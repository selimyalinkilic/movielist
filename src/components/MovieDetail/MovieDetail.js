import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import 'moment/locale/tr';

import './MovieDetail.scss';

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
    }, 1500);
    moment.locale('tr');
  }
  render() {
    const { movie } = this.state;
    return (
      <div className="container">
        { 
          !movie.Title ? 
          <div className="movieDet">
            <div className="movieDetRow">
              <Skeleton width={300} height={30} />
            </div>
            <div className="movieDetRow">
              <Skeleton width={300}  height={445} />
            </div>
            <div className="movieDetRow">
              <Skeleton width={300} height={30} />
            </div>
            <div className="movieDetRow">
              <Skeleton width={300} height={30} />
            </div>
            <div className="movieDetRow">
              <Skeleton width={300} height={30} />
            </div>
            <div className="movieDetRow">
              <Skeleton width={300} height={30} />
            </div>
            <div className="movieDetRow">
              <Skeleton width={300} height={30} />
            </div>
            <div className="movieDetRow">
              <Skeleton width={300} height={30} />
            </div>
          </div> : 
          <div className="movieDet" key={movie.imdbID}>
            <h3 className="movieTitle">{movie.Title}</h3>
            <div className="movieDetRow">
              <img src={movie.Poster} className="moviePoster"  alt={movie.Title} />
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">Yayınlanma Tarihi : </div>
              <div className="movieDetCol">{moment(movie.Released).format('LL')}</div>
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">Süre : </div>
              <div className="movieDetCol">{ movie.Runtime }</div>
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">Tür : </div>
              <div className="movieDetCol">{movie.Genre}</div>
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">Yönetmen : </div>
              <div className="movieDetCol">{movie.Director}</div>
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">Oyuncular : </div>
              <div className="movieDetCol">{movie.Actors}</div>
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">IMDB Puanı : </div>
              <div className="movieDetCol">{movie.imdbRating}</div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default MovieDetail;