import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header'
import Movies from '../Movies/Movies'
import Movie from '../Movie/Movie'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path='/' component={Movies} exact />
        <Route path='/movie/:id' component={Movie} exact />
      </Switch>      
    </div>
  )
}

export default App;