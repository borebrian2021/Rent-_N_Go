import React from 'react';
import TopBar from './TopBar';
import AfterHeader from './LandingPageComponents/AfterHeader';
import PopularPlaces from './LandingPageComponents/PopularPlaces';
import FeaturedPlaces from './LandingPageComponents/FeaturedPlaces';
import WhyChooseUs from './LandingPageComponents/WhyChooseUs';
import PopularSpaces from './LandingPageComponents/PopularSpaces';
const LandingPage = () => {
    return (
        <div>
            <TopBar/>
            <AfterHeader/>
            <PopularPlaces/>
            <FeaturedPlaces/>
            <WhyChooseUs/>
            <PopularSpaces/>

        </div>
    );
}

export default LandingPage;
