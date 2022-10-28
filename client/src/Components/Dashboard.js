import React, { useEffect, useState } from "react";
import DashboardCards from "./DashboardComponents/DashboardCards";
import DashboardFooter from "./DashboardComponents/DashboardFooter";
import Invoice from "./Invoice";
import PropertyDetails from "./PropertyDetails";
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
import AmenitiesForm from "./DashboardComponents/AmenitiesForm";

const Dashboard = ({ user }) => {
  //NAVIGATE
  const navigate = useNavigate();

  //RETRIEVE USER_ID FROM LOCAL STORAGE
  const user_id = localStorage.getItem("user_id");

  //DATA STATES
  const [sideBarData, setSideBarData] = useState([]);
  const [propertyData, setPropertyData] = useState([]);
  const [clientSpaces, setClientSpaces] = useState([]);
  const [profileData, setProfileData] = useState([]);

  //HIDA & SHOW STATES
  const [profile, setProfile] = useState(true);
  const [uploadForm, setUploadForm] = useState(true);
  const [dashboardCards, setDashboardCards] = useState(true);
  const [properUpload, setPropertyUpload] = useState(true);
  const [reviews, setReviews] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [reservations, setUserdetails] = useState(false);

  const [amenities, setAmenities] = useState(true);
  const [submitBtn, setSubmitBtn] = useState(true);
  const [submitBtnSpace, setSubmitSpaceBtn] = useState(true);

  // for dashboard card
  const [spaceReservations, setSpaceReservations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [mySpaces, setMySpaces] = useState([]);

  // data received from property listing to edit form

  // edit of property
  const [userProperty, setProperty] = useState({
    propertyName: "",
    location: "",
    imageUrl:
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  });

  const [propertyId, setPropertyId] = useState("");

  // edit spaces
  const [useSpace, setSpace] = useState({
    room_size: "",
    image_1:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    image_2:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    image_3:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3BhY2UlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "",
    price_per_hour: "",
    status_: "",
    space_category: "",
    property_id: "",
  });

  // space_id

  const [spaceID, setSpaceID] = useState("");

  // btn and header changes

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
    setAmenities(false);
  };

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
        setProfileData(data);
        setMessages(data.messages);
        setMySpaces(data.spaces);
        setSpaceReservations(data.reservations);
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
            {dashboardCards && (
              <DashboardCards
                propertyData={propertyData.length}
                messages={messages.length}
                mySpaces={mySpaces.length}
                spaceReservations={spaceReservations.length}
              />
            )}
            {profile && <Profile profileData={profileData} />}

            <PropertyUploadForm
              setPropertyData={setPropertyData}
              propertyData={propertyData}
              id={id}
              userProperty={userProperty}
              setProperty={setProperty}
              submitBtn={submitBtn}
              propertyId={propertyId}
              setSubmitBtn={setSubmitBtn}
            />
            <PropertyListing
              propertyData={propertyData}
              setPropertyData={setPropertyData}
              setSubmitBtn={setSubmitBtn}
              setProperty={setProperty}
              setPropertyId={setPropertyId}
            />

            {uploadForm && (
              <SpaceUploadForm
                propertyData={propertyData}
                setClientSpaces={setClientSpaces}
                clientSpaces={clientSpaces}
                id={id}
                useSpace={useSpace}
                setSpace={setSpace}
                submitBtnSpace={submitBtnSpace}
                spaceID={spaceID}
                setSubmitSpaceBtn={setSubmitSpaceBtn}
              />
            )}
            {dashboardCards && (
              <MySpaces
                clientSpaces={clientSpaces}
                setClientSpaces={setClientSpaces}
                setSubmitSpaceBtn={setSubmitSpaceBtn}
                setSpace={setSpace}
                setSpaceID={setSpaceID}
              />
            )}
            {amenities && <AmenitiesForm clientSpaces={clientSpaces} />}
            {dashboardCards && <Reservations />}

            {dashboardCards && <PropertyDetails />}

            <DashboardFooter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
