import React from "react";
import items from "../data";
import { Link } from "react-router-dom";
import "../index.css";

const ItemList = () => {
  return (
    <div className="list">
      {items.map((item) => (
        <div className="item-card" key={item.id}>
          <Link to={`/item-list/${item.id}`}>
            <img className="item-img" src={item.imageUrl} alt={item.name} />
            <h4>{item.name}</h4>
            <h6>${item.price}</h6>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
