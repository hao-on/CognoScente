import React, { useState } from "react";
import "./Style/Carousel.css";

function Carousel() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://res.cloudinary.com/dajhxqlxa/image/upload/v1691610546/laura-chouette-i15o-H_C5UE-unsplash_kluhsp.jpg"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/dajhxqlxa/image/upload/v1691521317/harper-sunday-U8uTsF3j9kc-unsplash_oxmjde.jpg"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://res.cloudinary.com/dajhxqlxa/image/upload/v1691610547/laura-chouette-egaUoIaUx_I-unsplash_cpvcww.jpg"
            alt="..."
          />
        </div>
      </div>
    </div>
  )
}
export default Carousel;
