import React, { useState, useContext, useEffect } from "react";

import Api from "../data/api";
import LocalStorage from "../utils/localstorage";

import Context from "../store/context";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter,
} from "mdbreact";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (globalState.isLoggedIn) {
      const user = LocalStorage.get("user");
      globalDispatch({ type: "SET_LOGGEDIN_USER", payload: user });
    }
  }, []);

  const { globalState, globalDispatch } = useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginResponse = await Api.login(username, password);
    if (!loginResponse.success) {
      setError(loginResponse.message);
      return false;
    }

    const { token, user } = loginResponse.data;
    LocalStorage.save("token", token);
    LocalStorage.save("user", user._id);
    globalDispatch({ type: "SET_LOGGEDIN_USER", payload: user });
  };

  return (
    <MDBContainer>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <MDBRow>
        <MDBCol md="5" className="col-md-4 mx-auto">
          <MDBCard className="loginCard">
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              <MDBInput
                label="Your username"
                onChange={(e) =>
                  setUsername(e.target.value.toLowerCase().trim())
                }
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                onChange={(e) => setPassword(e.target.value.trim())}
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <h6> {error}</h6>
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="blue-text ml-1">
                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={handleSubmit}
                >
                  Sign in
                </MDBBtn>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon
                    fab
                    icon="facebook-f"
                    className="blue-text text-center"
                  />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="/register" className="blue-text ml-1">
                  Sign Up
                </a>
              </p>
            </MDBModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
