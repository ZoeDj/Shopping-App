import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Message from "./Message";
import Counter from "./Counter";

const Home = () => {
  return (
    <div className="homepage">
      <h1>
        <Message />
      </h1>
      <Link to="/item-list">
        <button>Shop</button>
      </Link>
      <Counter />
    </div>
  );
};

export default Home;
