import React from 'react';
import './styles.css';
import telegramIcon from '../../../Assets/Images/TelegramIcon.png'
import emailIcon from '../../../Assets/Images/EmailIcon.png'
import topLogo from '../../../Assets/Images/TopLogo.png'

const FooterSection = () => {
  return (
    <div className='footerSection' id='footerSection'>
        <div className='footerLeftSection'>
            <div className='footerHome'><a href='#homeSection' className='footerLink'>HOME</a></div>
            <div className='footerProducts'><a href='#productSection' className='footerLink'>PRODUCTS</a></div>
            <div className='footerLabTest'><a href='#labTestSection' className='footerLink'>LAB TEST</a></div>
        </div>
        <div className='footerMiddleSection'>
            <div className='footerTelegramIconContainer'>
              <img src={telegramIcon} alt = 'Telegram Logo' className='footerTelegramLogo'/>
              <a href='https://t.me/AuctusPharma ' target='_blank' className='footerTelegramLink'>@AUCTUSPHARMA </a>
            </div>
            <div className='emailIconContainer'>
              <img src={emailIcon} alt = 'Email Logo' className='footerEmailIcon' />
              <a href='https://t.me/AuctusPharma ' target='_blank' className='footerEmailLink'>SUPPORT@AUCTUSPHARMSGROUP.COM</a>
            </div>
            <img src = {topLogo} alt = 'Auctus Logo' className='footerLogo' />
            <div className='copyright'>© AUCTUS PHARMA GROUP 2022</div>
        </div>
        <div className='footerRightSection'>
          <div className='footerContact'><a href='#contactSection' className='footerLink'>CONTACT</a>CONTACT</div>
          <div className='footerReview'><a href='#reviewSection' className='footerLink'>REVIEWS</a></div>
          <div className='footerFAQ'><a href='#FAQSection' className='footerLink'>FAQ</a></div>
        </div>
    </div>
  )
}

export default FooterSection;