import React from "react";
import Layout from "../../components/Layout";
import ProductsGrid from "./ProductsGrid";

const Store = () => {
  return (
    <Layout title="Store" description="This is the Store page">
      <div>
        <div className="text-center mt-5">
          <h1>Mozantech Store</h1>
          <p>This is the Mock Store Exercise Page.</p>
        </div>
        <ProductsGrid />
      </div>
    </Layout>
  );
};

export default Store;
