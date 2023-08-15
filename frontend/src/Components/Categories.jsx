import './Style/Categories.css'
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div class="categoryGrid">
      <div class="container">
      <Link
          to={`/products/men`}
          className="men-container"
          onClick={() => {
              window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
              });
          }}
      >
          {/* <div class="column"></div> */}
        </Link>
        <div class="column">
          <Link
            to={`/products/unisex`}
            className="unisex-container"
            onClick={() => {
                window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
                });
            }}
          >
            {/* <div class="row"></div> */}
            </Link>
          
          <div class="row">
            <div>
              <h6>
                Category
              </h6>
            </div>
            <Link
              to={`/products/women`}
              className="women-container"
              onClick={() => {
                  window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                  });
              }}
            >
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
