import React from "react";
import "./Style/Aside.css"

function Aside() {
  return (
      <div className="container-fluid p-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-4">
            <section>
              <img src="https://images.unsplash.com/photo-1633588565899-513cbea146cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80" alt=""/>
              <article>
                <div></div>
                <div></div>
                <div></div>
              </article>
            </section>
          </div>
          <div className="col-12 col-md-8">
              <blockquote className="blockquote my-5 my-md-auto">
                <p
                  className="aside-text"
                >
                  "Flesh…Petals…Thorns. Inspired by my private rose garden, Rose
                  Prick is a wild bouquet of beautiful breeds, a trilogy of rose
                  de mai, Turkish, and Bulgarian rose. Sharp and pristine, the
                  piercing prickles of the stems hook onto each other, bonding
                  their blooms in pink perfection."
                </p>
                <footer className="blockquote-footer fst-italic my-4">H, Founder of .Cognoscente</footer>
              </blockquote>
            </div>
          </div>
        </div>
          

          
  );
}

export default Aside;
