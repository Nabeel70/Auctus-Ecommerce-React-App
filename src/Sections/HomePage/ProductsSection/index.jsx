import React from 'react';
import ProductsMainSection from '../ProductsMainSection';
import './styles.css';

const ProductsSection = () => {
  return (
    <div className='ProductsSection' id='productSection'>
        <h1 className='ProductsHeading'>PRODUCTS</h1>
        <ProductsMainSection />
    </div>
  )
}

export default ProductsSection;