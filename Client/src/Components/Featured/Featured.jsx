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
      imgSrc: 'data:image/jpeg;base64,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',
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
