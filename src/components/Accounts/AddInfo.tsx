import React from 'react'
import "./AddInfo.css" 
import { types } from '../UI/Utilits/constants'
const AddInfo = ({src , title}:types) => {
  return (
    <div className='add_info__container'>
        <div className="content">
            <img src={src} alt={title} />
        <p>{title}</p>
        </div>
    </div>
  )
}

export default AddInfo