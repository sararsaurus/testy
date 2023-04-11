import axios from "axios";
import { useState, useEffect } from "react";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Home() {
  const [products, setProducts] = useState([]);

  const handleIndexProducts = () => {
    console.log("TESTING INDEX PRODUCTS");
    axios.get("http://localhost:3000/products.json").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  const handleCreateProduct = (params, successCallback) => {
    console.log("TEST HANDLE CREATE PRODUCT", params);
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      setProducts([...products, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexProducts, []);

  return (
    <div>
      <h1>Sara's Lab</h1>
      <Signup />
      <Login />
      <LogoutLink />
      <ProductsNew onCreateProduct={handleCreateProduct} />
      <ProductsIndex products={products} />
    </div>
  );
}
