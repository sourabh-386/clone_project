import React from 'react'
import './BodyAside.css'
import error from '../../images/error.png'
import Input from '../../miniComp/input/Input'
import Recom from '../../miniComp/recomended/Recom'
const BodyAside = () => {
  return (
    <div>
      <div className="aside">
        <Input />
        <hr />
        <br />
        <br />
        <p className='aside_para'>
          <img src={error} alt="" />
          Your location will help us serve better and extend a personalised experience.
        </p>

        <br />
        <br />
        <div className='aside_recom'>
        <Recom />

        </div>
      </div>
    </div>
  )
}

export default BodyAside