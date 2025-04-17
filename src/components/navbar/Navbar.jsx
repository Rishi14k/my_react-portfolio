import React, { useRef, useState } from 'react'
import logo from "../../assets/rishilogo.png"
import "./Navbar.css"
import underline from "../../assets/nav_underline.svg"
import AnchorLink from "react-anchor-link-smooth-scroll"
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"

const Navbar = () => {
  const [menu,setMenu] = useState("home")

  const menuRef = useRef()

  const openMenu = ()=>{
    menuRef.current.style.right="0px"
  }
  const closeMenu = ()=>{
    menuRef.current.style.right="-350px"
  }

  return (
    <div className='navbar'>
        <img src={logo} alt="Rishi"/>
        <img src={menu_open} onClick={openMenu} alt="menu" className='nav-mob-open'/>
        <ul ref={menuRef} className='ul-menu'>

            <img src={menu_close} alt="close" onClick={closeMenu} className='nav-mob-close'/>
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu=="home" ? <img src={underline} />: <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About me</p></AnchorLink>{menu=="about" ? <img src={underline} />: <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={()=>setMenu("projects")}>Projects</p></AnchorLink>{menu=="projects" ? <img src={underline} />: <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#service'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu=="services" ? <img src={underline} />: <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu=="contact" ? <img src={underline} />: <></>}</li>
        </ul>
        <div className='nav-contact'><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact with me</AnchorLink></div>
    </div>
  )
}

export default Navbar