import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Sushan Shrestha</h4>
      <h4>Copyright &copy; 2023 SS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/sushan08" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/sushan-shrestha/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:sushan3523@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer