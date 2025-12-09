import FiltersSidebar from "../components/FiltersSidebar";
import ProductList from "../components/ProductList";

const Browse = ({ products }) => {
  return (
    <div style={{ display: "flex", gap: "2rem", padding: "1rem" }}>
      {/* Sidebar */}
      <FiltersSidebar data={products} />

      {/* Placeholder for products */}
      <div style={{ flex: 1 }}>
      <h1 className="text-3xl font-bold p-6">Results</h1>
        <ProductList products = {products}/>
      </div>
    </div>
  );
};

export default Browse;
