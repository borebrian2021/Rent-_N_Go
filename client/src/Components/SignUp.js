import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import TopBar from "./TopBar";
import { useNavigate } from "react-router-dom";
//SETTING THE CONSTANTS
const SignUp = () => {
  //NAVIGATIONS
  const navigate = useNavigate();

  const [userDetails, setUserdetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phonenumber: "+254",
    password: "",
    passwordConfirmation: "",
    profileUrl:
      "https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
  })

  //HANDLE CHANGE
  function handleChange(e) {
    const key = e.target.id;
    setUserdetails({ ...userDetails, [key]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: userDetails.firstName,
        last_name: userDetails.lastName,
        email: userDetails.email,
        phone_number: userDetails.phonenumber,
        profile_url: userDetails.profileUrl,
        password: userDetails.password,
        password_confirmation: userDetails.passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then((userDetails) => {
        setUserdetails({
          ...userDetails,
          first_name: "",
          last_name: "",
          email: "",
          phone_number: "",
          profile_url: "",
          password: "",
          password_confirmation: "",
        });
        toast.success("User succesfully created!");

        setTimeout(function () {
          navigate("/login");
        }, 2000);
      });
  };

  //FETCH

  return (
    <div>
      <TopBar />
      <Toaster />
      <section class="headings">
        <div class="text-heading text-center">
          <div class="container">
            <h6 className="m-3">Welcome back ,lets get you started.</h6>
          </div>
        </div>
      </section>

      <div id="login">
        <div class="login text-left">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label>First Name</label>
              <input
                type="text"
                id="firstName"
                value={userDetails.firstName}
                class="form-control authinputs p-3"
                onChange={handleChange}
                placeholder="First name"
                required
              />
              <i class="icon_mail_alt"></i>
            </div>
            <div class="form-group">
              <label>Last Name</label>
              <input
                type="text"
                id="lastName"
                value={userDetails.lastName}
                class="form-control authinputs"
                onChange={handleChange}
                placeholder="Last name"
                required
              />
              <i class="icon_lock_alt"></i>
            </div>{" "}
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                id="email"
                value={userDetails.email}
                class="form-control authinputs"
                onChange={handleChange}
                placeholder="Email"
                required
              />
              <i class="icon_lock_alt"></i>
            </div>{" "}
            <div class="form-group">
              <label>Phone number</label>
              <input
                type="text"
                id="phonenumber"
                value={userDetails.phonenumber}
                class="form-control authinputs"
                onChange={handleChange}
                placeholder="Phone number"
                required
              />
              <i class="icon_lock_alt"></i>
            </div>{" "}
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                id="password"
                value={userDetails.password}
                class="form-control authinputs"
                onChange={handleChange}
                placeholder="Password"
                required
              />
              <i class="icon_lock_alt"></i>
            </div>{" "}
            <div class="form-group">
              <label>Confirm password</label>
              <input
                type="password"
                id="passwordConfirmation"
                value={userDetails.passwordConfirmation}
                onChange={handleChange}
                class="form-control authinputs"
                placeholder="Confirm password"
                required
              />
              <i class="icon_lock_alt"></i>
            </div>
            <div class="form-group">
              <label>Profile url</label>
              <input
                type="text"
                id="profileUrl"
                value={userDetails.profileUrl}
                class="form-control authinputs"
                onChange={handleChange}
                placeholder="Profile url"
                required
              />
              <i class="icon_lock_alt"></i>
            </div>
            <div class="fl-wrap filter-tags clearfix add_bottom_30">
              <div class="checkboxes float-left">
                <div class="filter-tags-wrap">
                  <input id="check-b" type="checkbox" name="check" />
                  <label for="check-b">
                    <a href="register.html" class="default_color">
                      Accept Term and Conditions
                    </a>
                  </label>
                </div>
              </div>
            </div>
            <input class="btn_1 rounded" type="submit" />
            <div class="text-center add_top_10">
              New to Find Houses?{" "}
              <strong>
                <a href="register.html" class="default_color">
                  Sign up!
                </a>
              </strong>
            </div>
            <div class="access_social m-3">
              {/* <a href="#0" class="social_bt facebook">Login with Facebook</a> */}
              <a href="#0" class="social_bt google">
                Login with Google
              </a>
              {/* <a href="#0" class="social_bt linkedin">Login with Linkedin</a> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
