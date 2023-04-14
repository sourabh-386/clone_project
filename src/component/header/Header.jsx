import React from 'react'
import './Header.css'

import arrowleft from '../../images/arrowleft.png'
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header_data">
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
        <div className="header_phone">
          <img src={arrowleft} alt="" />
          <button><b>Join Group</b></button>
        </div>
      </div>
    </div>
  )
}

export default Header