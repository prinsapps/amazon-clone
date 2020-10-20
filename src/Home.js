import React from 'react';
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className="home">
        <div className="home_container">
      <img className="home_image"
      src="https://res.cloudinary.com/prinsapps/image/upload/v1600736071/amazon-clone/f3vx-2270-pnuk-3p-summer_gw_hero_browser_1x._CB431386320__apwvpa.jpg" 
      alt=""/>
    
    <div className="home_row">
        <Product title="Startup" price={29.99} 
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        rating={5} />

        <Product title="Startup" price={29.99} 
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        rating={5} />
    </div>

    <div className="home_row">
        <Product title="Startup" price={29.99} 
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        rating={5} />

        <Product title="Startup" price={29.99} 
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        rating={5} />

        <Product title="Startup" price={29.99} 
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        rating={5} />
    </div>

    <div className="home_row">
        <Product title="Startup" price={29.99} 
        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
        rating={5} />
    </div>
    </div>
    </div>
  )
}

export default Home;
