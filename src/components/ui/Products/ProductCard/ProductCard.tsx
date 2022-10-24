import { useState } from "react";
import "./ProductCard.css";
import ProductTags from "./../ProductTags/ProductTags";
import { useProductStore } from "../../../../ContextProvider/ProductContext";
import { observer } from "mobx-react-lite";

interface ProductType {
	id: number;
	productName: string;
	tags: string[];
	category: string;
	manufacturerUrl: string;
	description: string[];
	option1?: string | null;
	option2?: string | null;
};
interface IProps {
  product:ProductType;
  active:boolean;
}
const Product = ({ product, active }:IProps) => {
  const { id, productName, tags, category } = product;
  let {setProductDetails}= useProductStore();
  const [selectedProductStyle, setSelectedProductStyle] = useState("")
  let className = "product-card";

  const setSelectedProduct = (id:number) => { 
    setProductDetails(id);
    setSelectedProductStyle("product-card-selected");
  } 
  
  return (
    <div className={`${className} ${active && selectedProductStyle}`} key={id} onClick={() => setSelectedProduct(id)}>
      <div>
        <div className="product-name">{productName}</div>
        <ProductTags tags={tags} />
      </div>
      <div className="product-category">{category}</div>
    </div>
  );
};

export default observer(Product);
