import Link from "next/link";
import Image from "next/image";

export default function Content() {
  //(4 Box)
  const popularCars = [
    {
      name: "Koenigsegg",
      type: "Sport",
      price: 99.0,
      fuel: "90L",
      transmission: "Manual",
      capacity: "2 People",
      liked: true,
      image: "/car.png",
    },
    {
      name: "NissanGT - R",
      type: "Sport",
      price: 80.0,
      oldPrice: 100.0,
      fuel: "80L",
      transmission: "Manual",
      capacity: "2 People",
      liked: false,
      image: "/car (1).png",
    },
    {
      name: "Rolls-Royce",
      type: "Sedan",
      price: 96.0,
      fuel: "70L",
      transmission: "Manual",
      capacity: "4 People",
      liked: true,
      image: "/Car (2).png",
    },
    {
      name: "Ford Mustang",
      type: "Sport",
      price: 85.0,
      fuel: "75L",
      transmission: "Manual",
      capacity: "2 People",
      liked: false,
      image: "/car.png",
    },
  ];

  // (8 Box)
  const suvCars = [
    {
      name: "All New Rush",
      type: "SUV",
      price: 72.0,
      fuel: "70L",
      capacity: "6 People",
      liked: true,
      image: "/suv.png",
    },
    {
      name: "CR - V",
      type: "SUV",
      price: 80.0,
      fuel: "80L",
      capacity: "6 People",
      liked: false,
      image: "/suv (4).png",
    },
    {
      name: "All New Terios",
      type: "SUV",
      price: 74.0,
      fuel: "90L",
      capacity: "6 People",
      liked: true,
      image: "/suv.png",
    },
    {
      name: "MG ZX Exclusive",
      type: "Hatchback",
      price: 76.0,
      fuel: "70L",
      capacity: "4 People",
      liked: true,
      image: "/suv (4).png",
    },
    {
      name: "NEW MG ZS",
      type: "SUV",
      price: 80.0,
      fuel: "80L",
      capacity: "6 People",
      liked: false,
      image: "/suv.png",
    },
    {
      name: "MG ZX Excite",
      type: "Hatchback",
      price: 74.0,
      fuel: "90L",
      capacity: "4 People",
      liked: true,
      image: "/suv (4).png",
    },
    {
      name: "Toyota Fortuner",
      type: "SUV",
      price: 90.0,
      fuel: "85L",
      capacity: "7 People",
      liked: false,
      image: "/suv.png",
      
    },
    {
      name: "Honda BR-V",
      type: "SUV",
      price: 78.0,
      fuel: "70L",
      capacity: "6 People",
      liked: true,
      image: "/suv (4).png",
    },
  ];

  return (
    <div>
      <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Left Card */}
          <div className="bg-blue-500 text-white rounded-lg p-20 relative">
            <h1 className="text-3xl font-bold mb-4">The Best Platform for Car Rental</h1>
            <p className="text-sm mb-6">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            <button className="bg-blue-700 px-4 py-2 rounded text-white">Rental Car</button>
            <img
              src="/car.png"
              alt="Car"
              className="absolute bottom-0 right-36 w-2/5"
            />
          </div>
  
          {/* Right Card */}
          <div className="bg-blue-700 text-white rounded-lg p-20 relative">
            <h1 className="text-3xl font-bold mb-4">Easy way to rent a car at a low price</h1>
            <p className="text-sm mb-6">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <button className="bg-blue-500 px-4 py-2 rounded text-white">Rental Car</button>
            <img
              src="/car (1).png"
              alt="Car"
              className="absolute bottom-0 right-36 w-2/5"
            />
          </div>
        </div>
  
        {/* Pick-Up & Drop-Off Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pick-Up */}
            <div>
              <h2 className="font-bold mb-2">Pick - Up</h2>
              <div className="grid grid-cols-3 gap-4">
                <select className="border p-2 rounded">
                  <option>Select your city</option>
                </select>
                <input type="date" className="border p-2 rounded" />
                <input type="time" className="border p-2 rounded" />
              </div>
            </div>
  
            {/* Drop-Off */}
            <div>
              <h2 className="font-bold mb-2">Drop - Off</h2>
              <div className="grid grid-cols-3 gap-4">
                <select className="border p-2 rounded">
                  <option>Select your city</option>
                </select>
                <input type="date" className="border p-2 rounded" />
                <input type="time" className="border p-2 rounded" />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-blue-500 text-white p-2 rounded">
              &#8597; {/* Swap icon */}
            </button>
          </div>
        </div>
    </div>

      <div  className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        {/* Popular Cars Section */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Popular Car</h1>
            <a href="#" className="text-blue-500 text-sm font-semibold">
              View All
            </a>
          </div>

          {/* Grid with 4 Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCars.map((car, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{car.name}</h2>
                  {car.liked ? (
                    <span className="text-red-500 text-lg">&hearts;</span>
                  ) : (
                    <span className="text-gray-300 text-lg">&hearts;</span>
                  )}
                </div>
                <p className="text-gray-500 text-sm">{car.type}</p>
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-72 h-20 object-cover mx-auto my-4"
                />
                <div className="flex justify-between text-gray-500 text-sm mb-4">
                  <span>{car.fuel}</span>
                  <span>{car.capacity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold">${car.price.toFixed(2)}</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cars Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Recommendation Car</h1>
            <a href="#" className="text-blue-500 text-sm font-semibold">
              View All
            </a>
          </div>

          {/* 8 Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {suvCars.map((car, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{car.name}</h2>
                  {car.liked ? (
                    <span className="text-red-500 text-lg">&hearts;</span>
                  ) : (
                    <span className="text-gray-300 text-lg">&hearts;</span>
                  )}
                </div>
                <p className="text-gray-500 text-sm">{car.type}</p>
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-56 h-20 object-cover mx-auto my-4"
                />
                <div className="flex justify-between text-gray-500 text-sm mb-4">
                  <span>{car.fuel}</span>
                  <span>{car.capacity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-lg font-bold">${car.price.toFixed(2)}</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                    Rent Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}