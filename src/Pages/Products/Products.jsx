import React from 'react';
import './Products.css'
import Footer from '../../components/Footer/Footer';
import './Products.css';

const Products = () => {
    const products = [
        { id: 1, image: '/images/product4.png', name: 'Product 1' },
        { id: 2, image: '/images/product2.png', name: 'Product 2' },
        { id: 3, image: '/images/product3.png', name: 'Product 3' },
        { id: 4, image: '/images/product10.png', name: 'Product 4' },
        { id: 5, image: '/images/product5.png', name: 'Product 5' },
        { id: 6, image: '/images/product6.png', name: 'Product 6' },
        { id: 7, image: '/images/product7.png', name: 'Product 7' },
        { id: 8, image: '/images/product8.png', name: 'Product 8' },
        { id: 9, image: '/images/product9.png', name: 'Product 9' },
    ];
    return (
    <>
    
            <section className="hero-section" id="home">
  <div className="hero-content">
    <div className="hero-text">
    <h1>Products</h1>
    <p>Explore our wide range of pharmaceutical products designed for better healt</p>

    </div>
    <div className="hero-images">
      <img src="/images/product1.png" alt="Healthcare Solutions" />
    </div>
  </div>
</section>
<div className="product-gallery-container">
            <h2>Best Products<hr/></h2>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card1">
                        <img src={product.image} alt={product.name} />
                    </div>
                ))}
            </div>
        </div>
<Footer/>
</>
);
};

export default Products;