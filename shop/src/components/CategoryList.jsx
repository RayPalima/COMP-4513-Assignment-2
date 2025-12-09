import { Link } from "react-router-dom";

const CategoryList = ({ categories, gender }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {categories.map(category => (
        <Link key={category} to={`/browse?gender=${gender}&category=${category}`} className="cursor-pointer border rounded p-6 text-center hover:bg-gray-100 flex flex-col items-center">
          <img src="https://placehold.co/600x400/png" className="w-full h-48 object-cover mb-2 rounded"/>
          <h2 className="font-semibold capitalize">{category}</h2>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
