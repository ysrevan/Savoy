import React from 'react'

const Carousel = () => {
  return (
   <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-pendant-lighting.jpg" className="d-block w-100" alt="..." />
     <div className="carousel-text1">
     <h2>Contemporary Pendant<br></br>Lighting</h2>
     <a href="#">Interior</a>
     </div>
    </div>
    <div className="carousel-item">
      <img src="https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-wall-clock.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-text2">
     <h2>Minimal Rotating Disc<br></br>Wall Clock</h2>
     <a href="#">Decoration</a>
     </div>
    </div>
    <div className="carousel-item">
      <img src="https://savoy.nordicmade.com/wp-content/uploads/2015/08/slider-basket.jpg" className="d-block w-100" alt="..." />
      <div className="carousel-text2">
     <h2>Bamboo Zigzag Pattern<br></br>Basket</h2>
     <a href="#">Essentials</a>
     </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


  )
}

export default Carousel