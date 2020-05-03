import React, { useState, useEffect } from 'react'

import MoviesList from '../components/MoviesList'

const api_key = '8da605a5d9396912aa1f7532d10a9839'

///
/// Search page
///
const Search = ({ match }) => {

  /// DATA
  const [title, setTitle] = useState("Results:")
  const [results, setResults] = useState([])

  ///
  /// Loads movies immediately when component is loaded 
  ///
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${match.params.input}`)
      .then(response => response.json())
      .then(data => setResults(data.results))
      .then(
        () => setTitle(`Search results for ${match.params.input}:`)
      )
  }, [match.params.input])


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
  
    if (results) {
      console.log(results)
    }
  }

  return (
    <div>
     
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button" onClick={init}>Learn more</a>
      </p>

      <MoviesList 
        title={title}
        movies={results}
      />

    </div>
  )
}

export default Search
