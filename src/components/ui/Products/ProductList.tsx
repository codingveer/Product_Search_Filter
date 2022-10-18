import ProductCard from "./ProductCard/ProductCard";

const ProductList = ({ handleProductSelect, products, selectedProduct }) => {
  return (
    <div className="products-list">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            handleProductSelect={handleProductSelect}
            selectedProduct={selectedProduct}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
