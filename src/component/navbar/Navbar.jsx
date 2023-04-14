import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import arrow_down from '../../images/arrow_down.png'
import person from '../../images/persons.png'
import arrowdown from '../../images/arrow_down.png'
import { useContext } from 'react'
import { context } from '../../context/context'

const Navbar = () => {

  // let [navlink, setnavlink] = useState(false)
const {login,setlogin}=useContext(context)
console.log(login)

  function show_login(){

  }

  let nav_value = false
  const navlink = useRef(null)

  function nav_phone() {
    if (nav_value === false) {
      navlink.current.style.display = 'flex'
      nav_value = true

    }
    else {
      navlink.current.style.display = 'none'
      nav_value = false


    }
    // setnavlink(true)
  }


  return (
    <div>
      <div className="navbar">
        <div className="body_post" onClick={nav_phone}>
          <p><b>Posts(386)</b></p>
          <button> <b>Filter: All </b><img src={arrowdown} alt="" /></button>
        </div>
        <div className="navbar_link" ref={navlink}>
          <a href="#">All Posts(32)</a>
          <a href="#">Articles</a>
          <a href="#">Events</a>
          <a href="#">Education</a>
          <a href="#">Job</a>
        </div>
        <div className="buttons">
          <button className='buttons_1'><b>Wriite a Post</b> <img src={arrow_down} alt="#" /> </button>
          <button className='buttons_2'><img src={person} alt="#" /> <b onClick={()=>setlogin(true)}>Join Group</b></button>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Navbar