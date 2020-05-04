import React, { useEffect, useState } from 'react'

import GenresList from '../components/MovieInfo/GenresList'
import TrailerModal from '../components/MovieInfo/TrailerModal'

const api_key = '8da605a5d9396912aa1f7532d10a9839'

///
/// Component displays movie detail
///
const Movie = ({ match }) => {

  /// DATA
  const [movie, setMovie] = useState(null)

  const [genres, setGenres] = useState([])
  const [releaseDate, setReleaseDate] = useState("")
  const [title, setTitle] = useState("")

  /// GUI
  const [showVideo, setShowVideo] = useState(false)

  /// SIDE EFFECTS
  useEffect(() => {
    fetchMovie(match.params.id)
  }, [match.params.id])

  /////////////////////////////////////////////

  ///
  /// Parses movie info from loaded data
  ///
  const parseMovieInfo = (data) => {

    if (data.status_code) {
      console.error(data.status_message)
      setTitle(data.status_message)
      return
    }
    
    setMovie(data)
    setGenres(data.genres)
    setReleaseDate(data.release_date)
    setTitle(data.title)
  }

  /////////////////////////////////////////////

  ///
  /// Loads movie info by id
  ///
  const fetchMovie = async (id) => {

     fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => parseMovieInfo(data))
  }

  /////////////////////////////////////////////

  ///
  /// Test fn
  ///
  const show = () => {
    // console.log(genres)
    // console.log(releaseDate)
    console.log(movie)
  }

  /////////////////////////////////////////////
  /////////////////////////////////////////////

  const styles = {
    width: '100%', 
    float: 'left', 
    margin: 10
  }

  /////////////////////////////////////////////

  let movieInfo = <div></div>

  if (movie && !movie.status_code) {
    movieInfo = (     
      <div>  
        
        <h2>({ releaseDate.split('-')[0] })</h2>
                
        <div style={{display: 'flex'}}>
          <div> 
            <img 
              style={{width: 300, display: 'block', padding: 10}} 
              src={`http://image.tmdb.org/t/p/w300//`.concat(movie.poster_path)} 
              alt="movie card" 
            />
          </div>

          <div style={{marginLeft: "5%"}}>
            <hr className="my-3" />

            <h3>Genres</h3>
            <GenresList genres={genres} />
            <hr className="my-3" />

            <h3>Overview</h3>
            <p class="lead">{ movie.overview }</p>

            <hr className="my-3" />

            <TrailerModal
              title={ title }
              show={ showVideo }
              handleClose={() => setShowVideo(false)}
              src={"https://www.youtube.com/embed/zpOULjyy-n8?rel=0"} 
            />

            <button 
              className="btn btn-secondary my-2 my-sm-0" 
              type="submit"
              onClick={() => setShowVideo(true)}
            > Play Trailer </button>
          </div>
        </div>
      </div>
    )
  }

  /////////////////////////////////////////////

  return (
    <div style={ styles }>
      <h1>{ title }</h1> 
      
      { movieInfo }

      {/* <button onClick={show}>Show</button> */}
    </div>
  )
}

export default Movie
