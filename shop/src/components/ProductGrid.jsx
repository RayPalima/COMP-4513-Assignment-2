import { Link } from "react-router-dom";

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {products.map(item => (
        <Link
          to={`/singleproduct/${item.id}`}
          key={item.id}
          className="border p-4 rounded shadow hover:scale-105 transition"
        >
          <img
            src={item.image || "https://via.placeholder.com/300x400?text=Product"}
            alt={item.name}
            className="w-full h-48 object-cover mb-2"
          />
          <h2 className="font-bold">{item.name}</h2>
          <p>${item.price}</p>
        </Link>
      ))}
    </div>
  );
}

export default ProductGrid;
