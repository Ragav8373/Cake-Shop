import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const About = () => {
  return (
    <div className='pizzabg1'>
      <ul className='cookiesul'>
                    <li><Link to='/' className='homeicon' ><IoHome/></Link></li>
                    <li className='mt-2 ms-2 cookiesli'>About</li>
           </ul>
      </div>
      
  )
}

export default About;