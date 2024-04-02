import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './Reviews.css';

function Reviews() {
    const [reviews, setReviews] = useState([]);

    const handlePostedReview = () => {
        // Get the review text from the textarea
        const textAreaValue = document.querySelector('.text_area').value;

        // Make an HTTP POST request to send the review text to the server
        fetch('http://localhost:3000/postReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ reviewText: textAreaValue }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send review text to server');
            }
            // Parse the response as JSON
            return response.json();
        })
        .then(data => {
            // Update the state with the received pythonOutput
            if (data.hasOwnProperty('pythonOutput')) {
                // Append the new review text to the existing state
                setReviews(prevReviews => [...prevReviews, data.pythonOutput]);
                console.log('Received Python output:', data.pythonOutput);
            } else {
                console.error('Response does not contain pythonOutput property');
            }
        })
        .catch(error => {
            console.error('Error sending review text to server:', error);
        });
    };

    return (
        <>
            <div className="reviews">
                <div className="reviews_already_posted_container">
                    {/* Make the reviews container scrollable */}
                    <div className="reviews_already_posted">
                        {/* Display each review text in a separate div */}
                        {reviews.map((review, index) => (
                            <div key={index}>{review}</div>
                        ))}
                    </div>
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

