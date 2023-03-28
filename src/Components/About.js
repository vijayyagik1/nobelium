import React from 'react'
import './About.css'
import image2 from '../Components/vijay.png'
function About() {
  return (
    <div>
        <div className='Info'>
        <h1>About Us</h1>
        <img src={image2}/>
        <h5>Age:22 <br></br> Location:India</h5>
        <p>Hello My Name is Vijay Yagik. I am From Orai Uttar Pradesh. Coming to my educational background I have done my graduation in Bcom in 2021. <br></br>I have knowledge of html,css,javascript and React-JS.Now  I am in Function up Cohort and  I learn React-JS currently It's to much intresting language for biginners. My hobbies are playing Cricket and learn new things.</p>
      </div>
    </div>
  )
}

export default About