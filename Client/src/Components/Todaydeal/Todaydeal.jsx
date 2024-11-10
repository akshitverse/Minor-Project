import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Todaydeal.css';

const Todaydeal = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  const products = [
    {
      id: 1,
      name: 'MacBook Pro Stand',
      price: '₹1999',
      reviews: '120 Reviews',
      rating: 4.8,
      imgSrc: 'https://m.media-amazon.com/images/I/61h0Lh5bC2L._AC_SY679_.jpg',
      description: 'Ergonomic aluminum stand for MacBook Pro, enhancing comfort and airflow.'
    },
    {
      id: 2,
      name: 'Gaming Mouse Pad',
      price: '₹499',
      reviews: '180 Reviews',
      rating: 4.5,
      imgSrc: 'https://m.media-amazon.com/images/I/71nPLwrxSML._AC_SL1500_.jpg',
      description: 'Large size RGB mouse pad with multiple lighting modes for a smooth gaming experience.'
    },
    {
      id: 3,
      name: 'Portable Laptop Cooling Pad',
      price: '₹999',
      reviews: '220 Reviews',
      rating: 4.6,
      imgSrc: 'https://m.media-amazon.com/images/I/81Oh2lUDe2L._AC_SY450_.jpg',
      description: 'Cooling pad with dual fans to keep your laptop at optimal temperature during heavy usage.'
    },
    {
      id: 4,
      name: 'Samsung 25W USB-C Charger',
      price: '₹1299',
      reviews: '90 Reviews',
      rating: 4.7,
      imgSrc: 'https://m.media-amazon.com/images/I/61V0Ckh2+rL._AC_SL1500_.jpg',
      description: 'Fast charging USB-C charger for Samsung devices, compatible with multiple models.'
    },
    {
      id: 5,
      name: 'Bluetooth Keyboard for iPad',
      price: '₹1500',
      reviews: '300 Reviews',
      rating: 4.9,
      imgSrc: 'https://m.media-amazon.com/images/I/61m1Dot0O8L._AC_SL1500_.jpg',
      description: 'Compact and lightweight Bluetooth keyboard designed for iPad users.'
    },
    {
      id: 6,
      name: 'Anker PowerCore 20000mAh Power Bank',
      price: '₹3500',
      reviews: '500 Reviews',
      rating: 4.8,
      imgSrc: 'https://m.media-amazon.com/images/I/71onbIpdG1L._AC_SL1500_.jpg',
      description: 'High-capacity power bank for charging multiple devices on the go.'
    }
  ];

  return (
    <div className="product-list">
      <h2>Today's Special Deals</h2>
      <p>Don't miss out on our exclusive deals available for a limited time only!</p>
      <div className="products">
        {products.map((product) => (
          <div className="product-card" data-aos="fade-up" key={product.id}>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.reviews}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <button className="shop-now">Add to Cart</button>
            </div>
            <div className="product-image">
              <img src={product.imgSrc} alt={product.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todaydeal;
