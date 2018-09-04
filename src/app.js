import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import productsReducer from "./reducers/productReducer";
import AppRouter from "./routers/AppRouter";

const store = createStore(
  combineReducers({
    products: productsReducer
  })
);

store.subscribe(() => {
  console.log("Current State: ", store.getState());
});

/* store.dispatch(
  addProduct({
    name: "Apple",
    price: 100,
    image: "https://ibb.co/dVyQZe",
    category: "Fruits"
  })
); */

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
