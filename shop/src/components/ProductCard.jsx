import { Link } from "react-router-dom";
import { useCart } from "../components/ContextCart";

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  return (
    <div  className="border p-4 rounded shadow hover:scale-105 transition relative">
        <Link to={`/singleproduct/${product.id}`}>
            <img src={"https://placehold.co/600x400/png"} className="w-full h-48 object-cover mb-2"/>
            <h2 className="font-bold">{product.name}</h2>
            <p>${product.price}</p>
        </Link>

        <button onClick={() => {
            addItem(product);
            alert(`${product.name} has been added to your cart.`);
        }}
        //The following is for the top right add button
        className="absolute top-2 right-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">+</button>

    </div>
    );
};

export default ProductCard;
