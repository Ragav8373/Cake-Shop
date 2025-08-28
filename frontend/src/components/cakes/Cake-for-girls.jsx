import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import CakeforGirlsCart from '../CakeforGirlsCart';

const CakeForGirls = () => {
  return (
    <div>
         <Link to='/' className='homeicon' ><IoHome/></Link>
         <CakeforGirlsCart/>
         </div>
  )
}

export default CakeForGirls