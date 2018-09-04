import React from "react";

const initialState = [];
const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.data];

    case "REMOVE_PRODUCT":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_PRODUCT":
      return state.map(product => {
        if (product.id === action.id) {
          return {
            ...product,
            ...action.updates
          };
        } else {
          return product;
        }
      });
    default:
      return state;
  }
};

export default productsReducer;
