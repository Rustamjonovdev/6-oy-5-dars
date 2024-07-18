import React from "react";
import { useState, useEffect } from "react";

// hooks
import { useParams } from "react-router-dom";

function About() {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/product/" + id)
      .then((data) => data.json())
      .then((product) => setProduct(product))
      .catch((error) => console.log(error));
  }, []);

  console.log(product);
  const { id } = useParams();
  return (
    <>
      {product && (
        <div className="flex flex-col text-center mt-20 m-auto w-[700px] items-center  gap-3 m-10 p-4 bg-white text-black rounded-xl ">
          <h3 className="text-5xl">{product.title}</h3>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-25 w-25 text-center"
          />
          <p className="text-2xl">
            <span className="font-bold">Desc:</span> {product.description}
          </p>

          <p className="text-2xl">
            <span className="font-bold">Price:</span>${product.price}
          </p>
          <p className="text-2xl">
            <span className="font-bold">Category:</span> {product.category}
          </p>
          <p className="text-2xl">
            <span className="font-bold">Rating:</span> {product.rating}
          </p>
        </div>
      )}
    </>
  );
}

export default About;
