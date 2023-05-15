import React from 'react'
import "./ShareTravelElement.css"
import { types } from '../UI/Utilits/constants'
const ShareTravelElement = ({src,title}:types) => {
  return (
    <div className='share_element__container'>
        <div className="image">
                    <img src={src} alt={title} />
        </div>
        <p>{title}</p>
    </div>
  )
}

export default ShareTravelElement