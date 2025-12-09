import { useState, useEffect } from "react";
import FiltersSidebar from "../components/FiltersSidebar";
import ProductList from "../components/ProductList";

function Browse({ products }) {
  const [filters, setFilters] = useState({
    gender: "",
    categories: [],
    sizes: [],
    colors: []
  });

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    let result = [...products];

    if (filters.gender) {
      result = result.filter((p) => p.gender === filters.gender);
    }

    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category));
    }

    if (filters.sizes.length > 0) {
      result = result.filter((p) =>
        p.sizes?.some((size) => filters.sizes.includes(size))
      );
    }

    if (filters.colors.length > 0) {
      result = result.filter((p) =>
        p.color?.some((c) => filters.colors.includes(c.name))
      );
    }

    setFilteredProducts(result);
  }, [filters, products]);

  return (
    <div className="flex">
      <FiltersSidebar
        data={products}
        filters={filters}
        setFilters={setFilters}
      />

      <div className="flex-1">
        <h1 className="text-3xl font-bold p-6">Results</h1>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default Browse;
