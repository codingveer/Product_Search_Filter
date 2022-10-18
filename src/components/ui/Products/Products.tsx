import { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails/ProductDetails";
import ProductFilters from "./ProductFilters/ProductFilters";
import ProductList from "./ProductList";
import { products as pData } from "./../../../data/products";
import Portal from "../../../utils/Portal";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filters, setFilters] = useState({
    searchQuery: "",
    categories: [],
  });

  useEffect(() => {
    setProducts(pData);
  }, []);

  const handleSearch = (searchQuery: string) => {
    setFilters({
      ...filters,
      searchQuery,
    });
    setSelectedProduct(null);
  };

  const handleCategorySelection = (category: string) => {
    const categories = [...filters.categories];
    if (!categories.includes(category)) {
      categories.push(category);
    } else {
      categories.splice(categories.indexOf(category), 1);
    }

    setFilters({
      ...filters,
      categories,
    });
    setSelectedProduct(null);
  };

  const getFilteredProductsData = () => {
    const { searchQuery, categories } = filters;
    let filtered = products;

    if (searchQuery) {
      filtered = products.filter(({ productName }) =>
        productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (categories.length > 0) {
      filtered = filtered.filter(
        ({ category }) => categories.indexOf(category) !== -1
      );
    }

    return filtered;
  };

  const filteredProducts = getFilteredProductsData();

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <ProductFilters
        filters={filters}
        handleSearch={handleSearch}
        handleCategorySelection={handleCategorySelection}
      />
      <ProductList
        handleProductSelect={setSelectedProduct}
        products={filteredProducts}
        selectedProduct={selectedProduct}
      />
      {selectedProduct && (
        <Portal>
          <ProductDetails selectedProduct={selectedProduct} />
        </Portal>
      )}
    </div>
  );
};

export default Products;
