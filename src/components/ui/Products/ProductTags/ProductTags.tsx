import "./ProductTags.css";

const ProductTags = ({ tags }) => {
  return (
    <div className="product-tags">
      {tags.map((tag: string) => (
        <div key={tag} className="product-tag">
          {tag}
        </div>
      ))}
    </div>
  );
};

export default ProductTags;
