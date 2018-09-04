// src/js/components/List.js
import React from "react";
import { connect } from "react-redux";
import ListItem from "./ListItem";

const mapStateToProps = state => {
  return { products: state.products };
};
const ConnectedList = props => (
  <div>
    <h2>List of Products</h2>
    {props.products.map(product => {
      return <ListItem key={product.id} {...product} />;
    })}
  </div>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;
