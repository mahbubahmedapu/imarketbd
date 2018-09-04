import React from "react";
import { connect } from "react-redux";
import { addProduct } from "../actions/Product";
import ProductForm from "./../components/ProductForm";

const AddProductPage = props => (
  <div>
    <h1>Add Product</h1>
    <ProductForm
      onSubmit={product => {
        props.dispatch(addProduct(product));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(AddProductPage);
