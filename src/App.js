import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Welcome from './pages/welcome'
import Search from './pages/search'
import Movie from './pages/movie'
import Serie from './pages/movie'

import Layout from './components/Layout'
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/bootstrap.min.css'

///
/// App Main Component 
///
const App = () => {
  return (
    <Router basename="/">
      <div className="App">
        <Header />

        <Layout>
          <Switch>
            <Route exact path='/' component={ Welcome }/>
            <Route exact path='/search/:input' component={ Search }/>

            <Route exact path='/search/' component={ Welcome }/>
            
            {/* <Route path='/movie' component={ Movie }/> */}

            <Route exact path='/serie/:id' component={ Serie }/>
            <Route exact path='/movie/:id' component={ Movie }/>
          </Switch>
        </Layout>
        <Footer />
      </div>
    </Router>
  )
}

export default App
