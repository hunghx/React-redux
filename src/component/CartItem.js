import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { change_quantity, delete_cart } from "../redux/actions";

export default function CartItem({ cart, index }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const handleChange = () => {
    dispatch(change_quantity(cart.id, quantity));
  };

  useEffect(() => {
    setQuantity(cart.quantity);
  }, [cart.quantity]);
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{cart.pro.name}</td>
      <td>{cart.pro.price} USD</td>
      <td>
        <input
          name="cart-item-quantity-1"
          type="number"
          onChange={(e) => setQuantity(+e.target.value)}
          value={quantity}
          min={1}
        />
      </td>
      <td>
        <strong>{quantity * cart.pro.price} USD</strong>
      </td>
      <td>
        <a
          className="label label-info update-cart-item"
          onClick={handleChange}
          data-product
        >
          Update
        </a>
        <a
          className="label label-danger delete-cart-item"
          onClick={() => dispatch(delete_cart(cart.id))}
          data-product
        >
          Delete
        </a>
      </td>
    </tr>
  );
}
