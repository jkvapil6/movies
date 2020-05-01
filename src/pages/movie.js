import React, { useEffect, useState } from 'react'

const api_key = '8da605a5d9396912aa1f7532d10a9839'

///
/// Component displays movie detail
///
const Movie = ({ match }) => {

  /// DATA

  const [movie, setMovie] = useState([])

  /// SIDE EFFECTS

  useEffect(() => {
    // console.log(match.params.id)
    fetchMovie(match.params.id)

  }, [match.params.id])

  /////////////////////////////////////////////

  ///
  /// Loads movie info by id
  ///
  const fetchMovie = async (id) => {
     fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
    .then(response => response.json())
    .then(data => setMovie(data))
  }

  const show = () => {
    console.log(movie)
  }

  /////////////////////////////////////////////
  /////////////////////////////////////////////

  return (
    <div>
      <h1>{ movie.title }</h1>
      <button onClick={show}>Show</button>
      <img 
          style={{width: 500, display: 'block', padding: 10}} 
          src={`http://image.tmdb.org/t/p/w500//`.concat(movie.poster_path)} 
          alt="movie card" 
        />
    </div>
  );
}

export default Movie
