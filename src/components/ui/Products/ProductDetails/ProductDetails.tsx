import { observer } from "mobx-react-lite";
import React from "react";
import ProductTags from "./../ProductTags/ProductTags";
import { useProductStore } from "../../../../ContextProvider/ProductContext";
import "./ProductDetails.css";


const ProductDetails: React.FunctionComponent = () => {
  const { selectedProduct, showPDP } = useProductStore();
  const { productName, tags = [], manufacturerUrl, description, option1, option2 } = selectedProduct;

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
              <input type="radio" name="product-option" />
              {option1}
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        )}
        {option2 && (
          <div className="product-option">
            <div>
              <input type="radio" name="product-option" />
              {option2}
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </div>
        )}
      </div>
    </div>
  );
};

export default observer(ProductDetails);
