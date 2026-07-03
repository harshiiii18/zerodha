import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
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
        "http://localhost:3001/login",
        formData
      );

      localStorage.setItem("token", response.data.token);

      alert("Login successful");

      const token = response.data.token;

      window.location.href = `http://localhost:3002?token=${token}`;
    } catch (error) {
      alert("Invalid email or password");
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
            Welcome Back
          </h2>

          <p className="text-center text-muted mb-4">
            Login to continue to your account
          </p>

          <form onSubmit={handleSubmit}>

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
                placeholder="Enter your password"
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 py-2"
            >
              Login
            </button>

          </form>

          <hr className="my-4" />

          <p className="text-center mb-0">
            Don't have an account?
            <a
              href="/signup"
              className="text-decoration-none ms-2"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;



