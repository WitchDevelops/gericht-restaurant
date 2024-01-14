import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">

      <div className="app__navbar-logo">
        <img src={images.gericht} alt="" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log in / Register</a>
        <div></div>
        <a href="/" className="p__opensans">Book a table</a>
      </div>
      {/* mobile navigation */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className="app__navbar-smallscreen_burger" color="#FFF" fontSize={27} onClick={() => { setToggleMenu(true) }} />
        {
          toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => { setToggleMenu(false) }} />
              <ul className="app__navbar-smallscreen_links">
                <li><a href="#home" className="p__opensans">Home</a></li>
                <li><a href="#about" className="p__opensans">About</a></li>
                <li><a href="#menu" className="p__opensans">Menu</a></li>
                <li><a href="#awards" className="p__opensans">Awards</a></li>
                <li><a href="#contact" className="p__opensans">Contact</a></li>
              </ul>
            </div>
          )
        }


      </div>
    </nav>
  )
}

export default Navbar