import "./ProductDetails.css";
import ProductTags from "./../ProductTags/ProductTags";
import { products } from "./../../../../data/products";

const getProductById = (id: Number) => {
  return products.filter(({ id: pId }) => id === pId)[0];
};

const ProductDetails = ({ selectedProduct }) => {
  if (!selectedProduct) return null;

  const { productName, tags, manufacturerUrl, description, option1, option2 } =
    getProductById(selectedProduct);

  return (
    <div className="product-details">
      <div className="product-details-header">Product Details</div>
      <div className="product-details-body">
        <div className="product-details-name">{productName}</div>
        <ProductTags tags={tags} />
        <div className="external-link">
          <a href={manufacturerUrl} target="_blank">
            Go to Manufacturer
          </a>
        </div>
        <div className="product-description">
          {description && description[0]}
        </div>
        {option1 && (
          <div className="product-option">
            <div>
              <input type="radio" />
              {option1}
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        )}
        {option2 && (
          <div className="product-option">
            <div>
              <input type="radio" />
              {option2}
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
