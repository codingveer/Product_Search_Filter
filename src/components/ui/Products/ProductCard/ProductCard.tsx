import "./ProductCard.css";
import ProductTags from "./../ProductTags/ProductTags";
import { useProductStore } from "../../../../ContextProvider/ProductContext";
import { observer } from "mobx-react-lite";
import { ProductType } from './../../../../../data/productTypes'

interface IProps {
  product: ProductType;
}
const Product = ({ product }: IProps) => {
  const { id, productName, tags, category } = product;
  let { setProductDetails, selectedProductId } = useProductStore();
  let className = "product-card";

  const setSelectedProduct = (id: number) => {
    selectedProductId = id;
    setProductDetails(id);
  }

  return (
    <div className={`${className} ${(selectedProductId === id) && "product-card-selected"}`} key={id} onClick={() => setSelectedProduct(id)}>
      <div>
        <div className="product-name">{productName}</div>
        <ProductTags tags={tags} />
      </div>
      <div className="product-category">{category}</div>
    </div>
  );
};

export default observer(Product);
