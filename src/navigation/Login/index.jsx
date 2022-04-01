import React, { useRef, useState } from "react";
import styled from "styled-components";

import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

export default function index() {
  return (
    <GoogleLogin
      clientId="549736276629-aqvo9h4oo8lnots3ttkto5j28n04ls52.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}
