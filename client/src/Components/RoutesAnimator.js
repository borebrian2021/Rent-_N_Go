import React ,{useState,useEffect} from 'react';
import { AnimatePresence  }  from 'framer-motion'
import TopBar from "../Components/TopBar";
import AfterHeader from "../Components/LandingPagComponents/AfterHeader";
import LandingPage from "../Components/LandingPage";
import SignUp from "../Components/SignUp";
import Login from "../Components/Login";
import ResetPassword from "../Components/ResetPassword";
import TermsAndConditions from "../Components/TermsAndConditions";
import Dashboard from "../Components/Dashboard";

// import PropertyCard from '../Components/PropertyListing';
// import PropertyDetails from '../Components/PropertyDetails';
import PropertyDetails from "../Components/PropertyDetails";
import Contact from "../Components/Contact";
import { BrowserRouter, Route, Routes,useLocation } from "react-router-dom";

const RoutesAnimator = () => {
    const location=useLocation();
    const [user, setUser] = useState(null);
    useEffect(() => {

        fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }, []);
  
    return (
        <div>
            <AnimatePresence>
            <Routes>
        <Route path="/" location={location} key={location.key} element={<LandingPage setUser={setUser} user={user}/>}/>
        <Route path="contact" element={<Contact/>} />
        <Route path="login" element={<Login setUser={setUser}/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="dashboard/*" element={<Dashboard user={user} setUser={setUser} />}/>
        <Route path="/space-page" element={<PropertyDetails user={user}/>}/>
        <Route path="/terms" element={<TermsAndConditions/>}/>
      </Routes>
            </AnimatePresence>
        </div>
    );
}

export default RoutesAnimator;
