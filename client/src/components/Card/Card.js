import React from 'react'
import './Card.css'

const Card = ({image,temp}) => {
  return (
    <div className='card'>
      <div className='card_image'>
        <img src={image}/>
      </div>
      <div className='card_info'>
        <h2>Title</h2>
        <h2>{temp}</h2>
        <p>Description </p>
        <p>rating</p>
        <button>Add</button>
      </div>
    </div>
  )
}

export default Card