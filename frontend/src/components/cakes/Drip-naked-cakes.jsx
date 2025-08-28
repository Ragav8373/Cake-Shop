import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import DripandNakedcakesCart from '../DripandNakedcakesCart';

const DripNakedCakes = () => {
  return (
    <div>
         <Link to='/' className='homeicon' ><IoHome/></Link>
         <DripandNakedcakesCart/>
         </div>
  )
}

export default DripNakedCakes