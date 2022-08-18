import React from 'react';
import './styles.css';
import topArea from '../../../Assets/Images/TopArea.png';
import homeSectionLogo from '../../../Assets/Images/HomeSectionLogo.png';
import forwardArrow from '../../../Assets/Images/ForwardArrow.png';

const HomeSection = () => {
  return (
    <>
      <div className='homeSection' id='homeSection'>
        <img src={topArea} alt = 'Top Banner' className='homeSectionImage' />
        <div className='homeMainSection'>
          <div className='homeLeftSection'>
            <img src = {homeSectionLogo} alt = 'Logo' className='homeSectionLogo' />
          </div>
          <div className='homeRightSection'>
            <div className='homeParagraph'>
              Auctus Pharma Group has been fulfilling needs for androgenic-anabolic steroids and complete hormonal care for more than 10 years. All products are produced completely in Canada and sold everywhere.
            </div>
            <div className='shopButton'>
                <div className='shopButtonTitle'>
                <a href='#productSection' className='shopProductLink'>SHOP PRODUCT</a>
                </div>
                <img src={forwardArrow} alt = 'ForwardArrow' className='forwardArrow' />
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default HomeSection;