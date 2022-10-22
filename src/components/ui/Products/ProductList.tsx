import ProductCard from "./ProductCard/ProductCard";
import { useProductStore } from "../../../ContextProvider/ProductContext";
import { observer } from "mobx-react-lite";

const ProductList = () => {
  const { products=[], selectedProductId } = useProductStore();
  
  return (
    <div className="products-list">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} active={selectedProductId===product.id} />})}
    </div>
  )
}

export default observer(ProductList);
