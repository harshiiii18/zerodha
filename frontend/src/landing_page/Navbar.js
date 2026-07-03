import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const token = localStorage.getItem("token");
  const navigate = useNavigate();


  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };


  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFFF" }}
    >

      <div className="container p-2">

        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "25%" }}
            alt="logo"
          />
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">


          <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            {
              token ? (

                <>
                  <li className="nav-item">
                    <a href={`http://localhost:3002?token=${localStorage.getItem("token")}`}
                      className="nav-link active" 
                      
                    >
                      Dashboard
                    </a>
                  </li>

                  <li className="nav-item">

                    <button
                      className="nav-link active btn"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>

                  </li>

                </>

              ) : (

                <>

                  <li className="nav-item">
                    <Link 
                      className="nav-link active" 
                      to="/signup"
                    >
                      Signup
                    </Link>
                  </li>


                  <li className="nav-item">
                    <Link 
                      className="nav-link active" 
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>

                </>

              )
            }


            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link active" to="/product">
                Product
              </Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>


          </ul>


        </div>

      </div>

    </nav>
  );
}

export default Navbar;