import React from 'react'

///
/// Layout Component
///
const Layout = (props) => {

  const styles = {
    float: 'left',
    width: '100%',
    paddingLeft: '15%',
    paddingRight: '15%'
  }

  return (
    <div className="jumbotron" style={styles}>
      { props.children }
    </div>
  )
}

export default Layout
