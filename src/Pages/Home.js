import React from "react";
import NavBar from "../Components/NavBar";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";
import Aside from "../Components/Aside";
import Products from "../Components/Products";
import "./Style/Home.css";
function Home() {
  return (
    <div>
      <NavBar />
      <div
        id="carouselExampleIndicators"
        className="carousel slide mb-0 home-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.sephora.com/contentimages/VideoImagesNEW/110221/Ébene%20Fume%20by%20Tom%20Ford.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.sephora.com/contentimages/VideoImagesNEW/110221/Ébene%20Fume%20by%20Tom%20Ford.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.sephora.com/contentimages/VideoImagesNEW/110221/Ébene%20Fume%20by%20Tom%20Ford.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Categories />
      <div className="divider d-flex align-items-center my-4 mx-4">
        <h2 className="text-center fw-bold mx-3 mb-0">Most Popular Choices</h2>
      </div>
      <Products />
      <Aside />
      <Footer />
    </div>
  );
}

export default Home;
