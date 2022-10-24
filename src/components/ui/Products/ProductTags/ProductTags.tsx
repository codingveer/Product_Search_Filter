import "./ProductTags.css";

interface tagsProps {
  tags:string[]
}
const ProductTags = ({ tags }:tagsProps) => {
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
