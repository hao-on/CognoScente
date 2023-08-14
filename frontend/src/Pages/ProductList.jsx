import styled from "styled-components";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import { mobile } from "../responsive";
import { banner } from "../data";
import Products from "../Components/Products";
import { useLocation, useParams } from "react-router-dom";
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

const ProductBanner = () => {
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
        backgroundImage: `url("https://images.unsplash.com/photo-1504717955550-7a8803776aaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80")`,
      }}
    >
      <h1 style={{ fontSize: "40px" }}>Products</h1>
    </div>
  );
};

const categories = new Set(['men', 'women', 'unisex'])

const ProductList = () => {
  const { query } = useParams()
  const [category, setCategory] = useState(() => {
    return categories.has(query) ? query : ''
  })
  const [family, setFamily] = useState(() => {
    return !categories.has(query) ? query : ''
  })
  const [sort, setSort] = useState("newest");
  const [categoryChecked, setCategoryChecked] = useState([]);
  const [familyChecked, setFamilyChecked] = useState([]);

  useEffect(() => {
    if(categories.has(query)){
      setCategory(query)
      setFamily('')
    }
    else{
      setCategory('')
      setFamily(query)
    }
  }, [query]);

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    const value = event.target.value
    const isCategory = categories.has(value)

    let updatedList = isCategory ? [...categoryChecked] : [...familyChecked];
    if (event.target.checked) {
      updatedList.push(event.target.value);
    } else {
      updatedList.splice(updatedList.indexOf(event.target.value), 1);
    }
    return isCategory ? setCategoryChecked(updatedList) : setFamilyChecked(updatedList);
  };

  const handleSearch = () => {
    if(categoryChecked){
      setCategory(categoryChecked.join(','))
    }
    if(familyChecked){
      setFamily(familyChecked.join(','))
    }
  }

  return (
    <Container>
      <NavBar />
      <ProductBanner />
      <div class="container-fluid my-5">
        <div class="row justify-content-end align-items-center text-right">
          <div class="col-4 col-md-2">
            <select class="form-select" aria-label=".form-select-lg example" onChange={(event) => setSort(event.target.value)} style={{border: "1px solid black"}}>
              <option value="newest">Latest</option>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <div class="col-2 col-md-1">
            <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#filterModal">
              Filter
            </button>
          </div>
        </div>
      </div>

      <div class="modal fade" id="filterModal" tabindex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Filter</h5>
              {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            <div class="modal-body">
              <h5 class="modal-title">Gender</h5>
              <div class="list-group py-2">
                <label class="list-group-item" id="men" >
                  <input class="form-check-input me-2" type="checkbox" value="men" onChange={handleCheck} checked={query === 'men'}/>
                  Men
                </label>
                <label class="list-group-item">
                  <input class="form-check-input me-2" type="checkbox" value="women" onChange={handleCheck} checked={query === 'women'}/>
                  Women
                </label>
                <label class="list-group-item">
                  <input class="form-check-input me-2" type="checkbox" value="unisex" onChange={handleCheck} checked={query === 'unisex'}/>
                  Unisex
                </label>
              </div>
              <h5 class="modal-title mt-3">Scent</h5>
              <div class="list-group py-2">
                <label class="list-group-item">
                  <input class="form-check-input me-2" type="checkbox" value="warm" onChange={handleCheck} checked={query === 'warm'}/>
                  Warm & Spicy
                </label>
                <label class="list-group-item">
                  <input class="form-check-input me-2" type="checkbox" value="earthy" onChange={handleCheck} checked={query === 'earthy'}/>
                  Earthy & Woody
                </label>
                <label class="list-group-item">
                  <input class="form-check-input me-2" type="checkbox" value="floral" onChange={handleCheck} checked={query === 'floral'}/>
                  Floral
                </label>
                <label class="list-group-item">
                  <input class="form-check-input me-2" type="checkbox" value="fresh" onChange={handleCheck} checked={query === 'fresh'}/>
                  Fresh
                </label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
      </div>

      <Products category={category} family={family} sort={sort} isRandom={false}/>
      <Footer />
    </Container>
  );
};

export default ProductList;
