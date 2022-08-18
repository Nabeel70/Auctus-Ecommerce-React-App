import React from 'react';
import './styles.css';
import faqsData from '../../../Data/faqs.json'
import Accordion from '../../../Components/FAQComponent/Accordion';

const FAQSection = () => {
  return (
    <div className='FAQSection' id = 'FAQSection'>
        <h1 className='FAQHeading'>FAQ</h1>
        <div className='FAQMainSection'>
            {faqsData.map((item) => (
                <Accordion item = {item} />
            ))}
        </div>
    </div>
  )
}

export default FAQSection;