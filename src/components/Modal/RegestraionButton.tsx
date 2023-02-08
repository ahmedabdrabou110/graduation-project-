import React from 'react'
import "./RegestrationButton.css"
import { types } from '../Utilits/constants'
const RegestraionButton = ({src , title}:types) => {
  return (
    <>
        <button className='regestration_button'>
            <img src={src} alt={title} />
            <h3 className={`${title === "Facebook" ? "facebook" : null}`}>Continue with {title}</h3>
        </button>
    </>
  )
}

export default RegestraionButton