import React, { useState } from 'react';
import './styles.css';

const ReviewSection = () => {
    const [display, setDisplay] = useState('none')

    const onReviewSubmit = () => {
        setDisplay('flex')
        setTimeout(() => {
            setDisplay('none')
        }, 5000)
    }

  return (
    <div className='reviewSection' id='reviewSection'>
        <h1 className='reviewsHeading'>REVIEWS</h1>
        <div className='reviewsMainSection'>
            <div className='reviewsSection'>
                <div className='reviewsTopRow'>
                    <div className='reviewContent'>
                        “Whole process went flawlessly. You should feel confident and safe if you order from APG. Website is really nice and easy to navigate.”
                    </div>
                    <div className='reviewContent'>
                        “Whole process went flawlessly. You should feel confident and safe if you order from APG. Website is really nice and easy to navigate.”
                    </div>
                    <div className='reviewContent'>
                        “Whole process went flawlessly. You should feel confident and safe if you order from APG. Website is really nice and easy to navigate.”
                    </div>
                    <div className='reviewContent'>
                        “Whole process went flawlessly. You should feel confident and safe if you order from APG. Website is really nice and easy to navigate.”
                    </div>
                </div>
                <div className='reviewsBottomRow'>
                    <div className='reviewContent firstReview bottomReview'>
                        “Whole process went flawlessly. You should feel confident and safe if you order from APG. Website is really nice and easy to navigate.”
                    </div>
                    <div className='reviewContent bottomReview'>
                        “Whole process went flawlessly. You should feel confident and safe if you order from APG. Website is really nice and easy to navigate.”
                    </div>
                    <div className='reviewContent bottomReview'>
                        “Whole process went flawlessly. You should feel confident and safe if you order from APG. Website is really nice and easy to navigate.”
                    </div>
                    <div className='reviewContent bottomReview'>
                        “Whole process went flawlessly. You should feel confident and safe if you order from APG. Website is really nice and easy to navigate.”
                    </div>
                </div>
            </div>
        </div>
            <div className='reviewButtonContainer'>
                <div style = {{display: display}} className = 'alertMessage'></div>
                <div className='reviewButton' onClick={onReviewSubmit} >
                    WRITE A REVIEW
                </div>
                <div style = {{display: display}} className = 'alertMessage messageContainer'>Review submitted successfully!</div>
            </div>
    </div>
  )
}

export default ReviewSection;