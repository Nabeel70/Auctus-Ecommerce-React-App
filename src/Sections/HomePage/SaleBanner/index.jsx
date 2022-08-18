import React from 'react';
import './styles.css';
import auctusIcon from '../../../Assets/Images/AuctusIcon.png';
import cypionate from '../../../Assets/Images/Cypionate.png';
import testCypionate from '../../../Assets/Images/TestCypionate.png';
import mcg from '../../../Assets/Images/MCG.png';

const SaleBanner = () => {
  return (
    <div className='saleBanner'>
      <div className='saleBannerHeader'>
        THE RIGHT WAY. THE    <img src={auctusIcon} alt = 'A' className='auctusIcon' />UCTUS WAY.
      </div>
      <div className='bannerMainSection'>
        <div className='bannerLeftSection'>
          WEBSITE LAUNCH MEGASALE
        </div>
        <div className='bannerMiddleSection'>
          <img src = {mcg} alt = 'MCG' className='mcgImage' />
          <img src = {cypionate} alt = 'MCG' className='cypionateImage' />
          <img src = {testCypionate} alt = 'MCG' className='testCypionateImage' />
        </div>
        <div className='bannerRightSection'>
          35% OFF ALL ORDERS $300+
        </div>
      </div>
      <div className='bannerBottom'>

      </div>
    </div>
  )
}

export default SaleBanner;