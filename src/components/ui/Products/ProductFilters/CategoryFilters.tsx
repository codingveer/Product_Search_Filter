import  {CategoryFilterData}  from './CategoryFilterData';
import { useProductStore } from "../../../../ContextProvider/ProductContext";
import { observer } from "mobx-react-lite";


const CategoryFilters:React.FC = () => {
  const { handleCategorySelection, selectedCategories=[], categories=[]} = useProductStore();
  if (!categories?.length) {
    return null;
  }

  return (
    <div className="category-list">
      {CategoryFilterData.map((cat, index) => {
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
export default observer(CategoryFilters);