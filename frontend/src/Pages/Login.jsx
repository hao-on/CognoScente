import React from "react";
import {
  MDBCheckbox,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardSubTitle,
} from "mdb-react-ui-kit";

import "./Style/Login.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { login } from "../Redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    login(dispatch, { email, password });
  };

  return (
    <div>
      <NavBar />
      <div class="container-fluid px-4 my-5 h-custom py-5">
        <div class="row g-3 justify-content-around align-items-center">
          <div class="col col-sm-4">
            <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-3 mb-0">WELCOME BACK</p>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label for="floatingPassword">Password</label>
            </div>
            <div className="d-flex justify-content-between mb-5">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="/">Forgot password?</a>
            </div>

            <div className="d-grid">
              <button
                type="button"
                class="btn btn-dark"
                onClick={handleClick}
                disabled={isFetching}
              >
                SIGN IN
              </button>
            </div>
          </div>
          <div class="col col-sm-4">
            <MDBCard className="bg-dark text-light">
              <MDBCardBody className="p-4">
                <MDBCardTitle className="fw-bold mb-3">
                  New Member?
                </MDBCardTitle>
                <MDBCardSubTitle>Benefits</MDBCardSubTitle>
                <MDBCardText className="mb-4">
                  <ul>
                    <li>Check out faster</li>
                    <li>Save multiple shipping addresses</li>
                    <li>Access your order history</li>
                    <li>Track your orders</li>
                    <li>Newsletter</li>
                  </ul>
                </MDBCardText>
                <Link
                  to={"/register"}
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <div className="d-grid">
                    <button type="button" class="btn btn-light">
                      SIGN UP
                    </button>
                  </div>
                </Link>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
