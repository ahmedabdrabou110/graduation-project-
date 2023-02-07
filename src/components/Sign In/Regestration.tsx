import React from 'react'
import "./Regestration.css"
import RegestraionButton from './RegestrationButton'
import { regestrationInfo } from '../Utilits/constants';
const Regestration = () => {
  return (
    <div className="container">
        <div className="layout"></div>
        <div className="signin__container">
        <div className="title">
            <img src="/assets/Logo.svg" alt="Logo" />
            <h1>Sign in to HoRus.</h1>
        </div>
        <div className="regestration__container">
            {
                regestrationInfo.map(item => (
                    <RegestraionButton key={item.src} src={item.src} title={item.title} />
                ))
            }
        </div>
    </div>
    </div>
  )
}

export default Regestration