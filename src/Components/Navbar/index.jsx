
import React, {useState} from 'react';
import './styles.css';
import cartLogo from '../../Assets/Images/Cart.png';
import TopLogo from '../TopLogo';
import cart from '../../Components/ProductVileCard';

function Navbar() {
  const [state, setstate] = useState(false);
  const showDropdown = ()=> {
    setstate(true);

  }
  const hideDropdown=()=> {
    setstate(false);
  };
  
  return (
    
    <>
        <div className='navbar'>
            <div className='navbarComponent'><a href='/' className='navbarLink'>Home</a></div>
            <div className='dropLink' onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
        
            <a href='#productSection' className='dropLink'>Product</a>
            
              {state ? (
                <>
                <ul className='dropComponent' onMouseEnter={showDropdown}>
                <a href='#productSection' className='dropdownLink'>INJECTIBLE AAS</a>
                </ul>
                <ul className='dropComponent' onMouseEnter={showDropdown}>
                <a href='#productSection' className='dropdownLink'>OTHER INJECTIBLES</a>
                </ul>
                <ul className='dropComponent' onMouseEnter={showDropdown}>
                <a href='#productSection' className='dropdownLink'>ORAL AAS</a>
                </ul>
                <ul className='dropComponent' onMouseEnter={showDropdown}>
                <a href='#productSection' className='dropdownLink'>ORALANTI-ESTROGEN</a>
                </ul>  
                <ul className='dropComponent' onMouseEnter={showDropdown}>
                <a href='#productSection' className='dropdownLink'>ORAL PDE5INHIBITOR</a>
                </ul>
                </>
              ):
            null
          }
            </div>
            <div className='navbarComponent'><a href='#FAQSection' className='navbarLink'>FAQ</a></div>
            <div className='navbarComponent'><a href='#reviewSection' className='navbarLink'>Review</a></div>
            <div className='navbarComponent'><a href='#labTestSection' className='navbarLink'>Lab Test</a></div>
            <div className='navbarComponent'><a href='#contactSection' className='navbarLink'>Contact</a></div>
            <div className='navbarComponent'><a href='/checkout' className='navbarLink'>Checkout</a></div>
            <div className='navbarComponent' id='navbarCart'> <a href="/checkout">({cart.length()}) <img src= {cartLogo} alt = 'Cart Logo' className='cartLogo' /></a> </div>
        </div>
        <TopLogo className = 'topLogo' />
    </>
  )
}


export default Navbar;