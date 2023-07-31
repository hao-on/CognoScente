import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundColor: "black",
          height: "100px",
          width: "100%",
          paddingTop: "100px",
        }}
      ></div>

      <div class="container fluid">
        <div className="row justify-content-center">
          <div class="col col-sm-6">
            <MDBCard
              className="mb-5 p-5 shadow-5"
              style={{
                marginTop: "-30px",
                background: "hsla(0, 0%, 100%, 0.8)",
                backdropFilter: "blur(30px)",
              }}
            >
              <MDBCardBody className="p-2 text-center">
                <h2 className="fw-bold mb-5">Sign up now</h2>

                <div class="row g-2">
                  <div class="col-sm-6">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="First Name"
                      />
                      <label for="floatingInput">First Name</label>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Last Name"
                      />
                      <label for="floatingInput">Last Name</label>
                    </div>
                  </div>
                </div>

                <div class="row g-2">
                  <div class="col-sm-6">
                    <div class="form-floating mb-3">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Email</label>
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-floating mb-3">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword">Password</label>
                    </div>
                  </div>
                </div>

                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Address Line 1"
                  />
                  <label for="floatingInput">Address Line 1</label>
                </div>

                <div class="row g-2">
                  <div class="col-12 col-sm-8">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Address Line 2"
                      />
                      <label for="floatingInput">Address Line 2</label>
                    </div>
                  </div>
                  <div class="col-12 col-sm-4">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="City"
                      />
                      <label for="floatingInput">Suburb/City</label>
                    </div>
                  </div>
                </div>

                <div class="row g-2">
                  <div class="col-12 col-sm-6">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="State/Province"
                      />
                      <label for="floatingInput">State/Province</label>
                    </div>
                  </div>

                  <div class="col-12 col-sm-6">
                    <div class="form-floating mb-3">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Zip/Postcode"
                      />
                      <label for="floatingInput">Zip/Postcode</label>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-center mb-5">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                    color="black"
                  />
                </div>

                <div className="d-grid">
                  <button type="button" class="btn btn-dark">
                    SIGN UP
                  </button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
