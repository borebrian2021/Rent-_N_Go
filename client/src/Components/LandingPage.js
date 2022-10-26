import React from 'react';
import TopBar from './TopBar';
import AfterHeader from './LandingPagComponents/AfterHeader';
import PopularPlaces from './LandingPagComponents/PopularPlaces';
import FeaturedPlaces from './LandingPagComponents/FeaturedPlaces';
import WhyChooseUs from './LandingPagComponents/WhyChooseUs';
import PopularSpaces from './LandingPagComponents/PopularSpaces';
import OurAgents from './LandingPagComponents/OurAgents';
import OurPartners from './LandingPagComponents/OurPartners';
const LandingPage = () => {
    // const [allDtaa,setAllData]=useStae([])

    return (
        <div>
            <TopBar/>
            <AfterHeader/>
            <PopularPlaces />
            <FeaturedPlaces/>
            <WhyChooseUs/>
            <PopularSpaces/>
            <OurAgents/>
            <OurPartners/>
        </div>
    );
}

export default LandingPage;
