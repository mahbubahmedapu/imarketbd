import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ id, name }) => (
  <ul className="list-group list-group-flush">
    <Link to={`/edit/${id}`}>
      <li className="list-group-item">{name}</li>
    </Link>
  </ul>
);
export default ListItem;
