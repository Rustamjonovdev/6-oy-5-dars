import { useState, useEffect } from "react";

// components
import ProductsList from "../components/ProductsList";

function Home() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("https://dummyjson.com/product")
      .then((data) => data.json())
      .then((products) => setProducts(products))
      .catch((error) => console.log(error));
  }, []);
  console.log(products);
  return (
    <>
      {products && (
        <div className="grid grid-cols-3">
          <ProductsList products={products} />
        </div>
      )}
    </>
  );
}

export default Home;
