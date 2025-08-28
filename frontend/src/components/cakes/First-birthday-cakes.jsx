import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import FirstBirthdayCart from '../FirstBirthdayCart';

const FirstBirthdayCakes = () => {
  return (
    <div> <Link to='/' className='homeicon' ><IoHome/></Link>
    <FirstBirthdayCart/>
    </div>
  )
}

export default FirstBirthdayCakes