import { useState, useEffect } from "react";
// https://reactrouter.com/api/hooks/useLocation
import { useLocation } from "react-router-dom";
import FiltersSidebar from "../components/FiltersSidebar";
import ProductList from "../components/ProductList";

function Browse({ products }) {
    const location = useLocation();

    //The following is to handle taking the "preset" parameters from the Men/women pages
    const searchParams = new URLSearchParams(location.search);
    const initialGender = searchParams.get("gender") || "";
    const initialCategory = searchParams.get("category") ? [searchParams.get("category")] : [];

    const [filters, setFilters] = useState({
    gender: initialGender,
    categories: initialCategory,
    sizes: [],
    colors: []
    });

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [sort, setSort] = useState("name");

    useEffect(() => {
        let result = [...products];

        if (filters.gender) {
            result = result.filter((p) => p.gender == filters.gender);
        }
        if (filters.categories.length > 0) {
            result = result.filter((p) => filters.categories.includes(p.category));
        }
        if (filters.sizes.length > 0) {
            result = result.filter((p) =>
            p.sizes?.some((size) => filters.sizes.includes(size))
            );
        }
        if (filters.colors.length > 0) {
            result = result.filter((p) =>
            p.color?.some((c) => filters.colors.includes(c.name))
            );
        }

        setFilteredProducts(result);
    }, [filters, products]);

    const removeTag = (tag) => {
        if (tag === "Men" || tag === "Women") {
            setFilters((prev) => ({ ...prev, gender: "" }));
        return;
        }

        setFilters((prev) => ({...prev, categories: prev.categories.filter((c) => c !== tag), sizes: prev.sizes.filter((s) => s !== tag), colors: prev.colors.filter((clr) => clr !== tag)}));
    };

    const clearFilters = () => {
        setFilters({gender: "", categories: [], sizes: [], colors: []});
    };

    const activeTags = [filters.gender && (filters.gender === "mens" ? "Men" : "Women"),...filters.categories, ...filters.sizes, ...filters.colors].filter(Boolean);

    let sortedProducts = [...filteredProducts];
    if (sort === "name") {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "price") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "category") {
        sortedProducts.sort((a, b) => a.category.localeCompare(b.category));
    }

    return (
    <div className="flex">
        <FiltersSidebar data={products} filters={filters} setFilters={setFilters} />
    
    <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold text-center mb-6">Browse</h1>

    
        <div className="flex items-center justify-between mb-4">
            <div>
                <h2 className="text-3xl font-bold">Results</h2>
                <span className="text-gray-600 text-lg">{sortedProducts.length} items found</span>
            </div>

            <div className="flex items-center gap-2">
                <label className="font-semibold text-sm">Sort by:</label>
                    <select value={sort} onChange={(e) => setSort(e.target.value)} className="border rounded p-2">
                        <option value="name">Name (A → Z)</option>
                        <option value="price">Price (Low → High)</option>
                        <option value="category">Category (A → Z)</option>
                </select>
            </div>
        </div>

    {activeTags.length > 0 && (
        <div className="mb-6 flex items-center flex-wrap gap-3">
            {activeTags.map((tag, index) => (
                <span key={index} className="px-3 py-1 text-sm bg-gray-200 rounded-full flex items-center gap-2">{tag}
                <button className="text-gray-600 hover:text-black font-bold" onClick={() => removeTag(tag)}>x</button>
                </span>
            ))}

        <button className="ml-2 px-4 py-1 bg-red-500 text-white rounded" onClick={clearFilters}> Clear Filters </button></div>
        )}

        <ProductList products={sortedProducts} />
        </div>
    </div>

    );
}

export default Browse;