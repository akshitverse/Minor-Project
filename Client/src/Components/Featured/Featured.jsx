import React from 'react';
import './Featured.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Featured = ({ handleAddToCart }) => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: 'ease-out-back', // Easing effect
      once: true, // Animation triggers only once
    });
  }, []);

  const products = [
    {
      id: 1,
      name: 'Motorolla G20 Phone Cover',
      price: '₹399',
      reviews: '573 Reviews',
      rating: 4.5,
      imgSrc: 'https://www.excelsior.in/cdn/shop/files/VivoY56HardLeatherBlue_2_1080x.png?v=1694975065',
      description: 'High-quality phone cover made of premium leather.',
    },
    {
      id: 2,
      name: 'Poco X1 Phone Cover',
      price: '₹450',
      reviews: '199 Reviews',
      rating: 4.8,
      imgSrc: 'https://www.pngitem.com/pimgs/m/218-2188542_mobile-cover-png-transparent-image-mobile-phone-case.png',
      description: 'Maximum protection with sleek design.',
    },
    {
      id: 3,
      name: 'Iphone Charger',
      price: '₹1100',
      reviews: '1 Review',
      rating: 5.0,
      imgSrc: 'https://w7.pngwing.com/pngs/186/881/png-transparent-iphone-4s-iphone-3gs-battery-charger-iphone-electronics-cable-adapter-thumbnail.png',
      description: 'Fast charging for iPhones with durable design.',
    },
    {
      id: 4,
      name: 'Android Charger',
      price: '₹550',
      reviews: '5 Reviews',
      rating: 4.9,
      imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXV_j8OYGtfbDLT-wHsaGuSmxW5uW-baD9Q&s',
      description: 'Fast charging for Android devices.',
    },
    {
      id: 5,
      name: 'Gaming Headphones',
      price: '₹2200',
      reviews: '10 Reviews',
      rating: 5.0,
      imgSrc: 'https://static.vecteezy.com/system/resources/previews/017/054/098/non_2x/headphones-design-3d-rendering-for-product-mockup-png.png',
      description: 'Immersive sound quality for gamers.',
    },
    {
      id: 6,
      name: 'Wireless Earbuds',
      price: '₹1500',
      reviews: '85 Reviews',
      rating: 4.7,
      imgSrc: 'https://pngimg.com/uploads/wireless_earbuds/wireless_earbuds_PNG34.png',
      description: 'Compact and powerful sound experience.',
    },
  ];

  return (
    <div className="product-list">
      <h2>Featured Products</h2>
      <p>Explore our best-selling products!</p>
      <div className="products">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            data-aos="fade-up" // AOS fade-up animation on scroll
            data-aos-delay={100 * product.id} // Adding a slight delay for each card
          >
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.reviews}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <button className="shop-now" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
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

export default Featured;
