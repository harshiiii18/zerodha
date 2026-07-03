import React from "react";

function RightSection({
  ProductName,
  ProductDescription,
  LearnMore,
  ImageURL,
}) {
  return (
    <div className="congtainer mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5 ">
          <h1>{ProductName}</h1>
          <p>{ProductDescription}</p>
          <div>
            <a href={LearnMore} style={{ textDecoration: "none" }}>
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={ImageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
