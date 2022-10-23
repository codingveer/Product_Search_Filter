import ProductDetails from "./ProductDetails/ProductDetails";
import ProductFilters from "./ProductFilters/ProductFilters";
import ProductList from "./ProductList";
import { useProductStore } from "../../../ContextProvider/ProductContext";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { useState } from "react";

type ProductType =  {
  id: number;
  productName: string;
  tags: string[];
  category: string;
  manufacturerUrl: string;
  description: string[];
  option1: string;
  option2: string;
}
const Products = () => {
  const {showPDP, getProductData} = useProductStore();
   return (
    <>
     <div style={{display: "flex",flexDirection: "row"}}>
      <div style={{minWidth:"1152px"}}>
        <ProductFilters/> 
        {getProductData && <ProductList />}
      </div>
      <div>
        {showPDP && <ProductDetails />}
      </div>
      </div> 
    </>
  );
};

export default observer(Products);
