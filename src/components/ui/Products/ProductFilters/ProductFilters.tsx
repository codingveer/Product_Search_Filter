import CategoryFilters from "./CategoryFilters";
import "./ProductFilters.css";
import { useProductStore } from "../../../../ContextProvider/ProductContext";
import { observer } from "mobx-react-lite";

const debounce = (fn: Function) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), 100);
  };
};

const ProductFilters = () => {
  const { handleSearch } = useProductStore();
  const debounceResults = debounce(handleSearch);
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
