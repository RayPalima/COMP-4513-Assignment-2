import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../components/API";
import Loading from "../components/Loading";
import { useCart } from "../components/ContextCart";
import { useAuth } from "../components/Login";

const Product = () =>{
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { addItem } = useCart();
  const { user } = useAuth();

  useEffect(() => {
    let mounted = true;
    fetchProducts()
      .then((data) => {
        if (!mounted) return;

        const normalized = data.map((p, i) => ({
          id: p.id ?? p.productId ?? String(i),
          ...p,
        }));

        const found = normalized.find((p) => String(p.id) === String(id));
        setProduct(found ?? null);
      })
      .catch(() => setError("Failed to load product"));

    return () => (mounted = false);
  }, [id]);

  if (error)
    return (
      <div className="p-6 text-red-600 text-lg font-semibold">{error}</div>
    );

  if (!product)
    return <Loading message="Loading product..." />;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">

      {/* Product Layout */}
      <div className="flex flex-col md:flex-row gap-10">

        {/* IMAGE SECTION */}
        <div className="md:w-1/3">
          <div className="bg-white border rounded-xl shadow-md p-4 flex items-center justify-center h-96 overflow-hidden">
            <img
              src={product.image || "https://placehold.co/600x400/png"}
              alt={product.title || product.name || "Placeholder"}
              className="max-h-full w-auto object-contain"
            />

          </div>
        </div>

        {/* PRODUCT DETAILS */}
        <div className="flex-1 space-y-6">

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900">
            {product.title || product.name}
          </h1>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">
            {product.description || product.summary || "No description available."}
          </p>

          {/* Price */}
          <h2 className="text-3xl font-bold text-blue-600">
            ${(product.price || 0).toFixed(2)}
          </h2>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">

            {/* ADD TO CART BUTTON */}
            <button
              onClick={() => addItem(product, 1)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>

            {/* ADMIN ONLY BUTTON */}
            {user?.isAdmin && (
              <button
                className="bg-gray-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
                onClick={() =>
                  alert("Open admin product sales drawer (not implemented)")
                }
              >
                Admin: Sales
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;