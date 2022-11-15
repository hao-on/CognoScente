import React, { useState } from "react";
import "./Style/NavBar.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Badge } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const location = useLocation();
  const page = location.pathname.split("/")[1];
  const pages = ["cart", "login", "register"];

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const badgeStyle = {
    "& .MuiBadge-badge": {
      color: "black",
      backgroundColor: "#ffc107",
      width: "10px",
      height: "20px",
      borderRadius: "100%",
    },
  };
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div
      className={
        color || pages.includes(page)
          ? "bg-black py-3 fixed-top text-white text-center"
          : "bg-transparent py-3 fixed-top text-white text-center"
      }
      style={
        color || pages.includes(page)
          ? { mixBlendMode: "normal" }
          : { mixBlendMode: "difference" }
      }
    >
      <div className="container-fluid">
        <div className="row justify-content-center justify-content-sm-center ">
          <div className="col col-sm-5 d-flex header__logo align-self-center navbar navbar-dark">
            <button
              className="navbar-toggler border-0 custom-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDark"
              aria-controls="offcanvasDark"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-start bg-black text-white "
              data-bs-scroll="true"
              tabIndex="-1"
              id="offcanvasDark"
              aria-labelledby="offcanvasWithDarkLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkLabel"></h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul>
                  <li>
                    <a href="/">home</a>
                  </li>
                  <li>
                    <a href="/">men's fragnace</a>
                  </li>
                  <li>
                    <a href="/">women's fragnance</a>
                  </li>
                  <li>
                    <a href="/">unisex's fragnance</a>
                  </li>
                  <li>
                    <a href="/">.cognoscente's world</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col col-sm-2 d-block align-self-center">
            <Link
              to={"/"}
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "500",
                fontFamily: `"Italiana", serif`,
                fontSize: "20pt",
              }}
            >
              <h2 className="navbar-brand">.cognoscente</h2>
            </Link>
          </div>

          <div className="col col-sm-5 d-flex justify-content-end mt-2">
            <ul className="my-nav">
              <Link
                to={"/login"}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                style={{
                  textDecoration: "none",
                  color: "white",
                  paddingRight: "10px",
                  marginTop: "2px",
                }}
              >
                <PersonOutlineOutlinedIcon fontSize="small" />
              </Link>
              <Link
                to={"/cart"}
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                style={{
                  textDecoration: "none",
                  color: "white",
                }}
              >
                <Badge
                  color="primary"
                  badgeContent={quantity}
                  showZero
                  sx={badgeStyle}
                >
                  <ShoppingBagOutlinedIcon fontSize="small" />
                </Badge>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
