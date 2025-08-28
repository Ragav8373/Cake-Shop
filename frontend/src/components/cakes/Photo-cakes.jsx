import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";

const PhotoCakes = () => {
  return (
    <div> <Link to='/' className='homeicon' ><IoHome/></Link>Photo Cakes</div>
  )
}

export default PhotoCakes