import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          Home
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}>
              About Me!
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/portfolio'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Portfolio
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/post'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Blogs Posts
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/courses'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Courses
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/certifications'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Certifications
            </Link>
          </li>

          <div className='nav-links-mobile'>
           <div className='btn'>
            <a
            href="https://www.linkedin.com/in/sara-binte-zinnat-787942b9" target="_blank" onClick={closeMobileMenu}>
              <FaLinkedinIn />
            </a>
           </div>
           <div className='btn'>
            <a
            href="hhttps://github.com/sara-zinnat" target="_blank" onClick={closeMobileMenu}>
              <FaGithub />
            </a>
            </div>
            <div className='btn'>
            <a
            href="https://www.instagram.com/sara_shifa_deen" target="_blank" onClick={closeMobileMenu}>
              <FaInstagram />
            </a>
            </div>
            <div className='btn'>
            <a
            href="mailto:shazsara20@gmail.com" target="_blank" onClick={closeMobileMenu}>
              <FaEnvelope />
            </a>
            </div>
    </div>


        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
