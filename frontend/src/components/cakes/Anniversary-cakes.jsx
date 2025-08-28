import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import AnniversaryCart from '../Anniversary Cart';

const AnniversaryCakes = () => {
  return (
    <div>
      
        <Link to='/' className='homeicon' ><IoHome/></Link>
        <AnniversaryCart/>

    </div>
  )
}

export default AnniversaryCakes