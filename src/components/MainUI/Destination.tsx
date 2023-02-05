import React from 'react'
import "./Destination.css"
import { types } from '../Utilits/constants';
const Destination = ({src , title}:types) => {
  return (
    <div className='destination__group__container'>
      <div className="layout"></div>
        <img src={src} alt={title} />
        <h1>{title}</h1>
        <div className="heart">
            <img src="/assets/heart.svg" alt="heart" />
        </div>
    </div>
  )
}

export default Destination