import React, { useState, useEffect } from 'react'

import MoviesList from '../components/MoviesList'

const api_key = '8da605a5d9396912aa1f7532d10a9839'

///
/// Welcome page
///
const Welcome = () => {

  /// DATA
  
  const [popularMovies, setPopularMovies] = useState([])

  /// SIDE EFFECTS

  useEffect(() => {
    fetchMovies()
  }, [])

  /////////////////////////////////////////////

  ///
  /// Loads movies immediately when component is loaded 
  ///
  const fetchMovies = async () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => setPopularMovies(data.results))
  }

  /////////////////////////////////////////////
  
  ///
  /// Test function
  ///
  const init = () => {
    console.log(popularMovies)
  }

  /////////////////////////////////////////////
  /////////////////////////////////////////////

  return (
    <div>
      {/* <button onClick={init}>Click me</button> */}
      
      <MoviesList 
        title="Popular Movies"
        movies={popularMovies}
      />

      <MoviesList 
        title="Popular Series"
        movies={popularMovies}
      />
    </div>
  )
}

export default Welcome
