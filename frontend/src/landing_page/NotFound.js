import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-1 fw-bold">404</h1>
      <h2>Page Not Found</h2>
      <p className="text-muted">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

       <Link to="/">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Go Home
          </button>
        </Link>
    </div>
  );
}

export default NotFound;



