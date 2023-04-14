import React from 'react'
import './BodyMain.css'
import Article from '../article/Article'

import { UserData } from '../../userdata/userdata'




const BodyMain = () => {
    return (
        <div>
            <div className="bodymain">
                {
                    UserData.map(data => {
                        return (
                            <Article
                                work={data.work}
                                main_image={data.main_img}
                                heading={data.heading}
                                para={data.para}
                                user={data.user}
                                username={data.username}
                                view={data.view}
                                date={data.date}
                                location={data.location}
                                location_txt={data.location_txt}
                                calender={data.calender}
                                art_class={data.art_class}
                                btn_txt={data.btn_txt}

                            />

                        )
                    })
                }
            </div>
        </div>
    )
}

export default BodyMain