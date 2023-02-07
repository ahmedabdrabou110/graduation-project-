import React from 'react'
import "./RegestrationButton.css"
import { types } from '../Utilits/constants';
const RegestraionButton = ({src , title} : types) => {
  return (
    <div className='regestraion_button'>
        <img src={src} alt={title} />
        <h1>Continue with {title}</h1>
    </div>
  )
}

export default RegestraionButton