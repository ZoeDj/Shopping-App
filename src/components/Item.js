import React from "react";
import items from "../data";
import { useParams } from "react-router-dom";

const Item = (props) => {
  const { itemID } = useParams();
  // We use an interpolated string change the number id to a string
  const shopItem = items.find((item) => itemID === `${item.id}`);

  return (
    <div>
      <img src={shopItem.imageUrl} alt={shopItem.name} />
      <h2>{shopItem.name}</h2>
      <h4>${shopItem.price}</h4>
      <p className="item-description">{shopItem.description}</p>
    </div>
  );
};

export default Item;
