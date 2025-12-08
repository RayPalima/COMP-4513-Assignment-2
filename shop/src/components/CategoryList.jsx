import { useNavigate } from "react-router-dom";

const CategoryList = ({ categories, gender }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {categories.map(category => (
        <div
          key={category}
          onClick={() =>
            navigate(`/browse?gender=${gender}&category=${category}`)
          }
          className="cursor-pointer border rounded p-6 text-center hover:bg-gray-100"
        >
          <img
            src={`https://via.placeholder.com/300x300?text=${gender}+${category}`}
            alt={category}
            className="w-full h-48 object-cover mb-2"
          />

          <h2 className="font-semibold capitalize">{category}</h2>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
