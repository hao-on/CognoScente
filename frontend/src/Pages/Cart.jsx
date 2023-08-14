import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import "./Style/Cart.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../config";
import { resetStore } from "../Redux/Store";


const Message = ({ message }) => (
  <section className="py-5" style={{height: "50vh"}}>
      <div className="container h-100 w-50 d-flex text-center align-items-center">
          <h5 className="mx-auto">
              <strong>{message} </strong>
              <Link
                  to="/"
                  onClick={() => {
                    window.scroll({
                      top: 0,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                Go to HomePage
              </Link>
          </h5>
          
      </div>
  </section>
);

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const [message, setMessage] = useState("");

  const handleCheckout = async () => {
    // move to stripe checkoutpage
    try {
      const { data } = await axiosInstance.post(
        `/checkout/payment`,
        {
          items: cart.products
        }
      );

      window.location.href = data.url;
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
      // dispatch(resetCart({type: "DESTROY"}))
      resetStore()
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);


  return (
    <div>
      <NavBar />
      { message ? (
        <Message message={message} />
      ) : (
        <section className="h-100 py-5">
        <div className="container py-5">
          <h2 className="mx-3">
            <strong>Shopping Bag</strong>
          </h2>

          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4 border-0">
                {cart.quantity === 0 ? (
                  <h5 className="m-auto"> your bag is empty </h5>
                ) : (
                  cart.products.map((product, index) => (
                    <CartItem
                      item={product}
                      key={product._id + index}
                      index={index}
                    />
                  ))
                )}
              </div>
            </div>

            {/* --- Summary ---*/}
            <div className="col-md-4">
              <div className="card mb-4 border-black">
                <div className="card-body">
                  <ul className="list-group list-group-flush mt-2 list-group-mine">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2">
                      Total items
                      <span>{cart.quantity}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2">
                      Subtotal
                      <span>${cart.total}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-2">
                      Shipping
                      <span>$0.00</span>
                    </li>
                    {/* <li className="list-group-item d-flex justify-content-between align-items-center border-bottom border-light px-0 pb-4">
                      Tax Total
                      <span>${taxTotal.toFixed(2)}</span>
                    </li> */}
                    <li className="list-group-item d-flex justify-content-between align-items-center border-bottom border-light px-0 py-4 mb-0">
                      <strong>Estimated Total</strong>
                      <span>
                        <strong>${cart.total.toFixed(2)}</strong>
                      </span>
                    </li>
                  </ul>
                  <div className="d-grid mb-2">
                      <button
                        type="button"
                        className="btn btn-outline-dark fw-bold w-100"
                        onClick={handleCheckout}
                        disabled={cart.quantity === 0}
                      >
                        CHECKOUT
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
      <Footer />
    </div>
  );
};
export default Cart;
