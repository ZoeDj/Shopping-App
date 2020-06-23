import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Home = () => {
  return (
    <div className="homepage">
      <h1>Welcome to our online store</h1>
      <Link to="/item-list">
        <button>Shop</button>
      </Link>
    </div>
  );
};

export default Home;
