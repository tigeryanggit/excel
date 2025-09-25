import React from 'react'
import ScrollToTop from './ScrollToTop'

function Formula({name,link}) {
  return (
    <>
      <ScrollToTop/>
        <a href={link}><li >{name}</li></a>

    </>
  )
}

export default Formula