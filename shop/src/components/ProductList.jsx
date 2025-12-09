import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
}

export default ProductList;
