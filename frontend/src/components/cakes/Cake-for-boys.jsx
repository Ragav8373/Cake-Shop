import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import CakeForBoysCart from '../CakeforBoysCart';

const CakeForBoys = () => {
  return (
    <div>
         <Link to='/' className='homeicon' ><IoHome/></Link>
         <CakeForBoysCart/>
         </div>
  )
}

export default CakeForBoys