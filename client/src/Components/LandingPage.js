import React from 'react';
import TopBar from './TopBar';
import AfterHeader from './SubComponents/AfterHeader';
import PopularPlaces from './SubComponents/PopularPlaces';
import FeaturedPlaces from './SubComponents/FeaturedPlaces';
import WhyChooseUs from './SubComponents/WhyChooseUs';
import PopularSpaces from './SubComponents/PopularSpaces';
import OurAgents from './SubComponents/OurAgents';
import OurPartners from './SubComponents/OurPartners';
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
