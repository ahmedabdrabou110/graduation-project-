import React from 'react'
import "./SignIn.css";
import RegestraionButton from './RegestraionButton';
import { regestrationInfo } from '../UI/Utilits/constants';
const SignIn = () => {
  return (
    <>
        <div className="logo_container">
            <img src="/assets/Logo.svg" alt="Logo" />
            <h3>Sign in to HoRus.</h3>
        </div>
        <div className="regestration">
            {
                regestrationInfo.map(item => (
                    <RegestraionButton key={item.src} src={item.src} title={item.title} />
                ))
            }
        </div>
    </>
  )
}

export default SignIn