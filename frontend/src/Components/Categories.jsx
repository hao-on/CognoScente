import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { Link, useLocation } from "react-router-dom";

const Categories = () => {
  return (
    <div className="container-fluid text-center my-4">
      <div className="row g-3">
        {categories.map((item) => (
          <div class="col-12 col-sm-4">
            <Link
              to={`/products/${item.title.toLowerCase()}`}
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
              <CategoryItem item={item} key={item.id} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
