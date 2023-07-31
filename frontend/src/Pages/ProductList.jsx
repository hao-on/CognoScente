import styled from "styled-components";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { mobile } from "../responsive";
import { banner } from "../data";
import Products from "../Components/Products";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Container = styled.div``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductBanner = ({ item }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-uppercase header-custom"
      style={{
        width: "100%",
        height: "450px",
        color: "white",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${item.img})`,
      }}
    >
      <h1 style={{ fontSize: "40px" }}>{item.title}</h1>
    </div>
  );
};

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [sort, setSort] = useState("newest");
  const item = banner.find(
    (element) => element.title === category.toUpperCase()
  );
  return (
    <Container>
      <NavBar />
      <ProductBanner item={item} key={item.id} />
      <FilterContainer>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(event) => setSort(event.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Ascending Price</Option>
            <Option value="desc">Descending Price</Option>
          </Select>
        </Filter>
      </FilterContainer>

      <Products category={category} sort={sort} />

      {/* <p className="mx-3 mt-4 mb-3" style={{ fontSize: "13" }}>
        {location.pathname}
      </p> */}
      <div className="divider d-flex align-items-center my-4 mx-4">
        <h2 className="text-center fw-bold mx-3 mb-0">Explore</h2>
      </div>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
