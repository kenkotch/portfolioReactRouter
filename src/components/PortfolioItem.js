import React from 'react'

const PortfolioItem = (props) => (
  <div>
    <h1>A thing I've Done</h1>
    <p>This page is thr the item with id of { props.match.params.id }</p>
  </div>
)

export default PortfolioItem
