import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
export function Button() {
  return (
    <div class="socialId">
    <a
    href="https://www.linkedin.com/in/sara-binte-zinnat-787942b9" target="_blank">
      <button className='btn'><FaLinkedinIn /></button>
    </a>
    <a
    href="https://github.com/sara-zinnat" target="_blank">
      <button className='btn'><FaGithub /></button>
    </a>
    <a
    href="https://www.instagram.com/sara_shifa_deen" target="_blank">
      <button className='btn'><FaInstagram /></button>
    </a>
    <a
    href="mailto:shazsara20@gmail.com" target="_blank">
      <button className='btn'><FaEnvelope /></button>
    </a>
    </div>
  );
}
