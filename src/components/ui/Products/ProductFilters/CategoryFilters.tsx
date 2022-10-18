import { products } from "./../../../../data/products";

const CategoryFilters = ({ selectedCategories, handleCategorySelection }) => {
  const categories = [...new Set(products.map(({ category }) => category))];

  if (categories.length === 0) {
    return null;
  }

  return (
    <div className="category-list">
      {categories.map((cat, index) => {
        return (
          <div key={index} className="category-list-item">
            <label htmlFor="category">
              <input
                name="category"
                checked={selectedCategories.includes(cat)}
                type="checkbox"
                onChange={() => handleCategorySelection(cat)}
              />
            </label>
            {cat}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryFilters;
