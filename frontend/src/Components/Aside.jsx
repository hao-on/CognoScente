import React from "react";
import "./Style/Aside.css"

function Aside() {
  return (
      <div className="container-fluid p-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-4">
            <section className="aside-section">
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
                  "Tick...Tick...Tick... Inspired by my passion for fragrance, CognoScente is not a usual fragrance store. Besides bringing you our favorite perfumes in a variety of scents, we also want to create a community to connect with every cognoscenti and allow everyone to share their passions."
                </p>
                <footer className="blockquote-footer fst-italic my-4">H, Founder of .Cognoscente</footer>
              </blockquote>
            </div>
          </div>
        </div>
          

          
  );
}

export default Aside;
