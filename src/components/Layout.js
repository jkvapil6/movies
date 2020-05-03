import React from 'react'

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
