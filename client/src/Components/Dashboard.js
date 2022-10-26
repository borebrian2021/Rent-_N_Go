import React, { useEffect, useState } from "react";
import DashboardCards from "./DashboardComponents/DashboardCards";
import DashboardFooter from "./DashboardComponents/DashboardFooter";
import Invoice from "./Invoice";
import Messages from "./DashboardComponents/Messages";
import MySpaces from "./DashboardComponents/MySpaces";
import Profile from "./DashboardComponents/Profile";
import Reservations from "./DashboardComponents/Reservations";
import Reviews from "./DashboardComponents/Reviews";
import SideBar from "./DashboardComponents/SideBar";
import PropertyUploadForm from "./DashboardComponents/PropertyUploadForm";
import SpaceUploadForm from "./DashboardComponents/SpaceUploadForm";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PropertyListing from "./DashboardComponents/PropertyListing";

const Dashboard = ({ user }) => {
  //NAVIGATE
  const navigate = useNavigate();

  //RETRIEVE USER_ID FROM LOCAL STORAGE
  const user_id = localStorage.getItem("user_id");

  //DATA STATES
  const [sideBarData, setSideBarData] = useState([]);
  const [propertyData, setPropertyData] = useState([]);
  const [clientSpaces, setClientSpaces] = useState([]);

  //HIDA & SHOW STATES
  const [profile, setProfile] = useState(false);
  const [uploadForm, setUploadForm] = useState(true);
  const [dashboardCards, setDashboardCards] = useState(true);
  const [properUpload, setPropertyUpload] = useState(true);
  const [reviews, setReviews] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [reservations, setUserdetails] = useState(false);
  const [messages, setMessages] = useState(false);
  const [mySpaces, setMySpaces] = useState(false);

  //HIDE AND DISPLAY COMPONENT DYNAMICALLY
  const hideShowProfiles = () => {
    setUploadForm(false);
    setDashboardCards(false);
    setPropertyUpload(false);
    setReviews(false);
    setInvoice(false);
    setUserdetails(false);
    setMessages(false);
    setMySpaces(false);
    setProfile(true);
  };

  //GET USER ID
  //   let newObject = window.localStorage.getItem("user_data");
  // //   console.log(JSON.parse(newObject));

  let id = 1;

  user ? (id = user.id) : (id = 1);

  useEffect(() => {
    fetch("/clients/" + id)
      .then((r) => r.json())
      .then((data) => {
        console.log("data " + data);
        setSideBarData(data);
        setPropertyData(data.properties);
        setClientSpaces(data.spaces);
      });
  }, [id]);

  return (
    <section class="user-page section-padding">
      <div class="container-fluid">
        <div class="row">
          <Toaster />
          <SideBar
            sideBarData={sideBarData}
            hideShowProfiles={hideShowProfiles}
          />
          <div class="col-lg-9 col-md-12 col-xs-12 pl-0 user-dash2">
            {/* <DashboardCards />
                        <PropertyUploadForm /> */}
            {profile && <Profile />}
            {dashboardCards && <DashboardCards />}
            {/* {dashboardCards && <MySpaces />} */}
            {/* {dashboardCards && <Messages />
                        } */}
            {/* {dashboardCards && <MySpaces />}
                        {dashboardCards && <MySpaces />}
                        {dashboardCards && <MySpaces />}
                        {dashboardCards && <MySpaces />}
                        {dashboardCards && <MySpaces />} */}
            <PropertyUploadForm
              setPropertyData={setPropertyData}
              propertyData={propertyData}
              id={id}
            />
            <PropertyListing propertyData={propertyData} />
            {/* <SpaceUploadForm/> */}

            {uploadForm && <SpaceUploadForm propertyData={propertyData} setClientSpaces={setClientSpaces} clientSpaces={clientSpaces} />}
            {dashboardCards && <MySpaces clientSpaces={clientSpaces} />}
            
            {dashboardCards && <Messages />}
                         

            <DashboardFooter />


          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
