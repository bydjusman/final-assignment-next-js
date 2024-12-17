export default function DetailCar() {
    return (
      <div className="flex min-h-screen bg-gray-50 p-8">
        {/* Sidebar Filters */}
        <div className="p-4 w-1/4 bg-gray-100 rounded-md">
          {/* Car Type Filter */}
          <div>
            <h3 className="font-semibold mb-2">Type</h3>
            {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
              <div key={type} className="flex items-center mb-1">
                <input type="checkbox" className="mr-2" checked />
                <label>{type} (10)</label>
              </div>
            ))}
          </div>
  
          {/* Capacity Filter */}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Capacity</h3>
            {["2 Person", "4 Person", "6 Person", "8 or More"].map((cap) => (
              <div key={cap} className="flex items-center mb-1">
                <input type="radio" name="capacity" className="mr-2" checked />
                <label>{cap}</label>
              </div>
            ))}
          </div>
  
          {/* Price Filter */}
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Price</h3>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="80"
              className="w-full"
            />
            <p className="text-sm mt-2">Max: <b>$100.00</b></p>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="w-3/4 ml-8">
          {/* Car Card */}
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-semibold">Nissan GT - R</h2>
            <p className="text-gray-500 mb-4">440+ Reviews | ★★★★☆</p>
  
            {/* Car Image */}
            <div className="bg-blue-100 rounded-md mb-4">
              <img
                src="/Rental Summary.png"
                alt="Nissan GT-R"
                className="w-fit rounded-md"
              />
            </div>
  
            {/* Description */}
            <p className="text-sm text-gray-700">
              NISMO has become the embodiment of Nissan's outstanding performance,
              inspired by the most unforgiving proving ground, the "race track".
            </p>
  
            {/* Details */}
            <div className="flex justify-between mt-4">
              <div>
                <p>Type: <b>Sport</b></p>
                <p>Capacity: <b>2 Person</b></p>
                <p>Gasoline: <b>70L</b></p>
              </div>
              <div className="text-right">
                <p className="text-xl font-semibold text-blue-600">$80.00/day</p>
                <p className="line-through text-gray-500">$100.00</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2">
                  Rent Now
                </button>
              </div>
            </div>
          </div>
  
          {/* Reviews Section */}
          <h3 className="text-xl font-semibold mt-8 mb-4">Reviews (13)</h3>
          <div className="bg-white p-4 rounded-md shadow-sm mb-4">
            <h4 className="font-semibold">Alex Stanton</h4>
            <p className="text-xs text-gray-500">CEO at Bukalapak</p>
            <p className="mt-2 text-sm">
              Morent has a low price and a large variety of cars. The service is
              excellent!
            </p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-400 text-xs">21 July 2022</p>
              <p className="text-yellow-400">★★★★☆</p>
            </div>
          </div>
  
          <div className="bg-white p-4 rounded-md shadow-sm mb-4">
            <h4 className="font-semibold">Skylar Dias</h4>
            <p className="text-xs text-gray-500">CEO at Amazon</p>
            <p className="mt-2 text-sm">
              Great service and comfortable cars. Highly recommended!
            </p>
            <div className="flex justify-between mt-2">
              <p className="text-gray-400 text-xs">20 July 2022</p>
              <p className="text-yellow-400">★★★★☆</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  