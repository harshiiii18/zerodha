import React from "react";

function Pricing() {
  return (
    <div className="container">
      <div className="row p-3 mx-5">
        <div className="col-4 mt-2 ">
          <h1 className="mb-3 fs-2 ">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{textDecoration:"none"}}>See Pricing{" "}<i class="fa fa-arrow-right" aria-hidden="true"></i></a>
          </div>
        <div className="col-2"></div>
        <div className="col-6  mb-5">
            <div className="row text-center">
              <div className="col p-3 border">
                <h1 className="mb-3">{"\u20B9"}0</h1>
                <p>Free equity delivery and<br/> direct mutual funds</p>
              </div>
              <div className="col p-3 border ">
                <h1 className="mb-3">{"\u20B9"}20</h1>
                <p>Intraday and F&0</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
