import React from 'react';
import TopBar from './TopBar';
import AfterHeader from './SubComponents/AfterHeader';
import PopularPlaces from './SubComponents/PopularPlaces';
import FeaturedPlaces from './SubComponents/FeaturedPlaces';
import WhyChooseUs from './SubComponents/WhyChooseUs';
import PopularSpaces from './SubComponents/PopularSpaces';
import OurAgents from './SubComponents/OurAgents';
const LandingPage = () => {
    return (
        <div>
            <TopBar/>
            <AfterHeader/>
            <PopularPlaces/>
            <FeaturedPlaces/>
            <WhyChooseUs/>
            <PopularSpaces/>
            <OurAgents/>
        </div>
    );
}

export default LandingPage;
