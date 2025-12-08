import { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList";

const Men = ({ data }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const categoryArray = [];

    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      if (item.gender === "mens") {
        const category = item.category;

        if (!categoryArray.includes(category)) {
          categoryArray.push(category);
        }
      }
    }

    setCategories(categoryArray);
  }, [data]);

  return (
    <div>
      <h1 className="text-3xl font-bold p-6">Men's Categories</h1>

      <CategoryList categories={categories} gender="mens" />
    </div>
  );
}

export default Men;
