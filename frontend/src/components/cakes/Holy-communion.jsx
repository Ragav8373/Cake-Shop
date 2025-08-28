import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import HolyCommunionCart from '../HolyCommunionCart';

const HolyCommunion = () => {
  return (
    <div> <Link to='/' className='homeicon' ><IoHome/></Link>
    <HolyCommunionCart/>
    </div>
  )
}

export default HolyCommunion