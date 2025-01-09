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
      </div>
    </div>
  );
}
