const FiltersSidebar = ({ data, filters, setFilters }) => {
    const uniqueCategories = [...new Set(data.map((p) => p.category))];
    const uniqueSizes = [...new Set(data.flatMap((p) => p.sizes || []))];
    const uniqueColors = [...new Set(data.flatMap((p) => p.color.map(c => c.name) || []))];

    const toggleItem = (key, value) => {
        setFilters((prev) => {
        const list = prev[key];
        return {
            ...prev,
            [key]: list.includes(value)
            ? list.filter((v) => v !== value)
            : [...list, value]
        };
        });
    };

    return (
        <aside style={{ backgroundColor: "#bdbdbdff" }} className="w-64 p-4 border-r space-y-6">
            <div>
                <h3 className="font-bold mb-2">Gender</h3>
                <select className="w-full border p-2" value={filters.gender} onChange={(e) => setFilters((prev) => ({ ...prev, gender: e.target.value }))}>
                    <option value="">All</option>
                    <option value="mens">Men</option>
                    <option value="womens">Women</option>
                </select>
            </div>

            <div>
                <h3 className="font-bold mb-2">Categories</h3>
                {uniqueCategories.map((cat) => (
                    <label key={cat} className="block">
                    <input type="checkbox" checked={filters.categories.includes(cat)} onChange={() => toggleItem("categories", cat)} className="mr-2"/>
                    {cat}
                    </label>
                ))}
            </div>

            <div>
                <h3 className="font-bold mb-2">Sizes</h3>
                {uniqueSizes.map((size) => (
                    <label key={size} className="block">
                    <input type="checkbox" checked={filters.sizes.includes(size)} onChange={() => toggleItem("sizes", size)} className="mr-2"/>
                    {size}
                    </label>
                ))}
            </div>

            <div>
                <h3 className="font-bold mb-2">Colors</h3>
                {uniqueColors.map((color) => (
                    <label key={color} className="block">
                        <input type="checkbox" checked={filters.colors.includes(color)} onChange={() => toggleItem("colors", color)} className="mr-2"/>
                         {color}
                    </label>
                ))}
            </div>
    </aside>
    );
}

export default FiltersSidebar;
