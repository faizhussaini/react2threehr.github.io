import React from 'react'

const CandyItems = (props) => {
  return (
    <div>
      {props.value.map(items=><li key={Math.random()}>{items.name} ({items.dec}) @@@ {items.price}</li>)}
    </div>
  )
}

export default CandyItems
