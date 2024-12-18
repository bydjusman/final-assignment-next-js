"use client";

import { useState } from "react";

// Car Data
const cars = [
  {
    id: 1,
    name: "Koenigsegg",
    type: "Sport",
    category: "2 Person",
    price: 99,
    fuel: "90L",
    transmission: "Manual",
    capacity: "2 People",
    image: "/suv.png",
  },
  {
    id: 2,
    name: "NissanGT - R",
    type: "Sport",
    category: "2 Person",
    price: 80,
    fuel: "80L",
    transmission: "Manual",
    capacity: "2 People",
    image: "/suv (4).png",
  },
  {
    id: 3,
    name: "Rolls-Royce",
    type: "Sedan",
    category: "4 Person",
    price: 96,
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    image: "/suv (4).png",
  },
  {
    id: 4,
    name: "All New Rush",
    type: "SUV",
    category: "8 or More",
    price: 100,
    fuel: "70L",
    transmission: "Manual",
    capacity: "8 People",
    image: "/suv.png",
  },
  {
    id: 5,
    name: "CR - V",
    type: "SUV",
    category: "6 Person",
    price: 90,
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    image: "/suv.png",
  },
];

export default function Category() {
  const [filters, setFilters] = useState({
    type: ["Sport", "SUV"],
    category: ["2 Person", "8 or More"],
    price: 100,
  });

  // Handle filter changes
  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: Array.isArray(value) ? value : value === "" ? [] : value,
    }));
  };

  // Filter cars
  const filteredCars = cars.filter(
    (car) =>
      (!filters.type.length || filters.type.includes(car.type)) &&
      (!filters.category.length || filters.category.includes(car.category)) &&
      car.price <= filters.price
  );

  return (
    <div className="flex bg-gray-100 min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-4 shadow-md">
        <h2 className="font-bold text-lg mb-4">Filters</h2>

        {/* Type Filter */}
        <div>
          <h3 className="font-semibold">Type</h3>
          {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
            <label key={type} className="block">
              <input
                type="checkbox"
                checked={filters.type.includes(type)}
                onChange={() =>
                  handleFilterChange(
                    "type",
                    filters.type.includes(type)
                      ? filters.type.filter((t) => t !== type)
                      : [...filters.type, type]
                  )
                }
                className="mr-2"
              />
              {type}
            </label>
          ))}
        </div>

        {/* Category Filter */}
        <div className="mt-4">
          <h3 className="font-semibold">Category</h3>
          {["2 Person", "4 Person", "6 Person", "8 or More"].map((cat) => (
            <label key={cat} className="block">
              <input
                type="checkbox"
                checked={filters.category.includes(cat)}
                onChange={() =>
                  handleFilterChange(
                    "category",
                    filters.category.includes(cat)
                      ? filters.category.filter((c) => c !== cat)
                      : [...filters.category, cat]
                  )
                }
                className="mr-2"
              />
              {cat}
            </label>
          ))}
        </div>

        {/* Price Filter */}
        <div className="mt-4">
          <h3 className="font-semibold">Price</h3>
          <input
            type="range"
            min="50"
            max="100"
            value={filters.price}
            onChange={(e) => handleFilterChange("price", parseInt(e.target.value, 10))}
            className="w-full"
          />
          <p>Max: ${filters.price}</p>
        </div>
      </aside>

      {/* Car Listings */}
      <main className="w-3/4 p-6">
        <h2 className="font-bold text-2xl mb-4">Category</h2>
        <div className="grid grid-cols-2 gap-6">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="bg-white p-4 shadow rounded-lg flex flex-col items-center"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-48 h-24 object-contain"
              />
              <h3 className="font-bold mt-2">{car.name}</h3>
              <p>{car.type}</p>
              <p>${car.price}/day</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
                Rent Now
              </button>
            </div>
          ))}
          {filteredCars.length === 0 && (
            <p className="text-center text-gray-500 col-span-2">
              No cars match your filters.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
