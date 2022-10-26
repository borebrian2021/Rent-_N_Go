import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate,Link } from 'react-router-dom';
import logo from '../../Image/logo1.png'
const SideBar = ({ sideBarData ,hideShowProfiles}) => {
    //INSTANCE
    const navigate = useNavigate();

    const logout = () => {
        fetch("/logout",
            {
                method: 'DELETE'

            }


        )
            .then((rawData) => {
                if (rawData.ok) {

                    // console.log(data)
                    // setSideBarData(data)
                    toast.success("Logged out successfully")
                    // setTimeout(function () {

                    alert("Working out")

                    navigate("/login")



                    // }, 2000);

                }
                else {
                    alert("No head")

                    toast.error('Something went wrong')
                }
            })



    }


    console.log(sideBarData.profile_url)
    return (
        <div class="col-lg-3 col-md-12 col-xs-12 pl-0 pr-0 user-dash">
            <div class="user-profile-box mb-0">
                <div class="sidebar-header ">
                    {/* <img src={logo}  alt="header-logo2.png" />  */}
                    </div>
                <div class="header clearfix">
                    <img src={sideBarData.profile_url} alt="avatar" class="img-fluid profile-img" />

                </div>
                <div class="active-user">
                    <h4 class="text-white side-name ml-5">{sideBarData.first_name} &nbsp; {sideBarData.last_name}</h4>
                </div>
                <div class="detail clearfix">
                    <ul class="mb-0">
                        <li>
                            <a class="active" href="dashboard.html">
                                <i class="fa fa-map-marker"></i> Dashboard
                            </a>
                        </li>
                        <li>
                            <a onClick={hideShowProfiles}>
                                <i class="fa fa-user"></i>Profile
                            </a>
                        </li>
                        <li>
                            <a href="my-listings.html" >
                                <i class="fa fa-list" aria-hidden="true"></i>My Properties
                            </a>
                        </li>
                        <li>
                            <a href="favorited-listings.html">
                                <i class="fa fa-heart" aria-hidden="true"></i>Favorited Properties
                            </a>
                        </li>
                        <li>
                            <a href="add-property.html">
                                <i class="fa fa-list" aria-hidden="true"></i>Add Property
                            </a>
                        </li>
                        <li>
                            <a href="payment-method.html">
                                <i class="fas fa-credit-card"></i>Payments
                            </a>
                        </li>
                        <li>
                            <a href="invoice.html">
                                <i class="fas fa-paste"></i>Invoices
                            </a>
                        </li>
                        {/* <li>
                        <a href="change-password.html">
                            <i class="fa fa-lock"></i>Change Password
                        </a>
                    </li> */}
                        <li>
                            <a onClick={logout}>
                                <i class="fas fa-sign-out-alt"></i>Log Out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SideBar;
