import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
          alt="banner bg"
        />
        <div className="home__row">
          <Product
            id="0001"
            title="Amazon Brand - Solimo Floral Breeze 144 TC 100% Cotton Double Bedsheet
          with 2 Pillow Covers, Green"
            image="https://m.media-amazon.com/images/I/A1XILGP2qSL._AC_UL480_FMwebp_QL65_.jpg"
            price={739}
            rating={4}
          />
          <Product
            id="0002"
            title="Safari Ray Polycarbonate 65 cms Midnight Blue Hardsided Check-in Luggage (RAY 67 4W MIDNIGHT BLUE)"
            image="https://m.media-amazon.com/images/I/41CDlBBFLCL.jpg"
            price={2699}
            rating={5}
          />
          <Product
            id="0009"
            title="pTron Bassbuds Lite V2 In-Ear True Wireless Bluetooth 5.0 Headphones"
            image="https://m.media-amazon.com/images/I/41uyyj2G3cL._AC_SR160,160_.jpg"
            price={3097}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="0003"
            title="Apple MacBook Pro (13-inch, 8GB RAM, 512GB Storage, 2.4GHz Intel Core i5) - Silver"
            image="https://images-eu.ssl-images-amazon.com/images/I/518VAg5uOQL._AC_US240_FMwebp_QL65_.jpg"
            price={174252}
            rating={5}
          />
          <Product
            id="0004"
            title="New Apple Mac Mini (3.6GHz Quad-core 8th-Generation Intel Core i3 Processor, 8GB RAM, 256GB)"
            image="https://images-eu.ssl-images-amazon.com/images/I/31x5ZzYZ0UL._AC_US240_FMwebp_QL65_.jpg"
            price={69990}
            rating={3}
          />
          <Product
            id="0006"
            title="Steelbird SA-1 7Wings Aeronautics Full Face Helmet in Matt Finish (Large 600 MM, Matt Sport Red with Smoke Visor)"
            image="https://m.media-amazon.com/images/I/41snqsoUzjL._AC_UL480_FMwebp_QL65_.jpg"
            price={2699}
            rating={4}
          />
          <Product
            id="0011"
            title="Panasonic 584 L Inverter Frost-Free Side by Side Refrigerator (NR-BS60VKX1, Dark Grey, Stainless Steel Finish)"
            image="https://m.media-amazon.com/images/I/71bRNQxKzNL._AC_UY327_FMwebp_QL65_.jpg"
            price={59990}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="0007"
            title="Panasonic 147 cm (58 inches) 4K Ultra HD Certified Android Smart LED TV TH-58HX450DX (Black) (2020 Model)"
            image="https://m.media-amazon.com/images/I/91LzCxOO3fL._AC_UY327_FMwebp_QL65_.jpg"
            price={47990}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
