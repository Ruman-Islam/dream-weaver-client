import React from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-container'>
            <Menubar />
            <div className='banner-items-wrapper'>
                <div className='banner-items'>
                    <h2 className='banner-title'>Ready to take your beyond your imagination!</h2>
                    <p className='banner-text'>With the uniqueness of my concepts and hard working quality, I am always a step ahead from others.</p>
                    <p className='banner-text'>I take photos so perfectly that you will feel the same that you had felt in that very special day with yur very special one.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;