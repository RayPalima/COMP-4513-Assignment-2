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
    <div>
      <h1 className="text-3xl font-bold p-6">Men's Categories</h1>
      <CategoryList categories={categories} gender="mens" />
    </div>
  );
};

export default Men;
