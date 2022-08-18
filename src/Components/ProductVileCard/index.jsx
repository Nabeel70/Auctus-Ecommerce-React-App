/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import './styles.css';

const ProductVilesCard = ({product}) => {
    const [productQuantity, setProductQuantity] = useState(0);
    const [productPrice, setProductPrice] = useState(0);

    useEffect(() => {
        if(productQuantity == 0){
            setProductPrice(0)
        } else if(productQuantity >= 1 && productQuantity < 6) {
            const price = productQuantity * product.price1
            setProductPrice(price.toFixed(2))
        }
        else if(productQuantity >= 6 && productQuantity < 11) {
            const price = productQuantity * product.price2
            setProductPrice(price.toFixed(2))
        }
        else if(productQuantity >= 11 ) {
            const price = productQuantity * product.price3
            setProductPrice(price.toFixed(2))
        }
    }, [productQuantity])

    const onAdd = () => {
        setProductQuantity(productQuantity+1)
    }
    const onSubtract = () => {
        productQuantity == 0 ? setProductQuantity(0) : setProductQuantity(productQuantity-1)
    }
    const [cart, setCart] = useState([]);
    const addToCart =(product) => {
        <checkout />
        console.log("we are in addToCart");
        // document.getElementById("navbarCart");
        setCart([...cart, product]);
    }
    
    // const onAddToCartClick = () => {
    //     productQuantity == 0 ? 
    //     alert('Please select the quantity first') : 
        
    //     alert('Product added to cart successfully!')
    // }
  return (
    <div className='productsVileCard'>
        <div className='headerContainer'>
            <div className='nameHeader'>
                <div className='headerHeading'>
                    {product.name}
                </div>
                <div className='headerPower'>
                    {product.power}
                </div>
            </div>
        </div>
        <div className='imagesContainer'>
            <img src={product.Images[0]} alt = 'Cypilon' className='firstImage' />
            {/*<img src={product.Images[1]} alt = 'TestCypilon' className='secondImage' />*/}
        </div>
        <div className='quantitySection'>
            <div className='quantityTopSection'>
                <div className='quantitySmallSection'>
                    <div className='vialsQuantity'>
                        {product.quantity1}
                    </div>
                    <div className='vialsPrice'>
                        ${product.price1}
                    </div>
                </div>
                <div className='quantitySmallSection'>
                    <div className='vialsQuantity'>
                        {product.quantity2}
                    </div>
                    <div className='vialsPrice'>
                        ${product.price2}
                    </div>
                </div>
                <div className='quantitySmallSection'>
                    <div className='vialsQuantity'>
                        {product.quantity3}
                    </div>
                    <div className='vialsPrice'>
                        ${product.price3}
                    </div>
                </div>
            </div>
            <div className='quantityBottomSection'>
                <div className='priceLeftSection'>
                    <div className='priceAmount'>
                        ${productPrice}
                    </div>
                    <div className='priceTitle'>
                        TOTAL PRICE
                    </div>
                </div>
                <div className='quantityRightSection'>
                    <div className='quantityTopSection'>
                        <div className='subtractSection' onClick={onSubtract}>
                            -
                        </div>
                        <div className='mainQuantitySection'>
                            {productQuantity}
                        </div>
                        <div className='addSection' onClick={onAdd}>
                            +
                        </div>
                    </div>
                    <div className='quantityTitleSection'>
                        TOTAL VIALS
                    </div>
                </div>
            </div>
        </div>
        <div className='addToCartButton' onClick={addToCart}>
            ADD TO  CART
        </div>
    </div>
  )
}

export default ProductVilesCard;