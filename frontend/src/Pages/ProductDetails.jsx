import styled from "styled-components";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { useDispatch } from "react-redux";
import Products from "../Components/Products";
import { addProduct } from "../Redux/CartRedux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "./Style/ProductDetails.css";
const Container = styled.div``;

const ProductDetails = ({ item }) => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + productId);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [productId]);

  const handleQuantity = (type) => {
    if (type === "decrease") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity }));
  };

  console.log(quantity);
  return (
    <Container style={{ backgroundColor: "white" }}>
      <NavBar />
      <div className="container-fluid m-0 p-0">
        <div className="row justify-content-md-center">
          <div className="col-12 col-sm-6">
            <img
              src={product.img}
              className="img-fluid d-block w-100"
              alt="Fragnance"
            ></img>
          </div>
          <div className="col-12 col-sm-6 " align="center">
            <div
              id="productCarousel"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#productCarousel"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#productCarousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#productCarousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner h-100">
                <div class="carousel-item active">
                  <div class="my-item">
                    <div id="rating1" class="star-rating my-3" data-rating="3">
                      <span class="star px-1" data-value="1">
                        &#9733;
                      </span>
                      <span class="star px-1" data-value="2">
                        &#9733;
                      </span>
                      <span class="star px-1" data-value="3">
                        &#9733;
                      </span>
                      <span class="star px-1" data-value="4">
                        &#9733;
                      </span>
                      <span class="star px-1" data-value="5">
                        &#9733;
                      </span>
                    </div>
                    <p
                      className="mb-1"
                      style={{ color: "grey", fontWeight: "200" }}
                    >
                      #BestSeller
                    </p>
                    <h3 className="mb-2">
                      <strong>{product.title}</strong>
                    </h3>
                    <h5
                      className="mb-5"
                      style={{ color: "grey", fontWeight: "600" }}
                    >
                      {product.brand}
                    </h5>
                    <h3 className="mb-5" style={{ fontWeight: "800" }}>
                      ${" "}
                      {quantity > 0
                        ? parseFloat(product.price * quantity).toFixed(2)
                        : parseFloat(product.price).toFixed(2)}
                    </h3>

                    <h6 className="mb-3">Quantity</h6>
                    <div class="row align-items-top border mb-4 quantity-row">
                      <div class="col mt-1">
                        <RemoveIcon
                          fontSize="small"
                          onClick={() => handleQuantity("decrease")}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                      <div class="col">
                        <h4>{quantity}</h4>
                      </div>
                      <div class="col mt-1">
                        <AddIcon
                          fontSize="small"
                          onClick={() => handleQuantity("increase")}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>

                    <div className="py-4 d-grid mb-4 w-50">
                      <button
                        type="button"
                        className="btn btn-dark"
                        onClick={handleClick}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="my-item px-4">
                    <h3 className="mb-2">
                      <strong>About</strong>
                    </h3>

                    <blockquote className="blockquote mb-0">
                      <p
                        style={{
                          fontStyle: "italic",
                          color: "grey",
                          fontWeight: "400",
                        }}
                      >
                        {product.desc}
                      </p>
                      <footer className="blockquote-footer">
                        {product.brand}
                      </footer>
                    </blockquote>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="my-item">
                    <h4 className="mb-3">
                      <strong>Family</strong>
                    </h4>
                    <h5
                      style={{
                        color: "grey",
                        fontWeight: "400",
                      }}
                    >
                      {product.family}
                    </h5>
                    <p className="my-4">&#8258;</p>
                    <h4 className="mb-3">
                      <strong>Scent</strong>
                    </h4>
                    <h5
                      style={{
                        color: "grey",
                        fontWeight: "400",
                      }}
                    >
                      {product.scent}
                    </h5>
                    <p className="my-4">&#8258;</p>
                    <h4 className="mb-3">
                      <strong>Key Notes</strong>
                    </h4>
                    <h5
                      style={{
                        color: "grey",
                        fontWeight: "400",
                      }}
                    >
                      {product.notes}
                    </h5>
                  </div>
                </div>
              </div>
              {/* <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#productCarousel"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#productCarousel"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button> */}
            </div>

            {/* <div id="rating1" class="star-rating my-3" data-rating="3">
              <span class="star px-1" data-value="1">
                &#9733;
              </span>
              <span class="star px-1" data-value="2">
                &#9733;
              </span>
              <span class="star px-1" data-value="3">
                &#9733;
              </span>
              <span class="star px-1" data-value="4">
                &#9733;
              </span>
              <span class="star px-1" data-value="5">
                &#9733;
              </span>
            </div>
            <p className="mb-1" style={{ color: "grey", fontWeight: "200" }}>
              #BestSeller
            </p>
            <h3 className="mb-2">
              <strong>{product.title}</strong>
            </h3>
            <h5 className="mb-5" style={{ color: "grey", fontWeight: "600" }}>
              {product.brand}
            </h5>
            <h3 className="mb-5" style={{ fontWeight: "800" }}>
              ${" "}
              {quantity > 0
                ? parseFloat(product.price * quantity).toFixed(2)
                : parseFloat(product.price).toFixed(2)}
            </h3>

            <h6 className="mb-3">Quantity</h6>
            <div class="row w-25 align-items-top border mb-4">
              <div class="col mt-1">
                <AddIcon fontSize="small" />
              </div>
              <div class="col">
                <h4>1</h4>
              </div>
              <div class="col mt-1">
                <RemoveIcon fontSize="small" />
              </div>
            </div>

            <div className="py-4 d-grid mb-4 w-50">
              <button
                type="button"
                className="btn btn-dark"
                onClick={handleClick}
              >
                ADD TO CART
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="divider d-flex align-items-center my-4 mx-4">
        <h2 className="text-center fw-bold mx-3 mt-5 mb-0">
          Most Popular Choices
        </h2>
      </div>
      <Products />
      <div className="py-4"></div>
      <Footer />
    </Container>
  );
};

export default ProductDetails;

{
  /* <div className="d-grid mb-4 w-25">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(event) => setQuantity(event.target.value)}
              >
                <option value="0">Quantity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div> */
}

{
  /* <div className="card my-4">
              <div className="card-header">About the Fragnance</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p
                    className="card-text"
                    style={{
                      fontStyle: "italic",
                      fontWeight: "600",
                    }}
                  >
                    {product.desc}
                  </p>
                  <footer className="blockquote-footer">{product.brand}</footer>
                </blockquote>
              </div>
            </div> */
}
