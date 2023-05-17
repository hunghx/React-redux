import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function Cart() {
  const listCart = useSelector((state) => state.cart.listCart);
  let size = listCart.length;
  let total = listCart.reduce(
    (t, cart) => t + cart.pro.price * cart.quantity,
    0
  );
  let notify = useSelector((state) => state.cart.notify);
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th width="4%">#</th>
                <th>Name</th>
                <th width="15%">Price</th>
                <th width="4%">Quantity</th>
                <th width="20%">Subtotal</th>
                <th width="25%">Action</th>
              </tr>
            </thead>
            <tbody id="my-cart-body">
              {/* CART BODY */}
              {listCart.map((cart, index) => (
                <CartItem key={cart.id} cart={cart} index={index} />
              ))}
            </tbody>
            <tfoot id="my-cart-footer">
              {/* CART FOOTER */}
              {size == 0 ? (
                <tr>
                  <th colSpan={6}>Empty product in your cart</th>
                </tr>
              ) : (
                <tr>
                  <td colSpan={4}>
                    There are <b>{size}</b> items in your shopping cart.
                  </td>
                  <td colSpan={2} className="total-price text-left">
                    {total} USD
                  </td>
                </tr>
              )}
            </tfoot>
          </table>
        </div>
      </div>
      <div className={notify.color} role="alert" id="mnotification">
        {notify.message}
      </div>
    </div>
  );
}
