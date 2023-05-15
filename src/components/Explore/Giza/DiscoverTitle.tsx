import React from 'react'
import "./DiscoverTitle.css"
interface titletype {
  title:string
}
const DiscoverTitle = ({title}:titletype) => {
  return (
    <div className='discover_title'>
        <h1>Discover {title}</h1>
        <p>The most beautiful places you can visit at night</p>
    </div>
  )
}

export default DiscoverTitle