import CategoryFilters from "./CategoryFilters";
import "./ProductFilters.css";

const ProductFilters = ({ filters, handleSearch, handleCategorySelection }) => {
  const { categories: selectedCategories, searchQuery } = filters;

  return (
    <div className="product-filters">
      <div className="product-filters-header">I'm looking for...</div>
      <div className="product-filters-body">
        <CategoryFilters
          selectedCategories={selectedCategories}
          handleCategorySelection={handleCategorySelection}
        />
        <div className="product-filters-search">
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Type here..."
          />
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
