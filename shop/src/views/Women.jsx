import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";

const Women = ({ products }) => {
  const [categories, setCategories] = useState([]);
  const [womensProducts, setWomensProducts] = useState([]);

  useEffect(() => {
    if (!products || products.length === 0) return;

    const womens = products.filter((p) => p.gender === "womens");
    setWomensProducts(womens);

    const categoryArray = [...new Set(womens.map((p) => p.category))];
    setCategories(categoryArray);
  }, [products]);

  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-96 md:h-[500px] relative">
        <img src="https://placehold.co/1600x500/png" className="w-full h-full object-cover"/>
        
      <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(189, 189, 189, 0.7)" }}>
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Women's Collection</h1>
      </div></div>

      <div className="w-full max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Women's Categories</h1>
        <CategoryList categories={categories} gender="womens" />
      </div>
    </div>
  );
};

export default Women;
