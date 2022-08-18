import React from 'react';
import './styles.css';
import injectibleAAS from '../../../Data/injectibleAAS';
import otherInjectibles from '../../../Data/otherInjectibles';
import oralAAS from '../../../Data/oralAAS';
import oralAntiEstrogensAndPCTS from '../../../Data/oralAntiEstrogensAndPCTS';
import oralPDE5Inhibitors from '../../../Data/oralPDE5Inhibitors';
import ProductVilesCard from '../../../Components/ProductVileCard';
import ProductTabCard from '../../../Components/ProductsTabCard';

const ProductsMainSection = () => {

  console.log(injectibleAAS.title)
 
  return (
    <>
      <div className='ProductsMainSection'>
        <div className='productType'>
            {injectibleAAS[0].title}
        </div>
        <div className='productsContainer'>
          {injectibleAAS[0].data.map((product) => (
            <ProductVilesCard product = {product} />
          ))}
        </div>
      </div>
      <div className='ProductsMainSection'>
        <div className='productType'>
            {otherInjectibles[0].title}
        </div>
        <div className='productsContainer'>
          {otherInjectibles[0].data.map((product) => (
            <ProductVilesCard product = {product} />
          ))}
        </div>
      </div>
      <div className='ProductsMainSection'>
        <div className='productType'>
            {oralAAS[0].title}
        </div>
        <div className='productsContainer'>
          {oralAAS[0].data.map((product) => (
            <ProductTabCard product = {product} />
          ))}
        </div>
      </div>
      <div className='ProductsMainSection'>
        <div className='productType'>
            {oralAntiEstrogensAndPCTS[0].title}
        </div>
        <div className='productsContainer'>
          {oralAntiEstrogensAndPCTS[0].data.map((product) => (
            <ProductTabCard product = {product} />
          ))}
        </div>
      </div>
      <div className='ProductsMainSection'>
        <div className='productType'>
            {oralPDE5Inhibitors[0].title}
        </div>
        <div className='productsContainer'>
          {oralPDE5Inhibitors[0].data.map((product) => (
            <ProductTabCard product = {product} />
          ))}
        </div>
      </div>
    </>
  )
}

export default ProductsMainSection;