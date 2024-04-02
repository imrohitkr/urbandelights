import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './Reviews.css';

function Reviews() {
    const [reviewText, setReviewText] = useState([]);

    const handlePostedReview = () => {
        // Update the state with the content of the textarea
        const textAreaValue = document.querySelector('.text_area').value;
        setReviewText(prevText => prevText + textAreaValue + '\n');
        console.log(reviewText)
    };

    return (
        <>
            <div className="reviews">
                <div className="reviews_already_posted_flex_container">
                    <p>{reviewText}</p>
                </div>
                <div className="reviews_new_review">
                    <div className='reviews_text_area'>
                        <textarea className='text_area'></textarea>
                    </div>
                    <div className='reviews_button_to_post'>
                        <button className='custom__button' onClick={handlePostedReview}>Post</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Reviews;

