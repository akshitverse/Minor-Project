import React from 'react';
import './Mostselled.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MostSelled = ({ handleAddToCart }) => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200, // Time in ms
      easing: 'ease-out-back', // Custom easing
      once: true, // Animation triggers only once
    });
  }, []);

  const products = [
    {
      id: 1,
      name: 'Bluetooth Wireless Keyboard',
      price: '₹1299',
      reviews: '320 Reviews',
      rating: 4.6,
      imgSrc: 'https://www.pngkit.com/png/full/199-1991586_wireless-bluetooth-keyboard-png.png',
      description: 'Compact and portable Bluetooth keyboard for all devices.',
    },
    {
      id: 2,
      name: 'USB-C to Lightning Cable',
      price: '₹699',
      reviews: '150 Reviews',
      rating: 4.8,
      imgSrc: 'https://www.pngitem.com/pimgs/m/10-104146_apple-usb-c-to-lightning-cable-png-transparent-png.png',
      description: 'Fast charging cable for iPhones and other Apple devices.',
    },
    {
      id: 3,
      name: 'Mobile Screen Protector',
      price: '₹299',
      reviews: '400 Reviews',
      rating: 4.7,
      imgSrc: 'https://www.pngkit.com/png/full/131-1310290_screen-protector-transparent-png.png',
      description: 'Protect your screen from scratches and cracks with this durable protector.',
    },
    {
      id: 4,
      name: 'Power Bank 10000mAh',
      price: '₹1199',
      reviews: '500 Reviews',
      rating: 4.9,
      imgSrc: 'https://www.pngmart.com/files/2/Power-Bank-PNG-Image.png',
      description: 'Portable and high-capacity power bank for all your devices.',
    },
    {
      id: 5,
      name: 'Mobile Holder Stand',
      price: '₹799',
      reviews: '250 Reviews',
      rating: 4.6,
      imgSrc: 'https://www.pngmart.com/files/2/Mobile-Stand-PNG-Image.png',
      description: 'Adjustable and ergonomic mobile holder stand for hands-free usage.',
    },
    {
      id: 6,
      name: 'Wireless Charging Pad',
      price: '₹1499',
      reviews: '150 Reviews',
      rating: 4.5,
      imgSrc: 'https://www.pngitem.com/pimgs/m/51-514736_wireless-charging-pad-png-transparent-png.png',
      description: 'Fast and efficient wireless charging pad for your devices.',
    },
  ];

  return (
    <div className="product-list" data-aos="fade-up">
      <h2 data-aos="fade-down">Most Selling Accessories</h2>
      <p data-aos="fade-up">Explore our best-selling accessories!</p>
      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id} data-aos="zoom-in" data-aos-delay={`${product.id * 100}`}>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.reviews}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <button className="shop-now" onClick={() => handleAddToCart(product)} data-aos="fade-up">
                Add to Cart
              </button>
            </div>
            <div className="product-image">
              <img src={product.imgSrc} alt={product.name} data-aos="flip-left" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostSelled;
