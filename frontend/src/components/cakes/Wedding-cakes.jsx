import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import WeddingCart from '../WeddingCart';



const WeddingCakes = () => {
  return (
    <div>
        <Link to='/' className='homeicon' ><IoHome/></Link>
        <WeddingCart/>
    </div>
  )
}

export default WeddingCakes