import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";

const Men = ({ products }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!products || products.length === 0) return;

    const categoryArray = [];

    for (let i = 0; i < products.length; i++) {
      const item = products[i];

      if (item.gender === "mens") {
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
      <h1 className="text-3xl font-bold p-6">Men's Categories</h1>

      <CategoryList categories={categories} gender="mens" />
    </div>
  );
}

export default Men;
