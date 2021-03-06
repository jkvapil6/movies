// @ts-check

import React, { useState, useEffect } from 'react'

import MoviesList from '../components/MoviesList'

import Record from '../model/Record'

const api_key = '8da605a5d9396912aa1f7532d10a9839'

///
/// Welcome page
///
const Welcome = () => {

  /// DATA
  
  const [popularMovies, setPopularMovies] = useState([])
  const [popularSeries, setPopularSeries] = useState([])
  const [familyMovies, setFamilyMovies] = useState([])
  const [documentaryMovies, setDocumentaryMovies] = useState([])

  /// SIDE EFFECTS

  useEffect(() => {
    fetchMovies()
  }, [])

  /////////////////////////////////////////////
  
  ///
  /// Creates unified record of movie / serie
  ///
  const parseMovie = (data) => {

    console.log(data)

    if (!data.status_code) {

      const res = []

      // Serie
      if (data.results[0].name) {
        data.results.forEach(s => {

          const tmp = new Record(
            s.name,
            s.poster_path,
            s.id,
            ["TV Serie"],
            s.overview
          )
          
          res.push(tmp)
        })

        return res
      } 

      // Movie
      if (data.results[0].title) {
        data.results.forEach(s => {

          const tmp = new Record(
            s.title,
            s.poster_path,
            s.id,
            s.genres,
            s.overview
          )
          
          res.push(tmp)
        })

        return res
      } 

      else return data.results

    }
  }

  /////////////////////////////////////////////

  ///
  /// Loads movies immediately when component is loaded 
  ///
  const fetchMovies = async () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setPopularMovies(parseMovie(data)))

    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setPopularSeries(parseMovie(data)))

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=99&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setDocumentaryMovies(parseMovie(data)))

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=10751&language=en-US&page=1`)
      .then(response => response.json())
      .then(data => setFamilyMovies(parseMovie(data)))
  }

  /////////////////////////////////////////////
  /////////////////////////////////////////////

  return (
    <div>
      <MoviesList 
        type="Movies" 
        title="Popular Movies"
        movies={popularMovies}
      />
      <MoviesList
        type="Series" 
        title="Popular Series"
        movies={popularSeries}
      />
      <MoviesList 
        type="Movies" 
        title="Family"
        movies={familyMovies}
      />
      <MoviesList 
        type="Movies" 
        title="Documentary"
        movies={documentaryMovies}
      />
    </div>
  )
}

export default Welcome
