import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";

const Women = ({ products }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!products || products.length === 0) return;

    const categoryArray = [];

    for (let i = 0; i < products.length; i++) {
      const item = products[i];

      if (item.gender === "womens") {
        const category = item.category;

        if (!categoryArray.includes(category)) {
          categoryArray.push(category);
        }
      }
    }

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
