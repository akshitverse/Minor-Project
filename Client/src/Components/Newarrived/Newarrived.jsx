import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Newarrived.css';

const Newarrived = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  const products = [
    {
      id: 1,
      name: 'Samsung Galaxy S24 Cover',
      price: '₹499',
      reviews: '150 Reviews',
      rating: 4.7,
      imgSrc: 'https://m.media-amazon.com/images/I/81axLF1w+CL._AC_.jpg',
      description: 'A sleek and stylish phone cover for Samsung Galaxy S24, providing both style and protection.'
    },
    {
      id: 2,
      name: 'OnePlus 9 Pro Case',
      price: '₹599',
      reviews: '200 Reviews',
      rating: 4.6,
      imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/41LJYUNQHcS.jpg',
      description: 'This premium case for OnePlus 9 Pro offers robust protection without sacrificing style.'
    },
    {
      id: 3,
      name: 'Xiaomi Mi 11 Charger',
      price: '₹800',
      reviews: '80 Reviews',
      rating: 4.9,
      imgSrc: 'https://th.bing.com/th/id/OIP.jA80vDG7B-q1RLWKtBZv0wHaHK?rs=1&pid=ImgDetMain',
      description: 'Fast and efficient charger for Xiaomi Mi 11, designed for optimal performance.'
    },
    {
      id: 4,
      name: 'Sony WH-1000XM4 Headphones',
      price: '₹29900',
      reviews: '400 Reviews',
      rating: 4.8,
      imgSrc: 'https://www.bhphotovideo.com/images/images2500x2500/sony_wh1000xm4_b_wh_1000xm4_wireless_noise_canceling_over_ear_1582549.jpg',
      description: 'Industry-leading noise-canceling headphones with exceptional sound quality.'
    },
    {
      id: 5,
      name: 'LG UltraGear Gaming Monitor',
      price: '₹31990',
      reviews: '90 Reviews',
      rating: 4.5,
      imgSrc: 'https://www.lg.com/us/images/monitors/md07518647/features/mnt-24gn600-06-2-stylish-design-d.jpg',
      description: 'UltraGear gaming monitor with vibrant colors and ultra-fast refresh rates for an immersive gaming experience.'
    },
    {
      id: 6,
      name: 'Apple AirPods Pro',
      price: '₹24900',
      reviews: '300 Reviews',
      rating: 4.8,
      imgSrc: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1572990352299',
      description: 'Active Noise Cancellation and Transparency mode, delivering high-quality sound in a compact design.'
    }
  ]

  return (
    <div className="product-list">
      <h2>New Arrivals</h2>
      <p>Check out the latest products that just hit our store!</p>
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
  )
}

export default Newarrived;
