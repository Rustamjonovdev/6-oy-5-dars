import React from "react";
import { Link } from "react-router-dom";

function Product({ id, title, price, thumbnail }) {
  return (
    <Link to={`/about/${id}`}>
      <div className="flex flex-col gap-1">
        <img src={thumbnail} alt="" className="h-full w-full" />
        <h3 className="text-3xl">{title}</h3>
        <p>Price: ${price}</p>
      </div>
    </Link>
  );
}

export default Product;
