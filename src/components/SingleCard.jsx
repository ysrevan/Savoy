import React from 'react';

const SingleCard = ({ data }) => {
  return (
    <div className='container'>

      <div className="category mt-5">
        <nav>
          <ul>
            <li><a href="">All /</a></li>
            <li><a href="">Bags & Backpackd /</a></li>
            <li><a href="">Decoration /</a></li>
            <li><a href="">Essentials /</a></li>
            <li><a href="">Interior /</a></li>
          </ul>
        </nav>

        <div className="filter">
          <a href="">Filter</a>
          <a href="">Search</a>
        </div>
      </div>
      <div className="row g-5 mt-3 mb-5">
        {data.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-3" key={index}>
            <div className="card">
              <img src={item.image} className="card-img-top" alt="Product" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleCard;