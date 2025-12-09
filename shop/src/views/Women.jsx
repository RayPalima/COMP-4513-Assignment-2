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
    <div>
      <h1 className="text-3xl font-bold p-6">Women's Categories</h1>
      <CategoryList categories={categories} gender="womens" />
    </div>
  );
};

export default Women;
