import Link from "next/link";
import Image from "next/image";


export default function Content() {
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
      name: "Nissan GT-R",
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
      name: "CR-V",
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
      image: "/c4.png",
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
      image: "/c7.png",
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
      image: "/c7.png",
    },
  ];

  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Left Card */}
        <div className="bg-blue-500 text-white rounded-lg p-20 relative">
          <h1 className="text-3xl font-bold mb-4">The Best Platform for Car Rental</h1>
          <p className="text-sm mb-6">
            Ease of doing a car rental safely and reliably. Of course, at a low price.
          </p>
          <button className="bg-blue-700 px-4 py-2 rounded text-white">Rental Car</button>
          <Image src="/car.png" alt="Car" width={500} height={300} className="absolute bottom-0 right-36 w-2/5" />
        </div>

        {/* Right Card */}
        <div className="bg-blue-700 text-white rounded-lg p-20 relative">
          <h1 className="text-3xl font-bold mb-4">Easy way to rent a car at a low price</h1>
          <p className="text-sm mb-6">
            Providing cheap car rental services and safe and comfortable facilities.
          </p>
          <button className="bg-blue-500 px-4 py-2 rounded text-white">Rental Car</button>
          <Image src="/car (1).png" alt="Car" width={500} height={300} className="absolute bottom-0 right-36 w-2/5" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4 mt-8 bg-white p-6 rounded-lg shadow-md">
        <div className="flex-1">
          <h3 className="text-lg font-medium mb-2">Pick-Up</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-1">Locations</label>
              <select className="w-full border rounded-md p-2">
                <option>Select your city</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Date</label>
              <input type="date" className="w-full border rounded-md p-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Time</label>
              <input type="time" className="w-full border rounded-md p-2" />
            </div>
          </div>
        </div>

        <div className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-md shadow-lg">
          <button
            className="bg-white text-blue-500 w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 10l4-4m0 0l-4-4m4 4H7m-6 4l4 4m0 0l-4 4m4-4h10" />
            </svg>
          </button>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-medium mb-2">Drop-Off</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-1">Locations</label>
              <select className="w-full border rounded-md p-2">
                <option>Select your city</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Date</label>
              <input type="date" className="w-full border rounded-md p-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Time</label>
              <input type="time" className="w-full border rounded-md p-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Popular Cars Section */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Popular Cars</h1>
          <Link href="#" className="text-blue-500 text-sm font-semibold">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCars.map((car, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{car.name}</h2>
                <span className={`text-lg ${car.liked ? "text-red-500" : "text-gray-300"}`}>
                  &hearts;
                </span>
              </div>
              <p className="text-gray-500 text-sm">{car.type}</p>
              <Image src={car.image} alt={car.name} width={200} height={100} className="object-cover mx-auto my-4" />
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

      {/* SUV Cars Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Recommendation Cars</h1>
          <Link href="#" className="text-blue-500 text-sm font-semibold">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {suvCars.map((car, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{car.name}</h2>
                <span className={`text-lg ${car.liked ? "text-red-500" : "text-gray-300"}`}>
                  &hearts;
                </span>
              </div>
              <p className="text-gray-500 text-sm">{car.type}</p>
              <Image src={car.image} alt={car.name} width={200} height={100} className="object-cover mx-auto my-4" />
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
        <div className="flex justify-center mt-6">
          <Link href="/category">
            <button
              className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md sm:px-6 sm:py-3 sm:text-base"
              aria-label="Show More"
            >
              Show More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
