import CategoryFilters from "./CategoryFilters";
import "./ProductFilters.css";
import { useProductStore } from "../../../../ContextProvider/ProductContext";
import { observer } from "mobx-react-lite";
import debounce from "lodash.debounce";

const ProductFilters = () => {
  const { handleSearch } = useProductStore();
  const debounceResults = debounce((e) =>handleSearch(e), 300);
  return (
    <div className="product-filters">
      <div className="product-filters-header">I'm looking for...</div>
      <div className="product-filters-body">
        <CategoryFilters />
        <div className="product-filters-search">
          <input type="search" onKeyUp={debounceResults} placeholder="Type here..."/>
        </div>
      </div>
    </div>
  );
};

export default observer(ProductFilters);
