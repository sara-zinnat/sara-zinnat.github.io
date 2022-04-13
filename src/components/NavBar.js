import React from "react";
import { NavLink } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';


export default function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">

          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Home
          </NavLink>

          <Bars />
          <NavMenu>

          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            About Me!
          </NavLink>
          <NavLink
            to="/portfolio"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Blogs Posts
          </NavLink>
          <NavLink
            to="/courses"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Courses
          </NavLink>
          <NavLink
            to="/certifications"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            activeClassName="text-red-100 bg-red-700"
          >
            Certifications
          </NavLink>

          </NavMenu>

          <NavBtn>
            <NavBtnLink as="a" href="https://www.linkedin.com/in/sara-binte-zinnat-787942b9" target="_blank"><FaLinkedinIn /></NavBtnLink>
             <NavBtnLink as="a" href="https://github.com/sara-zinnat" target="_blank"><FaGithub /> </NavBtnLink>
            <NavBtnLink as="a" href="https://www.instagram.com/sara_shifa_deen" target="_blank"><FaInstagram /></NavBtnLink>
            <NavBtnLink as="a" href="mailto:shazsara20@gmail.com" target="_blank"><FaEnvelope /></NavBtnLink>
          </NavBtn>

        </nav>


      </div>
    </header>
  );
}
