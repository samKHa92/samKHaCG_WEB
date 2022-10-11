import '../styles/HomePage.css'
import React from 'react';
import {HomePageButton} from "../components/HomePageButton";
import background_video from '../assets/background-video.mp4';

export const HomePage = () => {
    return (
        <>
            <div className='hero-container'>
                <video src={background_video} autoPlay loop muted />
                <h1>SAMKHA CG AWAITS</h1>
                <p>What are you waiting for?</p>
                <div className='hero-btns'>
                    <HomePageButton
                        className='btns'
                        HomePageButtonStyle='btn--outline'
                        HomePageButtonSize='btn--large'
                        link='/prodocts'
                    >
                        ORDER A MODULE
                    </HomePageButton>
                    <HomePageButton
                        className='btns'
                        HomePageButtonStyle='btn--outline'
                        HomePageButtonSize='btn--large'
                        link='/services'
                    >
                        ORDER A TEMPLATE
                    </HomePageButton>
                    <HomePageButton
                        className='btns'
                        HomePageButtonStyle='btn--primary'
                        HomePageButtonSize='btn--large'
                        link='/trailer'
                    >
                        WATCH TRAILER <i className='far fa-play-circle' />
                    </HomePageButton>
                </div>
            </div>
            {/*<Cards />*/}
        </>
    )
}