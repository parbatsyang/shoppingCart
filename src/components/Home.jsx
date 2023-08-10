import React, { useEffect, useState } from "react";
import axios from "axios";
import Carts from "./Carts";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-auto max-w-[1320px]">
      {products.map((item) => {
        return (
          <div key={item.id}>
            <Carts item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
