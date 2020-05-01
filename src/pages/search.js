import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';

import '../styles/bootstrap.min.css'
import '../App.css';

import MoviesList from '../components/MoviesList'

const api_key = '8da605a5d9396912aa1f7532d10a9839'

///
/// Search page
///
const Search = () => {

  /// DATA
  const [popularMovies, setPopularMovies] = useState([])

  ///
  /// Loads movies immediately when component is loaded 
  ///
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setPopularMovies(data.results))
  }, [])


  const init = () => {
    // fetch(`https://api.themoviedb.org/3/movie/550?api_key=${api_key}`)
    // .then(response => response.json())
    // .then(data => console.log(data));
  
    
    // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data.results)
    //   setPopularMovies(data.results)
    //   console.log(popularMovies)
    // }).then(
    //   () => console.log(popularMovies)
    // );
  
    console.log(popularMovies)
  }

  return (
    <div>
      <h1 className="display-3">Search Page</h1>
      <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-4" />
      <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </p>


    </div>
  );
}

export default Search;
