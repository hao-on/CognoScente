import React, { useEffect, useState } from "react";
import "./Style/NavBar.css";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Badge, makeStyles } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { navItems } from "../data";
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
  const location = useLocation();
  const page = location.pathname.split("/")[1];
  const pages = ["cart", "login", "register"];

  const [color, setColor] = useState(false);
  const [toggle, setToggle] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 150) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const showToggle = () => {
    if(window.innerWidth <= 1000){
      setToggle(true)
    }
    else{
      setToggle(false)
    }
  }

  window.addEventListener("scroll", changeColor);
  window.addEventListener("resize", showToggle);

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
          ? "bg-black py-2 fixed-top"
          : "navbar-bg py-2 fixed-top"
      }
      style={
        color || page !== 'product'
          ? { mixBlendMode: "normal" }
          : { mixBlendMode: "difference" }
      }
    >
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-3 col-md-1">
            <button class="btn m-0 p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft" hidden={!toggle}><MenuIcon sx={{ color: "white" }} /></button>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
              <div class="offcanvas-header">
                <h5 id="offcanvasRightLabel">Menu</h5>
                <button type="button" class="btn-close btn-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                {navItems.map((item) => (
                  <p id={item.id}>
                    <Link
                    to={`${item.page}`}
                    className="toggle-link"
                    onClick={() => {
                      window.scroll({
                        top: 0,
                        left: 0,
                        behavior: "smooth",
                      });
                    }}
                    >
                      { item.title }
                    </Link>
                  </p>
                ))}
                
              </div>
            </div>
          </div>
          <div className="col-6 col-md-10 d-flex justify-content-evenly align-items-center text-center">
            <Link
              to={"/products"}
              className="navbar-sub-header"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              hidden={toggle}
            >
              products
            </Link>
            <Link
              to={`/products/men`}
              className="navbar-sub-header"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              hidden={toggle}
            >
              men
            </Link>
            <Link
              to={"/"}
              className="navbar-header"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
            >
              .cognoscente
            </Link>
            <Link
              to={`/products/women`}
              className="navbar-sub-header"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              hidden={toggle}
            >
              women
            </Link>
            <Link
              to={`/products/unisex`}
              className="navbar-sub-header"
              onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              hidden={toggle}
            >
              unisex
            </Link>

          </div>

          <div className="col-3 col-md-1">
            <div className="row align-items-center">
              <div className="col-6">
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
                  padding: "0px 10px",
                  marginTop: "2px",
                }}
              >
                <PersonOutlineOutlinedIcon fontSize="medium" />
              </Link>
              </div>
              <div className="col-6">
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
                  <ShoppingBagOutlinedIcon fontSize="medium" />
                </Badge>
              </Link>
              </div>

              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
