import React from 'react'
import thumb from '../../images/thumb.png'
import './Recom.css'

import { group_user } from '../../userdata/recomendedGroup'

const Recom = () => {
  return (
    <div className='recom'>
        <div className='recom_head'>
            <img src={thumb} alt="" />
            <p>RECOMENDED GROUPS</p>
        </div>
        <div >
            {
                group_user.map(data=>{
                    return(
                        <div className="recom_group"> 
                            <div>
                            <img src={data.img} alt="" />
                            <p><b>{data.name}</b></p>
                            </div>
                            <button>Follow</button>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Recom