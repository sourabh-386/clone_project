import React, { useRef } from 'react'
import './Article.css'
import share from '../../images/share.png'
import more_icon from '../../images/3dot.png'

const Article = ({ btn_txt, work, main_image, heading, para, calender, art_class, date, location, location_txt, user, username, view, }) => {

    let icon_val = useRef(null)
    let initial_icon = false
    function moreicon() {
        if (initial_icon === false) {
            icon_val.current.style.display = 'flex'
            initial_icon = true

        }
        else {
            icon_val.current.style.display = 'none'
            initial_icon = false
        }
    }

    return (
        <div>
            <div className="article">



                <img src={main_image} alt="" className='article_img' />
                <div className='details'>
                    <img className='user_work' src={work} alt="" />

                    <div className='hidden_cont'>
                        <h1 className="article_heading">{heading}  </h1>
                        <div className="more_icon">
                            <img src={more_icon} alt="" onClick={moreicon} />
                        </div>
                        <div className="more_icon_option" ref={icon_val}>
                            <p>Edit</p>
                            <p>Report</p>
                            <p>Option 3</p>
                        </div>

                        <p className="article_para">{para}</p>
                    </div>


                    {
                        calender === '' ? <br /> : <div className='cala_user'>
                            <div>
                                <img src={calender} alt="#" />
                                <p>{date}</p>
                            </div>
                            <div className='articlelocation'>
                                <img src={location} alt="#" />
                                <p>{location_txt}</p>
                            </div>
                        </div>
                    }


                    <div className={art_class}>{btn_txt}</div>

                    <div className='article_bottom'>
                        <div className='article_user'>
                            <img src={user} alt="" className='article_user_img' />
                            <h3>{username}</h3>
                        </div>
                        <div className='article_share'>
                            <p className='bi_eye'><i class="bi bi-eye" ></i></p>
                            <p className='article_view'>{view}k views</p>
                            <div className='article_share_icon'>  <img className='article_share_img2' src={share} alt="" />
                            <p>share</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article