import React from 'react';
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import ThemeCakesCart from '../ThemeCakesCart';

const ThemeCakes = () => {
  return (
    <div> <Link to='/' className='homeicon' ><IoHome/></Link>
    <ThemeCakesCart/>
    </div>
  )
}

export default ThemeCakes