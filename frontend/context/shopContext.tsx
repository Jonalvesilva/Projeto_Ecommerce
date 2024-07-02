"use client";
import { createContext } from "react";
import all_products from "@/constants/all_products";

export const ShopContext = createContext(null);

const ShopContextProvider = (props: any) => {
  const contextValue: any = { all_products };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
