import React from "react";
import { useGoogleLogin } from "react-google-login";

// refresh token
import { refreshTokenSetup } from "./utils/refreshToken";

const clientId =
  "1004992737804-trfkn3kml5mtsneum6cn5fvgn60g00mo.apps.googleusercontent.com";

function LoginHooks() {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };