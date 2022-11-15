import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import "./Style/Cart.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const taxTotal = parseFloat(cart.total * 1.0775);
  const shippingCost = 10;
  const total = taxTotal + shippingCost;
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success", {
          state: {
            stripeData: res.data,
            products: cart,
          },
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, navigate, cart]);

  return (
    <div>
      <NavBar />
      <section className="h-100 py-5">
        <div className="container py-5">
          <h2 className="mx-3">
            <strong>Shopping Bag</strong>
          </h2>

          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="mt-4" />
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

                <div className="mb-5" />
              </div>
            </div>

            {/* --- Summary ---*/}
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body gradient-custom">
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
                      <span>$10.00</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-bottom border-light px-0 pb-4">
                      Tax Total
                      <span>${taxTotal.toFixed(2)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-bottom border-light px-0 py-4 mb-0">
                      <strong>Estimated Total</strong>
                      <span>
                        <strong>${total.toFixed(2)}</strong>
                      </span>
                    </li>
                  </ul>
                  <div className="border-bottom border-light mb-4">
                    <div className="d-flex  justify-content-between px-0 py-4 ">
                      <div className="form-floating flex-fill">
                        <input
                          type="text"
                          className="form-control bg-transparent text-white"
                          id="floatingInput"
                          placeholder="ac12cd34"
                        />
                        <label for="floatingInput" style={{ color: "white" }}>
                          Promote Code
                        </label>
                      </div>
                      <button
                        type="button"
                        className="btn btn-outline-light btn-me ms-3 py-0"
                      >
                        APPLY
                      </button>
                    </div>
                  </div>
                  <div className="d-grid mb-2">
                    <StripeCheckout
                      name=".cognoscente"
                      image="https://images.unsplash.com/photo-1633588565899-513cbea146cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
                      billingAddress
                      shippingAddress
                      description={`Your total is $${cart.total}`}
                      amount={cart.total * 100}
                      token={onToken}
                      stripeKey={KEY}
                    >
                      <button
                        type="button"
                        className="btn btn-outline-warning w-100"
                      >
                        SECURE CHECKOUT
                      </button>
                    </StripeCheckout>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

// const Cart = () => {
//   return (
//     <Container>
//       <NavBar />
//       <Wrapper>
//         <Title>YOUR BAG</Title>
//         <Top>
//           <TopButton>CONTINUE SHOPPING</TopButton>
//           <TopTexts>
//             <TopText>Shopping Bag(2)</TopText>
//             <TopText>Your Wishlist (0)</TopText>
//           </TopTexts>
//           <TopButton type="filled">CHECKOUT NOW</TopButton>
//         </Top>
//         <Bottom>
//           <Info>
// <Product>
//   <ProductDetail>
//     <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
//     <Details>
//       <ProductName>
//         <b>Product:</b> JESSIE THUNDER SHOES
//       </ProductName>
//       <ProductId>
//         <b>ID:</b> 93813718293
//       </ProductId>
//       <ProductColor color="black" />
//       <ProductSize>
//         <b>Size:</b> 37.5
//       </ProductSize>
//     </Details>
//   </ProductDetail>
//   <PriceDetail>
//     <ProductAmountContainer>
//       <Add />
//       <ProductAmount>2</ProductAmount>
//       <Remove />
//     </ProductAmountContainer>
//     <ProductPrice>$ 30</ProductPrice>
//   </PriceDetail>
// </Product>
//             <Hr />
//             <Product>
//               <ProductDetail>
//                 <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
//                 <Details>
//                   <ProductName>
//                     <b>Product:</b> HAKURA T-SHIRT
//                   </ProductName>
//                   <ProductId>
//                     <b>ID:</b> 93813718293
//                   </ProductId>
//                   <ProductColor color="gray" />
//                   <ProductSize>
//                     <b>Size:</b> M
//                   </ProductSize>
//                 </Details>
//               </ProductDetail>
//               <PriceDetail>
//                 <ProductAmountContainer>
//                   <Add />
//                   <ProductAmount>1</ProductAmount>
//                   <Remove />
//                 </ProductAmountContainer>
//                 <ProductPrice>$ 20</ProductPrice>
//               </PriceDetail>
//             </Product>
//           </Info>
//           <Summary>
//             <SummaryTitle>ORDER SUMMARY</SummaryTitle>
//             <SummaryItem>
//               <SummaryItemText>Subtotal</SummaryItemText>
//               <SummaryItemPrice>$ 80</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem>
//               <SummaryItemText>Estimated Shipping</SummaryItemText>
//               <SummaryItemPrice>$ 5.90</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem>
//               <SummaryItemText>Shipping Discount</SummaryItemText>
//               <SummaryItemPrice>$ -5.90</SummaryItemPrice>
//             </SummaryItem>
//             <SummaryItem type="total">
//               <SummaryItemText>Total</SummaryItemText>
//               <SummaryItemPrice>$ 80</SummaryItemPrice>
//             </SummaryItem>
//             <Button>CHECKOUT NOW</Button>
//           </Summary>
//         </Bottom>
//       </Wrapper>
//       <Footer />
//     </Container>
//   );
// };

export default Cart;
