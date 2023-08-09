import {
  Twitter,
  Facebook,
  Instagram,
  YouTube,
  Copyright,
} from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import "./Style/Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid bg-black text-white">
      <div className="row text-center">
        <div className="col-12 col-sm-12">
          <h4 className="title mt-5">Join Us</h4>
        </div>
        <div className="w-100"></div>
        <div className="col-12 col-sm-12">
          <h5
            className="title"
            style={{ textTransform: "lowercase", fontWeight: "300" }}
          >
            Hear first-hand about exclusive product launches, new scents and
            more!
          </h5>
        </div>
        <div className="w-100"></div>
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center py-2 mb-4">
              <div className="col-5 col-sm-2">
                <input
                  type="text"
                  className="custom-input"
                  placeholder="First name"
                />
              </div>
              <div className="col-5 col-sm-2">
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div className="row justify-content-center align-items-center py-2">
              <div className="col-10 col-sm-4">
                <input
                  type="email"
                  className="custom-input"
                  id="inputAddress"
                  placeholder="name@example.com"
                />
              </div>
            </div>
        </div>

        <div className="d-grid gap-2 col-2 mx-auto my-5 align-self-center justify-content-center ">
          <button type="button" className="btn btn-outline-warning ">
            Submit
          </button>
        </div>
      </div>

      <div className="row text-center mt-4">
        <div className="col-12 col-sm-12">
          <h4 className="title">Explore</h4>
        </div>
        <div className="w-100"></div>
        <div className="col-12">
          <ul className="footer-nav-custom">
            <li>
              <a className="nav-link" href="#">
                CONTACT
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                OUR STORY
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                ARTICLES
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                VIDEOS
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                COMMUNITY
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                DELIVERY
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                ORDER
              </a>
            </li>
          </ul>
        </div>
        <div className="w-100"></div>
        <div className="col-12 col-sm-12">
          <div className="info my-5">
            <h4 className="title">Connect</h4>
            <Stack direction="row" spacing={3}>
              <Facebook />
              <Instagram />
              <Twitter />
              <YouTube />
            </Stack>
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col-12 col-sm-12 d-flex flex-row justify-content-center align-items-center py-4">
          <Copyright sx={{ fontSize: 16 }} />
          <Typography variant="body2">
            2023 CognoScente. All Right Reserved.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
