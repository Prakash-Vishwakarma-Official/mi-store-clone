import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
        <Link className='HotAccessoriesLink' to="/music">Music</Link>
        <Link className='HotAccessoriesLink' to="/smartDevices">smartDevices</Link>
        <Link className='HotAccessoriesLink' to="/home">home</Link>
        <Link className='HotAccessoriesLink' to="/lifestyle">lifestyle</Link>
        <Link className='HotAccessoriesLink' to="/mobailAccessories">mobail Accessories</Link>

    </div>
  )
}

export default HotAccessoriesMenu