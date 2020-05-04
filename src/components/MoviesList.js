import React from 'react'
import Slider from "react-slick";

import { Link } from 'react-router-dom'

///
/// Component displays movies
///
const MoviesList = (props) => {

  // styles for single movie card 
  const styles = {
    width: 200, 
    float: 'left', 
    margin: 10
  }

  let moviesList

  if (props.movies.length > 0) {

    moviesList = props.movies.map(m => (
      <div key={ m.id } className="card mb-3" style={ styles }>
        <Link to={props === "movie" ? `/movie/${ m.id }` : `/serie/${ m.id }` }>
          <h5 className="card-header">
            { m.title.length < 16 ? m.title : m.title.slice(0, 13).concat('...') }
          </h5>
        </Link>
        <Link to={`/movie/${ m.id }`}>
        <img 
          style={{width:'100%', margin: 'auto', maxWidth: 250, height: 288, display: 'block', padding: 10}} 
          src={`http://image.tmdb.org/t/p/w300//`.concat(m.poster_path)} 
          alt="poster" 
        />
        </Link>
      </div>
    ))

  } else {
    moviesList = <h2>Did not find any movies :(</h2>
  }

  /////////////////////////////////////////////

  // slick responsive settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  /////////////////////////////////////////////
  /////////////////////////////////////////////

  return (
    <div>
      <h1 className="display-3">{ props.title }</h1>
      <hr className="my-3" />
      <Slider {...settings}>
       { moviesList }
      </Slider>
    </div>
  )
}

export default MoviesList
