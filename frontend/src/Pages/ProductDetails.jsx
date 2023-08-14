import styled from "styled-components";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { useLocation, useParams } from "react-router-dom";
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
  const { id } = useParams()
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

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

  return (
    <Container style={{ backgroundColor: "white" }}>
      <NavBar />
      <div className="container-fluid m-0 p-0">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6">
            <img
              src={product.img}
              className="img-fluid d-block w-100 h-100"
              alt="Fragnance"
            ></img>
          </div>
          <div className="col-12 col-sm-6" align="center">
            <div
              id="productCarousel"
              class="carousel my-carousel carousel-dark slide"
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
              <div class="carousel-inner">
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
            </div>
          </div>
        </div>
      </div>
      <div class="custom-divider">Popular Choices</div>
      <Products isRandom={true}/>
      <div className="py-4"></div>
      <Footer />
    </Container>
  );
};

export default ProductDetails;