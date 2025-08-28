import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import CelebrationCart from '../CelebrationCart';


const Celebration = () => {
  return (
    <div>
         <Link to='/' className='homeicon' ><IoHome/></Link>
         <CelebrationCart/>
         </div>
  )
}

export default Celebration