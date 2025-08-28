import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const HeartShape = () => {
  return (
    <div> <Link to='/' className='homeicon' ><IoHome/></Link>Heart Shape</div>
  )
}

export default HeartShape