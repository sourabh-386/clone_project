import React from 'react'
import './Home.css'
import { Top, Header, Navbar, BodyMain, BodyAside, Login } from '../../component'
import arrowdown from '../../images/arrow_down.png'
import { useContext } from 'react'
import { context } from '../../context/context'
import close from '../../images/cross.png'

const Home = () => {

  const { login } = useContext(context)

  // console.log(name)
  return (
    <div>
    {/* filter: brightness(50%); */}
      <div className="home" style={{backgroundColor:'white',filter:`${!login?"brightness(100%)":'brightness(30%)'}`}} >
        <Top />
        <Header />
        <br />
        <div className="main_body">
          <Navbar />
          <br />
          <br />
          <div className="body">
            <div className="body_main_part">
              <BodyMain />
            </div>
            <div className="body_aside_part">
              <br />
              <br />
              <BodyAside />
            </div>
          </div>

        </div>
      </div >
      {
        !login ? '' : <div className="login_user"><Login />

        </div>

      }

    </div>
  )
}

export default Home