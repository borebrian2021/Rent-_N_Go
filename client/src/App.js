import React, { useState, useEffect } from "react";
import "./App.css";
import TopBar from "./Components/TopBar";
import AfterHeader from "./Components/LandingPagComponents/AfterHeader";
import LandingPage from "./Components/LandingPage";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import ResetPassword from "./Components/ResetPassword";
import TermsAndConditions from "./Components/TermsAndConditions";
import Reservations from "./Components/DashboardComponents/Reservations";
import Invoice from "./Components/Invoice";
import Dashboard from "./Components/Dashboard";
// import PropertyCard from './Components/PropertyListing';
// import PropertyDetails from './Components/PropertyDetails';
import MySpaces from "./Components/MySpaces";
import PropertyDetails from "./Components/PropertyDetails";
import PropertyListing from "./Components/DashboardComponents/PropertyListing";
import SpaceUploadForm from "./Components/DashboardComponents/SpaceUploadForm";
import PropertyUploadForm from "./Components/DashboardComponents/PropertyUploadForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <Routes>
      {/* <Route path="/" element={ <Home/> } /> */}
      <Route path="/" element={<LandingPage />} />
      <Route  path="login" element={<Login />} />
      <Route  path="signup" element={<SignUp />} />
      <Route  path="dashboard/*" element={<Dashboard user={user} />} />
      <Route  path="/space-page" element={<PropertyDetails />} />
      {/* <PropertyUploadForm/> */}
      {/* <SpaceUploadForm/> */}
      {/* <Test/> */}
      {/* <TopBar/> */}
      {/* <Login/> */}
      {/* <Reservations/> */}
      {/* <Invoice/> */}
      {/* <ResetPassword/> */}
      {/* <SignUp/> */}
      {/* <LandingPage/> */}
      {/* <Dashboard/> */}
      {/* <PropertyListing/> */}
      {/* <PropertyCard/> */}
      {/* <PropertyDetails/> */}
      {/* <MySpaces/> */}
    </Routes>

  );
}
export default App;
