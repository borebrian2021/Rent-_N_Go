import React, { useEffect, useState } from 'react';
import DashboardCards from './DashboardComponents/DashboardCards';
import DashboardFooter from './DashboardComponents/DashboardFooter';
import Invoice from './Invoice';
import Messages from './DashboardComponents/Messages';
import MySpaces from './DashboardComponents/MySpaces';
import Profile from './DashboardComponents/Profile';
import Reservations from './DashboardComponents/Reservations';
import Reviews from './DashboardComponents/Reviews';
import SideBar from './DashboardComponents/SideBar';
import PropertyUploadForm from './DashboardComponents/PropertyUploadForm';
import SpaceUploadForm from './DashboardComponents/SpaceUploadForm';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PropertyListing from './DashboardComponents/PropertyListing';

const Dashboard = () => {
    //NAVIGATE
    const navigate = useNavigate();

    //RETRIEVE USER_ID FROM LOCAL STORAGE
    const user_id = localStorage.getItem('user_id')

    //DATA STATES
    const [sideBarData, setSideBarData] = useState([])
    const [propertyData,setPropertyData]=useState([])


    //HIDA & SHOW STATES
    const [profile, setProfile] = useState(false)
    const [uploadForm, setUploadForm] = useState(true)
    const [dashboardCards, setDashboardCards] = useState(true)
    const [properUpload, setPropertyUpload] = useState(true)
    const [reviews, setReviews] = useState(false)
    const [invoice, setInvoice] = useState(false)
    const [reservations, setUserdetails] = useState(false)
    const [messages, setMessages] = useState(false)
    const [myspaces, setMySpaces] = useState(false)

    //HIDE AND DISPLAY COMPONENT DYNAMICALLY
    const hideShowProfiles = () => {
        setUploadForm(false)
        setDashboardCards(false)
        setPropertyUpload(false)
        setReviews(false)
        setInvoice(false)
        setUserdetails(false)
        setMessages(false)
        setMySpaces(false)
        setProfile(true)
    }

    //GET USER ID

    let newObject = window.localStorage.getItem("user_data");
    console.log(JSON.parse(newObject));

    // sideBarData=console.log(JSON.parse(newObject))
    // setSideBarData(JSON.parse(newObject))
    // console.log(user_data)
    //SET DATA
    const setData = () => {

    }

    //FETCH USER DETAILS
    useEffect(() => {

        //CHECK LOGIN STATUS
        fetch("/me")
            .then((rawData) => {
                if (rawData.ok) {
                    rawData.json().then((data) => {
                        //USER IS LOGGED IN ,FETCHING USER DATA
                        // console.log(data)
                        setSideBarData(data)
                        setPropertyData(data.properties)




                    })
                }
                else {

                    navigate("/login")
                    // toast.error('Something went wrong')
                }
            })


        //FETCH USER DATA
        fetch("/clients")
            .then((rawData) => {
                if (rawData.ok) {
                    rawData.json().then((data) => {


                    })
                }
                else {

                    navigate("/login")
                    // toast.error('Something went wrong')
                }
            })


    }, [])

    return (
        <section class="user-page section-padding">
            <div class="container-fluid">
                <div class="row">
                    <Toaster />
                    <SideBar sideBarData={sideBarData} hideShowProfiles={hideShowProfiles} />
                    <div class="col-lg-9 col-md-12 col-xs-12 pl-0 user-dash2">
                        {/* <DashboardCards />
                        <PropertyUploadForm /> */}
                        {profile && <Profile />}
                        {uploadForm && <SpaceUploadForm />}
                        {dashboardCards && <DashboardCards />}
                        {dashboardCards && <MySpaces />}
                        {/* {dashboardCards && <Messages />
                        } */}
                        {/* {dashboardCards && <MySpaces />}
                        {dashboardCards && <MySpaces />}
                        {dashboardCards && <MySpaces />}
                        {dashboardCards && <MySpaces />}
                        {dashboardCards && <MySpaces />} */}
<PropertyUploadForm setPropertyData={setPropertyData} propertyData={propertyData} />
<PropertyListing propertyData={propertyData}/>
{/* <SpaceUploadForm/> */}



                        <DashboardFooter />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
