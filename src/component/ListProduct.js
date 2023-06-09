import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

export default function ListProduct() {
  const listProduct = useSelector((state) => state.cart.listProduct);
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h1 className="panel-title">List Products</h1>
        </div>
        <div className="panel-body" id="list-product">
          {/* PRODUCT : START */}
          {listProduct.map((pro) => (
            <Product key={pro.id} pro={pro} />
          ))}

          {/* PRODUCT : END */}
        </div>
      </div>
    </div>
  );
}
