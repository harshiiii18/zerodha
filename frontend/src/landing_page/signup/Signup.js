import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/register",
        formData
      );

      alert(response.data.message);

      window.location.href = "/login";
    } catch (error) {
      console.log(error);
      alert("Registration failed");
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div
        className="card shadow-sm border-0"
        style={{ width: "420px", borderRadius: "12px" }}
      >
        <div className="card-body p-5">
          <h2 className="text-center fw-bold mb-2">
            Create Account
          </h2>

          <p className="text-center text-muted mb-4">
            Sign up to start investing with Zerodha
          </p>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                Username
              </label>

              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter your username"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                Password
              </label>

              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Create a password"
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 py-2"
            >
              Create Account
            </button>

          </form>

          <hr className="my-4" />

          <p className="text-center mb-0">
            Already have an account?
            <a
              href="/login"
              className="text-decoration-none ms-2"
            >
              Login
            </a>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;

