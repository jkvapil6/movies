import React from 'react'

///
/// Component displays genres list
///
const GenresList = (props) => {

  let ul = <ul></ul>

  if (props.genres && props.genres.length > 0) {
    ul = props.genres.map(g => (
      <li key={ g.id }>
      { g.name }
      </li>
    ))
  }

  return (
    <div>
      { ul }
    </div>
  )
}

export default GenresList
