import React from "react";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartItem = ({ item, index }) => {
  const handleRemove = () => {};
  return (
    <div>
      <div className="card-body">
        <div className="row justify-content-between align-items-start h-100">
          <div className="col-md-2 col-lg-2 col-xl-2">
            {/* <!-- Image --> */}
            <div
              className="bg-image hover-overlay hover-zoom ripple rounded"
              data-mdb-ripple-color="light"
            >
              <img
                src={item.img}
                className="w-100 h-100"
                alt="Blue Jeans Jacket"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{
                    backgroundColor: "white",
                  }}
                ></div>
              </a>
            </div>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3">
            {/* <!-- Data --> */}
            <p className="mb-0" style={{ color: "grey", fontWeight: "600" }}>
              {item.brand}
            </p>
            <p className="mb-1">
              <strong>{item.title}</strong>
            </p>
            <p style={{ fontSize: "small" }}>Size: {item.size} oz</p>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
            {/* <div className="form-group">
              <label className="mb-2" for="quantitySelector">
                Quantity
              </label>
              <select className="form-select" id="quantitySelector">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div> */}
            <div className="d-flex flex-column justify-content-center text-center">
              <h6 className="mb-2">Quantity</h6>
              <div className="row">
                <div className="col mt-1">
                  <RemoveIcon fontSize="small" style={{ cursor: "pointer" }} />
                </div>
                <div className="col">
                  <h4>{item.quantity}</h4>
                </div>
                <div className="col mt-1">
                  <AddIcon fontSize="small" style={{ cursor: "pointer" }} />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Price--> */}
          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <p className="mb-1">Total</p>
            <h5 className="mb-0">${item.price * item.quantity}</h5>
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
            <button className="btn" onClick={handleRemove}>
              <CloseIcon fontSize="small" sx={{ color: "grey" }} />
            </button>
          </div>
        </div>
      </div>
      <hr className="mx-3" style={{ border: "1px solid gray" }} />
    </div>
  );
};

export default CartItem;
