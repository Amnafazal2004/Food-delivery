import React from 'react'
import './AddDownload.css'
import { assets } from '../../assets/assets'

const AddDownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
        <p>For better Experience Download <br />Tomato App</p>
        <div className="appdownloadplatforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AddDownload
