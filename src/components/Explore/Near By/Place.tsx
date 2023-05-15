import React from 'react'
import "./Place.css"
import { types } from '../../UI/Utilits/constants'
const Place = ({src, title}:types) => {
  return (
    <div className="place">
            <div className="content">
              <img src={src} alt={title} />
            <p>{title}</p>
            </div>
          </div>
  )
}

export default Place