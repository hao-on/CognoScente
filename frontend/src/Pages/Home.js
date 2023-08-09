import React from "react";
import NavBar from "../Components/NavBar";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Aside from "../Components/Aside";
import Products from "../Components/Products";
import "./Style/Home.css";
import Carousel from "../Components/Carousel";
import Family from "../Components/Family";

function Home() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Categories />
      <Family />
      <Aside />
      <Footer />
    </div>
  );
}

export default Home;
