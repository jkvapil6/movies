import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Welcome from './pages/welcome'
import Search from './pages/search'
import Movie from './pages/movie'

import './styles/bootstrap.min.css'
import './App.css';

const App = () => {

  return (
    <Router>

      <div className="App">
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link to="/" className="navbar-brand">Movies Viewer</Link>
   
            <form className="form-inline my-2 my-bd-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>
        </header>

        <div className="jumbotron">    
          <Switch>
            <Route exact path='/' component={ Welcome }/>
            <Route exact path='/search' component={ Search }/>
            {/* <Route exact path='/movie' component={ Movie }/> */}
            <Route exact path='/movie/:id' component={ Movie }/>
          </Switch>
        </div>
      
      </div>
    </Router>
  );
}

export default App;
