import React from 'react'
import { Link } from 'react-router-dom'

import SearchForm from './SearchForm'

///
/// Header Component
///
const Header = () => {

  const styles = {
    paddingLeft: '15%',
    paddingRight: '15%'
  }

  return (
    <header className="App-header">

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={styles}>
          
          <Link to="/" className="navbar-brand">Movies Database</Link>

          <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto"></ul>

            <SearchForm />
          </div>
        </nav>
    </header>
  )
}

export default Header
