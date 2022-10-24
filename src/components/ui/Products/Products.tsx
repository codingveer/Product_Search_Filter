import { observer } from "mobx-react-lite";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductFilters from "./ProductFilters/ProductFilters";
import ProductList from "./ProductList";
import { useProductStore } from "../../../ContextProvider/ProductContext";

const Products:React.FC = () => {
  
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
