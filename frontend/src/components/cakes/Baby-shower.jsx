import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import BabyShowerCart from '../BabyShowerCart';
const BabyShower = () => {
  return (
    <div>
         <Link to='/' className='homeicon' ><IoHome/></Link>
         <BabyShowerCart/>
        </div>
  )
}

export default BabyShower