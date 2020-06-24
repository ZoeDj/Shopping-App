import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Message from "./Message";

const Home = () => {
  return (
    <div className="homepage">
      <h1>
        <Message />
      </h1>
      <Link to="/item-list">
        <button>Shop</button>
      </Link>
    </div>
  );
};

export default Home;
