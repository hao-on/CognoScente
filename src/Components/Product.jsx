import "./Style/Product.css";
import { Link } from "react-router-dom";
const Product = ({ item }) => {
  return (
    <div className="card p-3 border-0 bg-transparent card-custom">
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
        <div
          className="d-flex align-items-center justify-content-center mb-3"
          style={{
            width: "100%",
            height: "500px",
            color: "white",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${item.img})`,
            borderRadius: "25px",
            boxShadow: "5px 10px 10px #bbbb",
          }}
        />
      </Link>
      <div className="product-details mx-3 text-center">
        <h5 className="mb-1">
          <strong>{item.title}</strong>
        </h5>
        <p className="mb-2" style={{ color: "grey", fontWeight: "600" }}>
          {item.brand}
        </p>
        <h5 className="buttons mb-0">
          <strong>${item.price}</strong>
        </h5>
      </div>
    </div>
  );
};

export default Product;
