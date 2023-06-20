import React, { useRef } from 'react'
import './Login.css'
// import eye from '../../images/'

import fb from '../../images/login/fb.png'
import google from '../../images/login/search.png'
import img from '../../images/login/513049 PI8X2J 876.png'
import cross from '../../images/cross.png'
import { useContext } from 'react'
import { context } from '../../context/context'
import close from '../../images/cross.png'


const Login = () => {

const {setlogin}=useContext(context)


    const user_form = useRef(null)

  
    function gotosign() {
   const window_width=window.innerWidth;

   if(window_width>750){
    
        user_form.current.style.transform = 'translate(-736px, 0px)';
    }
    else{

        user_form.current.style.transform = 'translate(-350px, 0px)';
        
    }



    }
    function gotocreate() {
        user_form.current.style.transform = 'translate(0px, 0px)';

    }

    return (
        <div className='fixed_div'>
      <div className='close' onClick={()=>setlogin(false)}> <img src={close} alt="img" /></div>

            <div className="user_form" ref={user_form}>
                <div className="user_form_login">
                    <p className="user_form_login_para">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                    <br />
                    <div className="create_account">
                        <h1>Create Account</h1>
                        <p>Already have an account? <b onClick={gotosign}>Sign In</b></p>
                    </div>
                    <br />
                    <div className="form_grid">
                        <div className="user_detail">
                            <div className="user_detail_form">
                                <div className="user_detail_name">
                                    <input type="text" placeholder='First Name' />
                                    <input type="text" placeholder='Last Name' className='last_name' />

                                </div>
                                <input type="email" placeholder='Email' />
                                <div className="user_password" >
                                    <input type="password" placeholder='Password' />
                                    <i class='bi bi-eye'></i>
                                </div>
                                <input type="password" placeholder='Confirm Password' />
                            </div>
                            <div className="login_btn">

                                <button className='btn1' onClick={()=>setlogin(false)}>Create Account</button>
                                <button className='btn2'><img src={fb} alt="" /> Sign up with Facebook</button>
                                <button className='btn2'><img src={google} alt="" /> Sign up with Google</button>
                            </div>
                        </div>
                        <div className="user_detail_img">
                            <img src={img} alt="" />
                            <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>

                        </div>
                    </div>
                </div>

                <div className="user_form_signup signup">
                    <div className="user_form_login new">
                        <p className="user_form_login_para para2">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                        <br />
                        <div className="create_account">
                            <h1>Sign In</h1>
                            <p>Dont't have an account yet? <b onClick={gotocreate}>Create New Account</b></p>
                        </div>
                        <br />
                        <div className="form_grid">
                            <div className="user_detail">
                                <div className="user_detail_form">
    
                                    <input type="email" placeholder='Email' />
                                    <div className="user_password" >
                                        <input type="password" placeholder='Password' />
                                        <i class='bi bi-eye'></i>
                                    </div>
                                </div>
                                <div className="login_btn">

                                    <button className='btn1' onClick={()=>setlogin(false)}>Sign In</button>
                                    <button className='btn2'><img src={fb} alt="" /> Sign up with Facebook</button>
                                    <button className='btn2'><img src={google} alt="" /> Sign up with Google</button>
                                    <center className='forgot'><b>Forgot Password?</b></center>
                                </div>
                            </div>
                            <div className="user_detail_img">
                                <img src={img} alt="img" />

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Login