import { observer } from "mobx-react-lite";
import { useProductStore } from "../../../ContextProvider/ProductContext";
import ProductCard from "./ProductCard/ProductCard";

const ProductList = () => {
const { products } = useProductStore();
  
  return (
    <div className="products-list">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />})}
    </div>
  )
}

export default observer(ProductList);
