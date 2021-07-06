import React, { createContext, useState } from "react";
import { partsProducts } from "../services/parts";
export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products] = useState(partsProducts);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
