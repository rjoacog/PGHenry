import React from 'react'

function Card({img, brand, model, color, price}) {
  return (
    <div>
      <div>
        <img src={img} alt='img not found'/>
        <h3>{color} color</h3>
        <h2>{brand}, {model}</h2>
        <h3>{price}</h3>
      </div>
    </div>
  )
}

export default Card