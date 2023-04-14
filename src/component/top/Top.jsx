import React from 'react'
import './Top.css'
import logo from '../../images/logo.png'
import arrow_down from '../../images/arrow_down.png'
import search from '../../images/search.png'

import rectangle from '../../images/Rectangle.png'
import ovel from '../../images/Oval.png'
import path from '../../images/Path.png'


const Top = () => {
  return (
    <div>
        <div className="top">
            <img src={logo} alt="#"  className='main_img'/>
            <div className="top_search">
                <input type="text" placeholder='Search for your favorite groups in ATG'/>
                <img src={search} alt="#" />
            </div>
            <div className='top_last'> 
                <p>Create account. </p>
                <p className='top_last_color'>It's free! </p>
                <img src={arrow_down} alt="#" />
            </div>
            <div className='top_phone'>
              <img src={rectangle} alt="" />
              <img src={ovel} alt="" />
              <img src={path} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Top