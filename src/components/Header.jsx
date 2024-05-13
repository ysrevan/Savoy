import React from 'react'

const Header = () => {
  return (
    <header>
        <div className="container">
            <nav>
            <ul>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">Elements</a></li>
                </ul>
            </nav>
                
            <img src="https://savoy.nordicmade.com/wp-content/themes/savoy/assets/img/logo@2x.png" alt="" />

           <div className="cart">
           <div className="heart">
            <i className="fa-regular fa-heart"></i>
            <a href="#">Sign In</a>
            </div>
            <a href="#">Cart</a>
           </div>
        </div>
    </header>
  )
}

export default Header