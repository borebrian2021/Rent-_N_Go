import React from "react";
import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";
import { useEffect } from "react";
// import {  useNavigate } from "react-router-dom";
// refresh token
import { refreshTokenSetup } from "./utils/refreshToken"; 

const clientId =
  "1004992737804-trfkn3kml5mtsneum6cn5fvgn60g00mo.apps.googleusercontent.com";



function LoginGoogle() {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };
    // useNavigate("/dashboard");

  useEffect(() => {
    function start(e) {
      e.preventDefault();
      gapi.client.init({
        clientId: clientId,
        scope: "email",
        plugin_name: "Rent&Go",
      });
    }
    gapi.auth2.getAuthInstance(); 
    // gapi.load("client:auth2", start);
  }, []);

  

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login. 😢 Please ping this to the Rent & Go team or send an email to rentandgoservice@gmail.com`);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default LoginGoogle;