import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import SmashCart from '../SmashCart';

const SmashCakes = () => {
  return (
    <div> <Link to='/' className='homeicon' ><IoHome/></Link>
    <SmashCart/>
    </div>
  )
}

export default SmashCakes