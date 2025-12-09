import { Link } from "react-router-dom";

const Home = () => {
    return (
        // The following is for the big homescreen image
        <div className="w-full min-h-screen flex flex-col items-center">
            <div className="w-full h-96 md:h-[500px] relative">
                <img src="https://placehold.co/1600x500/png" className="w-full h-full object-cover"/>
                <div style={{ backgroundColor: "#bdbdbdff" }} className="absolute inset-0 flex items-center justify-center bg-opacity-30">
                    <h1 className="text-4xl md:text-6xl font-bold text-white text-center">Welcome to Our Shop</h1>
                </div>
            </div>

            {/*The following is for the text below our big image. */}
            <div className="w-full max-w-6xl p-6 text-center text-black">
                <p className="text-lg md:text-xl">Browse our latest collection of men’s and women’s clothing.</p>
            </div>
            
            {/*The following are the mens and women big button*/}
            <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4 p-6">
                <Link to="/women" className="relative flex-1 h-64 md:h-80 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition transform">
                    <img src="https://placehold.co/800x500/png"className="w-full h-full object-cover"/>
                    <div style={{ backgroundColor: "rgba(189, 189, 189, 0.7)" }} className="absolute inset-0  bg-opacity-30 flex items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Women</h2>
                    </div>
                </Link>
       
                 <Link to="/men" className="relative flex-1 h-64 md:h-80 overflow-hidden rounded-lg shadow-lg hover:scale-105 transition transform">
                    <img src="https://placehold.co/800x500/png" alt="Men Collection" className="w-full h-full object-cover"/>
                    <div style={{ backgroundColor: "rgba(189, 189, 189, 0.7)" }} className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Men</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
