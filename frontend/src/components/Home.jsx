
import React from "react";
import Cart from "./Cart";
import Aboutpage from "./Aboutpage/Aboutpage";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      {/* Section 1 - Banner */}
      <Banner />

      {/* Section 2 - Cart */}
      <Cart />

      {/* Section 3 - About Page */}
      <Aboutpage />
    </div>
  );
};

export default Home;
