import React from "react";

function Aside() {
  return (
    <div className="card mx-auto my-5 w-75">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1633588565899-513cbea146cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
            className="img-fluid"
            alt="..."
          />
        </div>
        <div className="col-md-8 my-auto">
          <div
            className="card-body"
            style={{
              textAlign: "center",
            }}
          >
            <h5 className="card-title"></h5>
            <blockquote className="blockquote mb-0">
              <p
                className="card-text"
                style={{
                  fontStyle: "italic",
                  fontWeight: "600",
                }}
              >
                "Love...Passion...Obsession, three worlds that represent a
                CognoScenti in the world of perfume. CognoScente brings you the
                best colognes collection for every gender and aims to create a
                community where people share the passion for FRAGRANCE. Welcome
                to .CognoScente world..."
              </p>
              <footer className="blockquote-footer">X</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside;
