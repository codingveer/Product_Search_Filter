import { configure } from 'mobx';
configure({ useProxies: 'never' })
import { toJS } from 'mobx';
import { useProductStore } from "../../../../ContextProvider/ProductContext";
import { observer } from "mobx-react-lite";


const CategoryFilters = () => {
  const { handleCategorySelection, selectedCategories=[], categories=[]} = useProductStore();
  if (!categories?.length) {
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
export default observer(CategoryFilters);