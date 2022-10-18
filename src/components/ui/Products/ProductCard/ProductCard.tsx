import "./ProductCard.css";
import ProductTags from "./../ProductTags/ProductTags";

const Product = ({ product, handleProductSelect, selectedProduct }) => {
  const { id, productName, tags, category } = product;

  let className = "product-card";

  if (selectedProduct === id) {
    className += " product-card-selected";
  }
  return (
    <div className={className} key={id} onClick={() => handleProductSelect(id)}>
      <div>
        <div className="product-name">{productName}</div>
        <ProductTags tags={tags} />
      </div>
      <div className="product-category">{category}</div>
    </div>
  );
};

export default Product;
