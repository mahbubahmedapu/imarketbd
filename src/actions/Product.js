//export const addProduct = product => ({ type: "ADD_PRODUCT", data: product });
import uuid from "uuid";
export const addProduct = ({
  name = "",
  price = 0,
  image = "",
  category = ""
} = {}) => ({
  type: "ADD_PRODUCT",
  data: {
    id: uuid(),
    name,
    price,
    image,
    category
  }
});
// REMOVE_PRODUCT
export const removeProduct = ({ id } = {}) => ({
  type: "REMOVE_PRODUCT",
  id
});

// EDIT_PRODUCT
export const editProduct = (id, updates) => ({
  type: "EDIT_PRODUCT",
  id,
  updates
});
