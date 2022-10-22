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
  const {showPDP} = useProductStore();
   return (
    <>
     <ProductFilters/>
    <div style={{display: "flex"}}>
       
        <ProductList/>
        {showPDP && <ProductDetails />}
    </div>
    </>
  );
};

export default observer(Products);
