import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './MovieList.scss';

import underscore, { sortBy } from 'underscore';

class MovieList extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies : [],
      currentPage : 0,
      perPageData : 5,
      pageCount : 0      
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        movies : underscore.chunk(sortBy(this.props.movies, 'Year'), 5),
        pageCount : Math.ceil(this.props.movies.length / this.state.perPageData)
      })
    }, 1500);
  }

  handlePageClick = (e) => {
    this.setState({
      currentPage : e.target.id - 1
    })
  }

  render() {
    const { movies, currentPage } = this.state;
    const pageItems = [];
    for (let i = 1; i <= this.state.pageCount; i++){      
      pageItems.push(
        <li className={i === currentPage+1 ? 'page-item active' : 'page-item'} >
          <a className="page-link" href={() => false} id={i} onClick={this.handlePageClick}>{i}</a>
        </li>
      )
    }
    return (
      <div className="w-100 d-flex flex-column align-items-center mt-5">
      <div className="w-100 d-flex flex-column align-items-center">
        <div className="movieListHeader">
          <div className="container">
            <div className="row bg-primary pt-2 pb-2">
              <div className="col-3 text-light">IMDB ID</div>
              <div className="col-5 text-light">Title</div>
              <div className="col-4 text-light text-center">Year</div>
            </div>
          </div>
        </div>
        <div className="movieListContent">
          <div className="container">
          {
            movies.length > 0 ? 
            movies[currentPage].map((movie, index) => (
              <Link to={"/movie/" + movie.imdbID} key={movie.imdbID + index}>
                <div className="row pt-2 pb-2">
                  <div className="col-3 movie-id">{movie.imdbID}</div>
                  <div className="col-5 movie-title">{movie.Title}</div>
                  <div className="col-4 movie-year text-center">{movie.Year}</div>
                </div>
              </Link>
            )) : 
            <div className="w-100 d-flex justify-content-center mt-5">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          }                  
          </div>
        </div>
      </div>
      <nav className="mt-5">
        <ul className="pagination pagination-lg">
          {
            pageItems
          }
        </ul>
      </nav>
      </div>
    )
  }
}

export default MovieList;