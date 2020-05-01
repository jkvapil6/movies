import React from 'react'
import { Link } from 'react-router-dom'


///
/// Component displays movies
///
const MoviesList = (props) => {

  let moviesList

  if (props.movies.length > 0) {
    moviesList = props.movies.map(m => (
      <div key={m.id} className="card mb-3" style={{width: 200, float: 'left', margin: 10}}>
        <Link to={`/movie/${m.id}`}>
          <h5 className="card-header">
            { m.title.length < 18 ? m.title : m.title.slice(0, 15).concat('...') }
          </h5>
        </Link>
        <img 
          style={{width: 185, height: 288, display: 'block', padding: 10}} 
          src={`http://image.tmdb.org/t/p/w185//`.concat(m.poster_path)} 
          alt="movie card" 
        />
      </div>
    ))
  } else {
    moviesList = <h2>Did not find any movies :(</h2>
  }

  return (
    <div style={{float: 'left'}}>
      <h1>{props.title}</h1>
      {moviesList}
    </div>
  )
}

export default MoviesList;
