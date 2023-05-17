import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../redux/actions";

export default function Product({ pro }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(add_to_cart({ pro, quantity }));
    setQuantity(1);
  };
  return (
    <div className="media product">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={pro.imageUrl} alt="charmander" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{pro.name}</h4>
        <p>{pro.description}</p>
        <input
          name="quantity-product-1"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
          min={1}
        />
        <a data-product={1} className="price" onClick={handleAdd}>
          {pro.price * quantity} USD
        </a>
      </div>
    </div>
  );
}
