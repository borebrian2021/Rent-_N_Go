import React from "react";
import toast from "react-hot-toast";
import { useNavigate, NavLink } from "react-router-dom";
import logo from "../../Image/logo1.png";
const SideBar = ({ sideBarData, hideShowProfiles, setUser }) => {
  //INSTANCE
  const navigate = useNavigate();

  const logout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((rawData) => {
      if (rawData.ok) {
        toast.success("Logged out successfully");
        alert("Working out");
        navigate("/login");
        setUser(null);
      } else {
        toast.error("Something went wrong");
      }
    });
  };

  // console.log(sideBarData.profile_url);
  return (
    <div class="col-lg-3 col-md-12 col-xs-12 pl-0 pr-0 user-dash">
      <div class="user-profile-box mb-0">
        <div class="sidebar-header ">
          {/* <img src={logo}  alt="header-logo2.png" />  */}
        </div>
        <div class="header clearfix">
          <img
            src={sideBarData.profile_url}
            alt="avatar"
            class="img-fluid profile-img"
          />
        </div>
        <div class="active-user">
          <h4 class="text-white ml-5 transition">
            {sideBarData.first_name} &nbsp; {sideBarData.last_name}
          </h4>
        </div>
        <div class="detail clearfix overFlow">
          <ul class="mb-0" className="overFlow">
            <li >
            <h4 class="text-white ml-5">Dashboard</h4>
            </li>
            <li>
              <NavLink to="/" class="active ">
                {" "}
                <i class="fa fa-home">  </i> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard/profile" class="active transition_li">
                {" "}
                <i class="fa fa-user"></i>Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard/addproperty" className="transition_li">
                <i class="fa fa-solid fa-plus" aria-hidden="true">
                </i>
                Add Property

              </NavLink>
            </li>

            <li>
              <NavLink to="dashboard/myproperties" className="transition_li">
                {" "}
                <i class="fa fa-hospital-o" aria-hidden="true">
                </i>
                My Properties

              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard/addspace" className="transition_li">
              <i class="fa fa-solid fa-plus" aria-hidden="true">
                </i>
                  AddSpace
              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard/Myspaces" className="transition_li">
                <i class="fa fa-building-o" aria-hidden="true">
                </i>
                MySpaces

              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard/addamenities" className="transition_li">
                <i class="fa fa-th" aria-hidden="true">
                </i>
                Add Amenities

              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard/Myreservation" className="transition_li">
                <i class="fa fa-clock-o" aria-hidden="true" >
                </i>
                 Reservations

              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard/Mypayments" className="transition_li">
                <i class="fa fa-credit-card-alt" aria-hidden="true">
                </i>
                Payments

              </NavLink>
            </li>
            <li>
              <NavLink to="dashboard/invoices"  className="transition_li">
                <i class="fa fa-paperclip" aria-hidden="true">
                </i>                   Invoice

              </NavLink>
            </li>
            <li  className="transition_li">
              <a onClick={logout}>
              <i class="fa fa-power-off"></i>Log out
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default SideBar;
