import React from 'react'
import { Link } from 'react-router-dom'

///
/// Component displays movies
///
const MoviesList = (props) => {

  const styles = {
    width: 200, 
    float: 'left', 
    margin: 10
  }

  let moviesList

  if (props.movies.length > 0) {
    moviesList = props.movies.map(m => (
      <div key={ m.id } className="card mb-3" style={ styles }>
        <Link to={`/movie/${ m.id }`}>
          <h5 className="card-header">
            { m.title.length < 16 ? m.title : m.title.slice(0, 13).concat('...') }
          </h5>
        </Link>
        <img 
          style={{width: 185, height: 288, display: 'block', padding: 10}} 
          src={`http://image.tmdb.org/t/p/w185//`.concat(m.poster_path)} 
          alt="poster" 
        />
      </div>
    ))
  } else {
    moviesList = <h2>Did not find any movies :(</h2>
  }

  return (
    <div style={{float: 'left'}}>
      <h1 className="display-3">{ props.title }</h1>
      <hr class="my-3" />
      { moviesList }
    </div>
  )
}

export default MoviesList
