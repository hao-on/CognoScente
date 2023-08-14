import { useEffect, useState } from "react";
import Product from "./Product";
import { axiosInstance } from "../config";

const pickRandom = (products) => {
  var shuffled = products.sort(function () {
    return 0.5 - Math.random();
  });
  var selected = shuffled.slice(0, 4);
  return selected;
};

const Products = ({ category, family, sort, isRandom }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let query = '/products'

    if(category && family){
      query += `?category=${category}&family=${family}`
    }
    else if(category){
      query += `?category=${category}`
    }
    else if(family){
      query += `?family=${family}`
    }

    const getProducts = async () => {
      try {
        const res = await axiosInstance.get(query)
        setProducts(res.data)
      } catch (err) {}
    };
    getProducts();
  }, [category, family]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

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

  return (
    <div className="container-fluid">
      <div className="row gx-5 gy-2">
        {!isRandom
          ? filteredProducts.map((item) => (
              <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                <Product item={item} key={item.id} />
              </div>
            ))
          : pickRandom(products)
              .map((item) => (
                <div className="col-12 col-sm-6 col-md-4 col-xl-3">
                  <Product item={item} key={item.id} />
                </div>
              ))}
      </div>
    </div>
  );
};

export default Products;
