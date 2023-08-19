import React from 'react'
import "./styles/about.css"
import pic from "./pic.webp"




const Aboutus = () => {
  return (
    <div className="about">
      <div className="content">
        <div className="bg1">
          <div className="bg2"></div>
        </div>
      </div>
      <div className="about-text">
        <div className="image-container">
          <img src={pic} alt='' />

        </div>
        <div className="text-container">
          <h1>ABOUT US</h1>
          <p>Here, we provide exclusive and burning news headlines of the world. Head to here to hear about what's happening around the world</p>
        </div>
      </div>
    </div>

  )

}

export default Aboutus