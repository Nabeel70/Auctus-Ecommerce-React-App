import React from 'react';
import './styles.css';

const FAQBody = ({item}) => {
  return (
    <div className='faqBody'>
        <div className='bodyHeader'>
            {item.header}
        </div>
        <div className='bodyBody'>
            {item.body}
        </div>
    </div>
  )
}

export default FAQBody;