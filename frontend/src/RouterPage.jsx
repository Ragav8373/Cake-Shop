import React from 'react'
import { Route, Routes } from "react-router-dom";

import Home from './components/Home'
import Cakes from './components/Cakes'
import About from './components/About'
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import WeddingCakes from './components/cakes/Wedding-cakes';
import AnniversaryCakes from './components/cakes/Anniversary-cakes';
import Celebration from './components/cakes/Celebration';
import BabyShower from './components/cakes/Baby-shower';
import HolyCommunion from './components/cakes/Holy-communion';
import SmashCakes from './components/cakes/Smash-cakes';
import HalfBirthdayCakes from './components/cakes/Half-birthday-cakes';
import FirstBirthdayCakes from './components/cakes/First-birthday-cakes';
import CakeForBoys from './components/cakes/Cake-for-boys';
import CakeForGirls from './components/cakes/Cake-for-girls';
import ThemeCakes from './components/cakes/Theme-cakes';
import HeartShape from './components/cakes/Heart-shape';
import DripNakedCakes from './components/cakes/Drip-naked-cakes';
import CheeseCakes from './components/cakes/Cheese-cakes';
import PhotoCakes from './components/cakes/Photo-cakes';
import AddProduct from './components/AddProduct';
import CartDetails from './components/CartDetails';
import Checkout from './components/Checkout';
import ViewCart from './components/ViewCart'
import Sidebar from './components/admin/Sidebar';
import Dashboard from './components/admin/Dashboard';
import Products from './components/admin/Products';
import ProductList from './components/admin/ProductList';
import ProductForm from './components/admin/ProductForm';
const RouterPage = () => {
  return (
    <div>
        <div>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cakes/wedding-cakes" element={<WeddingCakes/>}/>
        <Route path="/cakes/anniversary-cakes" element={<AnniversaryCakes/>}/>
        <Route path="/cakes/celebration" element={<Celebration/>}/>
        <Route path="/cakes/baby-shower" element={<BabyShower/>}/>
        <Route path="/cakes/holy-communion" element={<HolyCommunion/>}/>
        <Route path="/cakes/smash-cakes" element={<SmashCakes/>}/>
        <Route path="/cakes/half-birthday-cakes" element={<HalfBirthdayCakes/>}/>
        <Route path="/cakes/first-birthday-cakes" element={<FirstBirthdayCakes/>}/>
        <Route path="/cakes/cake-for-boys" element={<CakeForBoys/>}/>
        <Route path="/cakes/cake-for-girls" element={<CakeForGirls/>}/>
        <Route path="/cakes/theme-cakes" element={<ThemeCakes/>}/>
        <Route path="/cakes/heart-shape" element={<HeartShape/>}/>
        <Route path="/cakes/drip-naked-cakes" element={<DripNakedCakes/>}/>
        <Route path="/cakes/cheese-cakes" element={<CheeseCakes/>}/>
        <Route path="/cakes/photo-cakes" element={<PhotoCakes/>}/>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path="/product/:id" element={<CartDetails />} />
        <Route path="/checkout" element={<Checkout />} />
         <Route path="/cart" element={<ViewCart />} />
            
            <Route path="/admin" element={<Sidebar />} />
           <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
                <Route path="/productform" element={<ProductForm />} />
               <Route path="/productlist" element={<ProductList />} />
            {/* <Route path="/orders" element={<Orders />} />
            <Route path="/users" element={<Users />} /> */}
      </Routes>
    </div>
    </div>
  )
}

export default RouterPage



