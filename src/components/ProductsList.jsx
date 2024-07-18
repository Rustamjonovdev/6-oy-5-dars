import React from "react";
import Product from "./Product";

function ProductsList({ products }) {
  return (
    <>
      {products.products.map((product) => {
        const { title, id, description, thumbnail, price } = product;
        return (
          <div key={id} className="felx p-7 m-5 border-black-50">
            <Product
              key={id}
              title={title}
              description={description}
              id={id}
              thumbnail={thumbnail}
              price={price}
            />
          </div>
        );
      })}
    </>
  );
}

export default ProductsList;
