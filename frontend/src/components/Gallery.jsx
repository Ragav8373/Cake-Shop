import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const Gallery = () => {
  return (
    <div className='icebg1'>
      <ul className='cookiesul'>
              <li><Link to='/' className='homeicon'><IoHome/></Link></li>
              <li className='mt-2 ms-2 cookiesli'>Gallery</li>
      </ul>
    </div>
  )
}

export default Gallery;





