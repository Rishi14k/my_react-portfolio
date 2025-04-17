import React from 'react'
import './footer.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = () => {
  return (
    <div className='footer'>
      <hr />
      <div className="footer-bottom">
        <div>
          <p className='footer-bottom-left'>
            © 2025 Rishi Kothari. All rights reserved.
          </p>
        </div>

        <div className="footer-bottom-right">
          <AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink>
          <AnchorLink className='anchor-link' href='#about'><p>About</p></AnchorLink>
          <AnchorLink className='anchor-link' href='#project'><p>Projects</p></AnchorLink>
          <AnchorLink className='anchor-link' href='#service'><p>Services</p></AnchorLink>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/Rishi14k" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/_rishu_0909?igsh=MWl3YXhmaGU2a2N2MQ==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/rishi-kothari-12b074293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
