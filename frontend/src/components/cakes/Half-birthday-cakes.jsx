import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import HalfBirthdayCart from '../HalfBirthdayCart';

const HalfBirthdayCakes = () => {
  return (
    <div> <Link to='/' className='homeicon' ><IoHome/></Link>
    <HalfBirthdayCart/>
    
    </div>
  )
}

export default HalfBirthdayCakes