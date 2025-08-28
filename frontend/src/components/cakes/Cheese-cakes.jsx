import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const CheeseCakes = () => {
  return (
    <div>
         <Link to='/' className='homeicon' ><IoHome/></Link>Cheese Cakes
         </div>
  )
}

export default CheeseCakes