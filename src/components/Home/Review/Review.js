import React, { useEffect, useState } from 'react';
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Review.css';
import axios from 'axios';

const Review = () => {
    //  Retrieving review data //
    const [reviews, setReviews] = useState([]);
    // Default state value of slide review //
    const [current, setCurrent] = useState(0);
    const length = reviews.length;

    useEffect(() => {
        const loadReviews = async () => {
            const { data } = await axios.get('https://secret-basin-49124.herokuapp.com/reviews');
            setReviews(data);
        }
        loadReviews();
    }, [])

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(reviews) || reviews.length <= 0) {
        return null;
    }

    return (
        <section
            className="review-content-wrapper">
            <h3 className='review-section-title'>CLIENT'S REVIEWS</h3>
            <button className='slide-left' onClick={prevSlide}>
                <AiOutlineDoubleLeft className='arrow' />
            </button>
            <div
                className='slider-wrapper'>
                {/* ...............Review slider................ */}
                {reviews.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                                <div className='slider-content'>
                                    <div className='slider-image-wrapper'>
                                        <img src={slide?.img} alt="" />
                                    </div>
                                    <div className='slider-text-wrapper'>
                                        <p>{slide?.text}</p>
                                        <Rating
                                            initialRating={slide?.rating}
                                            emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                            fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod', marginTop: '5px' }} icon={faStar} />}
                                            readonly>
                                        </Rating>
                                        <h5 style={{ marginTop: '10px' }} className='reviewer-name'>{slide?.name.toUpperCase()}</h5>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
                {/* ...............Review slider................ */}
            </div>
            <button className='slide-right' onClick={nextSlide}>
                <AiOutlineDoubleRight className='arrow' />
            </button>
        </section>
    );
};

export default Review;