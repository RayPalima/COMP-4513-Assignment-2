import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";

const Men = ({ products }) => {
  const [categories, setCategories] = useState([]);
  const [mensProducts, setMensProducts] = useState([]);

  useEffect(() => {
    if (!products || products.length === 0) return;

    const mens = products.filter((p) => p.gender === "mens");
    setMensProducts(mens);

    const categoryArray = [...new Set(mens.map((p) => p.category))];
    setCategories(categoryArray);
  }, [products]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-96 md:h-[500px] relative">
        <img src="https://placehold.co/1600x500/png" className="w-full h-full object-cover"/>
      
      <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(189, 189, 189, 0.7)" }}>
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center"> Men's Collection</h1>
      </div>
    </div>

    <div className="w-full max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Men's Categories</h1>
      <CategoryList categories={categories} gender="mens" />
      </div>
    </div>
  );

};

export default Men;
