import React, { Component } from 'react';
import Skeleton from 'react-loading-skeleton';
import moment from 'moment';
import 'moment/locale/tr';

import './MovieDetail.scss';
import {Helmet} from "react-helmet";

class MovieDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie : [] // movie adına state oluşturuldu
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movie : this.props.movie // propstan gelen movie datası movie state'ine set edildi
      })
    }, 1500); // Component ilk yüklendiğinde data gelmiyordu bu yüzden settimeout komutuyla dataları set edildi
    moment.locale('tr'); // moment js dilini tr ye çevrildi.
  }
  render() {
    const { movie } = this.state;
    return (
      <div className="container">
        <Helmet>
          <title>{ !movie.Title ? 'OMDB API & React App' : `Movie : ${movie.Title}` }</title>
        </Helmet>
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
              <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x445'} className="moviePoster"  alt={movie.Title} />
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">Yayınlanma Tarihi : </div>
              <div className="movieDetCol">{movie.Released !== 'N/A' ? moment(movie.Released).format('LL') : '-'}</div>
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">Süre : </div>
              <div className="movieDetCol">{ movie.Runtime !== 'N/A' ? movie.Runtime : '-' }</div>
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">Tür : </div>
              <div className="movieDetCol">{movie.Genre !== 'N/A' ? movie.Genre : '-'}</div>
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">Yönetmen : </div>
              <div className="movieDetCol">{movie.Director !== 'N/A' ? movie.Director : '-'}</div>
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">Oyuncular : </div>
              <div className="movieDetCol">{movie.Actors !== 'N/A' ? movie.Actors : '-'}</div>
            </div>
            <div className="movieDetRow">
              <div className="movieDetCol">IMDB Puanı : </div>
              <div className="movieDetCol">{movie.imdbRating !== 'N/A' ? movie.imdbRating : '-'}</div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default MovieDetail;