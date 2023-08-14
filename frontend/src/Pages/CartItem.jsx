import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import { removeProduct, updateProduct } from "../Redux/CartRedux";
import { Link } from "react-router-dom";

const CartItem = ({ item, index }) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(item.quantity);

  const handleRemove = () => {
    dispatch(removeProduct({ ...item }));
  };

  const handleQuantity = (type) => {
    const updateData = {
      _id: item._id,
      price: item.price,
      type: type
    }
    if (type === "decrease") {
      if(quantity > 1){
        setQuantity(quantity - 1);
        dispatch(updateProduct({ ...updateData }));
      }
    } else {
      setQuantity(quantity + 1);
      dispatch(updateProduct({ ...updateData }));
    }
  };

  return (
    <div>
      <div className="card-body">
        <div className="row justify-content-between align-items-start h-100">
          <div className="col-12 col-sm-6">
            <div className="row justify-content-between">
              <div className="col-6">
                {/* <!-- Image --> */}
                <div
                  className="bg-image hover-overlay hover-zoom ripple rounded"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={item.img}
                    className="w-100 h-100"
                    alt="Product"
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

              <div className="col-6">
                {/* <!-- Data --> */}
                <p className="mb-0" style={{ color: "grey", fontWeight: "600" }}>
                  {item.brand}
                </p>
                <p className="mb-1">
                <Link
                  to={`/product/${item._id}`}

                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  <strong>{item.title}</strong>
                  </Link>
                </p>
                <p className="mb-3" style={{ fontSize: "small" }}>Size: {item.size} oz</p>
                <h5 className="mb-0">${(item.price * quantity).toFixed(2)}</h5>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-3 mt-3 mt-sm-0">
            <div className="d-flex flex-column justify-content-center text-center">
              <p className="mb-2">Quantity</p>
              <div className="row mb-3">
                <div className="col-4 mt-1">
                  <RemoveIcon fontSize="x-small" style={{ cursor: "pointer" }} onClick={() => handleQuantity("decrease")}/>
                </div>
                <div className="col-4">
                  <h5>{quantity}</h5>
                </div>
                <div className="col-4 mt-1">
                  <AddIcon fontSize="x-small" style={{ cursor: "pointer" }} onClick={() => handleQuantity("increase")}/>
                </div>
              </div>
              <button className="btn btn-outline-danger" onClick={handleRemove}>
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mx-3" style={{ border: "1px solid gray" }} />
    </div>
  );
};

export default CartItem;
