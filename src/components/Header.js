import React from 'react'
import { Link } from 'react-router-dom'

import SearchForm from './SearchForm'

const Header = () => {

  const styles = {
    paddingLeft: '15%',
    paddingRight: '15%'
  }

  return (
    <header className="App-header">

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={styles}>
          
          <Link to="/" className="navbar-brand">Movies Database</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
             
            </ul>

            <SearchForm />
          </div>
        </nav>
    </header>
  )
}

export default Header
