import React from 'react'

const Card = props => {
  return (
    <div className='card' style={{ backgroundColor: props.color }}>
      <div className='card_body'>
        <h6>{ props.header }</h6>
        <hr />
        <h5>{ props.title }</h5>
        <p>{ props.description }</p> 

      </div>
    </div>
  )
}

export default Card
