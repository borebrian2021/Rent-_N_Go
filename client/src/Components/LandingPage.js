import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import AfterHeader from "./LandingPagComponents/AfterHeader";
import PopularPlaces from "./LandingPagComponents/PopularPlaces";
import FeaturedPlaces from "./LandingPagComponents/FeaturedPlaces";
import WhyChooseUs from "./LandingPagComponents/WhyChooseUs";
import PopularSpaces from "./LandingPagComponents/PopularSpaces";
import OurAgents from "./LandingPagComponents/OurAgents";
import OurPartners from "./LandingPagComponents/OurPartners";
import Footer from "./Footer";
const LandingPage = ({user,setUser}) => {
  const [properties, setProperties] = useState([]);
  const [spaces, setSpaces] = useState([]);

  // properties
  useEffect(() => {
    fetch("/properties")
      .then((r) => r.json())
      .then((data) => {
        setProperties(data);
      });
  }, []);

  //   spaces
  useEffect(() => {
    fetch("/spaces")
      .then((r) => r.json())
      .then((data) => {
        setSpaces(data);
      });
  }, []);

  return (
    <div>
      {/* <TopBar /> */}
      <TopBar user={user} setUser={setUser}/>

      <AfterHeader />
      <PopularPlaces properties={properties} />
      <FeaturedPlaces spaces={spaces} />
      <WhyChooseUs />
      <PopularSpaces />
      <OurAgents />
      <OurPartners />
      <Footer/>
    </div>
  );
};

export default LandingPage;
