import React from 'react'
import profile_pic from "../../assets/hero_img.jpg"
import "./hero.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_pic} alt="img" />
        <h1><span>Hi, I'm Rishi</span> — MERN Stack Developer</h1>
        <p>I’m a BSc CS & IT student with a passion for building dynamic and responsive web applications. I specialize in frontend development and I'm currently mastering backend technologies to become a full-stack MERN developer. I love solving real-world problems through code and aim to create impactful digital solutions.
        </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">
            <a href="../../resume.pdf" download>My resume</a></div>

        </div>
    </div>
  )
}

export default Hero