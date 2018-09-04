import React from "react";
import { connect } from "react-redux";
import ProductForm from "./ProductForm";
import { editProduct, removeProduct } from "../actions/Product";

const EditProductPage = props => {
  return (
    <div>
      <ProductForm
        product={props.product}
        onSubmit={product => {
          props.dispatch(editProduct(props.product.id, product));
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeProduct({ id: props.product.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    product: state.products.find(
      product => product.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditProductPage);
