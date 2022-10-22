import { useState } from "react";
import "./ProductCard.css";
import ProductTags from "./../ProductTags/ProductTags";
import { useProductStore } from "../../../../ContextProvider/ProductContext";
import { observer } from "mobx-react-lite";
const Product = ({ product, active }) => {
  const { id, productName, tags, category } = product;
  let {setProductDetails}= useProductStore();
  const [selectedProduct1, setSelectedProduct1] = useState()
  let className = "product-card";

  const setSelectedProduct = (id) => { 
    setProductDetails(id);
    setSelectedProduct1("product-card-selected");
  } 
  
  return (
    <div className={`${className} ${active && selectedProduct1}`} key={id} onClick={() => setSelectedProduct(id)}>
      <div>
        <div className="product-name">{productName}</div>
        <ProductTags tags={tags} />
      </div>
      <div className="product-category">{category}</div>
    </div>
  );
};

export default observer(Product);
