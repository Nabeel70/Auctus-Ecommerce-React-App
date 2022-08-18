import React from 'react';
import './styles.css';
import topLogo from '../../Assets/Images/TopLogo.png';

const TopLogo = () => {
  return (
    <div className='topLogo'> <img src={topLogo} alt = 'Top Logo' /> </div>
  )
}

export default TopLogo;