// FiltersSidebar.jsx
import React, { useState, useEffect } from "react";

const FiltersSidebar = ({ data }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);

  // Extract unique filter options from API data
  useEffect(() => {
    if (!data || data.length === 0) return;

    const uniqueCategories = [...new Set(data.map((item) => item.category))];
    const uniqueGenders = [...new Set(data.map((item) => item.gender))];
    const uniqueSizes = [...new Set(data.flatMap((item) => item.sizes))];
    const uniqueColors = [
      ...new Set(data.flatMap((item) => item.color.map((c) => c.name))),
    ];

    setCategories(uniqueCategories);
    setGenders(uniqueGenders);
    setSizes(uniqueSizes);
    setColors(uniqueColors);
  }, [data]);

  const toggleSelection = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "250px" }}>
      <h3>Filters</h3>

      {/* Categories */}
      <div>
        <h4>Categories</h4>
        {categories.map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              id={category}
              checked={selectedCategories.includes(category)}
              onChange={() =>
                toggleSelection(category, selectedCategories, setSelectedCategories)
              }
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>

      {/* Gender */}
      <div>
        <h4>Gender</h4>
        <select
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          {genders.map((gender) => (
            <option key={gender} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>

      {/* Sizes */}
      <div>
        <h4>Sizes</h4>
        {sizes.map((size) => (
          <div key={size}>
            <input
              type="checkbox"
              id={size}
              checked={selectedSizes.includes(size)}
              onChange={() => toggleSelection(size, selectedSizes, setSelectedSizes)}
            />
            <label htmlFor={size}>{size}</label>
          </div>
        ))}
      </div>

      {/* Colors */}
      <div>
        <h4>Colors</h4>
        {colors.map((color) => (
          <div key={color}>
            <input
              type="checkbox"
              id={color}
              checked={selectedColors.includes(color)}
              onChange={() =>
                toggleSelection(color, selectedColors, setSelectedColors)
              }
            />
            <label htmlFor={color}>{color}</label>
          </div>
        ))}
      </div>

      {/* Debug selected data */}
      <div style={{ marginTop: "1rem" }}>
        <h4>Selected Data (debug)</h4>
        <pre>
          {JSON.stringify(
            { selectedCategories, selectedGender, selectedSizes, selectedColors },
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
};

export default FiltersSidebar;
