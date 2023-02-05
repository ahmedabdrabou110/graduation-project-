import React from 'react'
import "./ExperienceItem.css"
import { experienceTypes } from '../Utilits/constants';
const ExperienceItem = (props:experienceTypes) => {
  return (
    <div className='experience__item'>
        <img src={props.src} alt={props.title} />
        {
            props.likely ? <button className='sellout'>
                {props.titleBtn}
        </button> :  ""
        }
        <h2>
            {props.title}
        </h2>
        <p className="tour">
            {props.tour}
        </p>
        <p className="price">
            {props.price}
        </p>
    </div>
  )
}

export default ExperienceItem