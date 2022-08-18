import React, {useEffect, useState} from 'react';
import { CartProvider } from 'react-use-cart';
import './styles.css';

const ProductTabCard = ({product}) => {
    const [productQuantity, setProductQuantity] = useState(0);
    const [productPrice, setProductPrice] = useState(0);
    const [selectRadio, setSelectTRadio] = useState('')

    useEffect(() => {
        if(selectRadio == ''){
            setProductPrice(0)
        } else if(selectRadio == 'radio1') {
            const price = productQuantity * product.price1
            setProductPrice(price.toFixed(2))
        }
        else if(selectRadio == 'radio2') {
            const price = productQuantity * product.price2
            setProductPrice(price.toFixed(2))
        }
        else if(selectRadio == 'radio3') {
            const price = productQuantity * product.price3
            setProductPrice(price.toFixed(2))
        }
    }, [productQuantity, selectRadio])

    const onAdd = () => {
        selectRadio == '' ? alert('Please select number of tablets per packet') : setProductQuantity(productQuantity+1)
        
    }
    const onSubtract = () => {

        selectRadio == '' ? alert('Please select number of tablets per packet') : productQuantity == 0 ? setProductQuantity(0) : setProductQuantity(productQuantity-1)
        
    }
    
// eslint-disable-next-line no-lone-blocks
{/*
    const onAddToCartClick = () => {
        
        productQuantity == 0 ? alert('Please select the quantity first') :
         alert('Product added to cart successfully!');
    }
*/}
    const [cart, setCart] = useState([]);
    const addToCart =(product) => {
        setCart([...cart, product]);
    }

    const onRadio1Click = () => {
        setSelectTRadio('radio1')
    }
    const onRadio2Click = () => {
        setSelectTRadio('radio2')
    }
    const onRadio3Click = () => {
        setSelectTRadio('radio3')
    }

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
            <img src={product.Image} alt = 'Cypilon' className='firstImage' />
        </div>
        <div className='quantitySection'>
            <div className='quantityTopSection'>
                <div className='quantitySmallSection'>
                    <div className='vialsQuantity'>
                        {product.quantity1}
                        <div className={`radioButton ${selectRadio == 'radio1' && 'radioSelected'}`} onClick = {onRadio1Click}></div>
                    </div>
                    <div className='vialsPrice'>
                        ${product.price1}
                    </div>
                </div>
                <div className='quantitySmallSection'>
                    <div className='vialsQuantity'>
                        {product.quantity2}
                        <div className={`radioButton ${selectRadio == 'radio2' && 'radioSelected'}`} onClick = {onRadio2Click}></div>
                    </div>
                    <div className='vialsPrice'>
                        ${product.price2}
                    </div>
                </div>
                <div className='quantitySmallSection'>
                    <div className='vialsQuantity'>
                        {product.quantity3}
                        <div className={`radioButton ${selectRadio == 'radio3' && 'radioSelected'}`} onClick = {onRadio3Click}></div>
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
                        TOTAL PACKETS
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

export default ProductTabCard;