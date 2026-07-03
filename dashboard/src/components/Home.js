import React, { useEffect, useState } from "react";
import axios from "axios";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (!token) {
      const params = new URLSearchParams(window.location.search);
      token = params.get("token");

      if (token) {
        localStorage.setItem("token", token);
      }
    }

    if (!token) {
      window.location.href = "https://zerodha-ruddy.vercel.app/login";
      return;
    }

    axios
      .get("https://zerodha-0pzb.onrender.com/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!localStorage.getItem("token")) {
    return null;
  }

  return (
    <>
      <TopBar user={user} />
      <Dashboard user={user} />
    </>
  );
};

export default Home;