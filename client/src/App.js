import './App.css';
import TopBar from './Components/TopBar';
import AfterHeader from './Components/LandingPagComponents/AfterHeader';
import LandingPage from './Components/LandingPage';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import ResetPassword from './Components/ResetPassword';
import TermsAndConditions from './Components/TermsAndConditions';
import Reservations from './Components/DashboardComponents/Reservations';
import Invoice from './Components/Invoice';
import Dashboard from './Components/Dashboard';
import PropertyCard from './Components/PropertyListing';
// import PropertyDetails from './Components/PropertyDetails';
import MySpaces from './Components/MySpaces';
import PropertyListing from './Components/PropertyListing';
import SpaceUploadForm from './Components/SpaceUploadForm'
import PropertyUploadForm from './Components/PropertyUploadForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={ <Home/> } /> */}
        <Route path="/" element={<LandingPage />} />

        <Route path="login" element={<Login />} />
        <Route path="login" element={<Login />} />

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
    </BrowserRouter>
  );
}
export default App;
{
  /* <Login/> */
}