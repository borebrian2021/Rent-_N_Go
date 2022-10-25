import React from 'react';
import DashboardCards from './DashboardComponents/DashboardCards';
import DashboardFooter from './DashboardComponents/DashboardFooter';
import Invoice from './Invoice';
import Messages from './DashboardComponents/Messages';
import MySpaces from './DashboardComponents/MySpaces';
import Profile from './DashboardComponents/Profile';
import Reservations from './DashboardComponents/Reservations';
import Reviews from './DashboardComponents/Reviews';
import SideBar from './DashboardComponents/SideBar';
import PropertyUploadForm from './PropertyUploadForm';
import SpaceUploadForm from './SpaceUploadForm';
const Dashboard = () => {
    return (
        <section class="user-page section-padding">
            <div class="container-fluid">
                <div class="row">
                    <SideBar />
                    <div class="col-lg-9 col-md-12 col-xs-12 pl-0 user-dash2">
                        <DashboardCards />
                        <PropertyUploadForm/>
                        <SpaceUploadForm/>
                        <MySpaces />
                        <Messages />
                        <Reviews />
                        <Profile />
                        <Invoice/>
                        <Reservations/>
                        <DashboardFooter />

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
