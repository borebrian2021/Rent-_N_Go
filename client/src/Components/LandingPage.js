import React from 'react';
import TopBar from './TopBar';
import AfterHeader from './SubComponents/AfterHeader';
import PopularPlaces from './SubComponents/PopularPlaces';
import FeaturedPlaces from './SubComponents/FeaturedPlaces';
const LandingPage = () => {
    return (
        <div>
            <TopBar/>
            <AfterHeader/>
            <PopularPlaces/>
            <FeaturedPlaces/>
        </div>
    );
}

export default LandingPage;
