import { useEffect, useState } from "react";
import Product from "./Product";
import { axiosInstance } from "../config";

const pickRandom = (products) => {
  var shuffled = products.sort(function () {
    return 0.5 - Math.random();
  });
  var selected = shuffled.slice(0, 3);
  return selected;
};

const Products = ({ category, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axiosInstance.get(
          category
            ? `/products?category=${
                category.charAt(0).toUpperCase() + category.slice(1)
              }`
            : "/products"
        );
        console.log(res.data)
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [category]);

  useEffect(() => {
    category && setFilteredProducts(products);
  }, [products, category]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  // var shuffled = products.sort(function () {
  //   return 0.5 - Math.random();
  // });
  // var selected = shuffled.slice(0, 3);
  // console.log(selected);

  return (
    <div className="container">
      <div className="row gx-5 gy-2">
        {category
          ? filteredProducts.map((item) => (
              <div className="col-sm-4">
                <Product item={item} key={item.id} />
              </div>
            ))
          : pickRandom(products)
              .slice(0, 3)
              .map((item) => (
                <div className="col-sm-4">
                  <Product item={item} key={item.id} />
                </div>
              ))}
      </div>
    </div>
  );
};

export default Products;
