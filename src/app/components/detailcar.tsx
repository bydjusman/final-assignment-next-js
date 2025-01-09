import Image from "next/image";

export default function DetailCar() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 shadow-md">
        {/* Type Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Type</h3>
          {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type, index) => (
            <label key={index} className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              {type} <span className="text-gray-400 ml-1">(10)</span>
            </label>
          ))}
        </div>

        {/* Capacity Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Capacity</h3>
          {["2 Person", "4 Person", "6 Person", "8 or More"].map((capacity, index) => (
            <label key={index} className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" />
              {capacity} <span className="text-gray-400 ml-1">(10)</span>
            </label>
          ))}
        </div>

        {/* Price Filter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Price</h3>
          <input type="range" max="100" className="w-full" />
          <div className="text-center mt-2">Max: <span className="font-semibold">$100.00</span></div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Car Card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex">
            {/* Car Image */}
            <div className="w-1/3">
              <Image
                src="/car.png"
                alt="Car Image"
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>

            {/* Car Details */}
            <div className="ml-6 flex-1">
              <h2 className="text-2xl font-bold mb-2">Nissan GT - R</h2>
              <p className="text-gray-500">
                NISMO has become the embodiment of Nissan&apos;s outstanding performance, inspired by the
                most unforgiving proving ground, the &quot;race track&quot;.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-4 text-gray-600">
                <div>Type: <span className="font-medium">Sport</span></div>
                <div>Capacity: <span className="font-medium">2 Person</span></div>
                <div>Steering: <span className="font-medium">Manual</span></div>
                <div>Gasoline: <span className="font-medium">70L</span></div>
              </div>
            </div>
          </div>

          {/* Price and Button */}
          <div className="mt-6 flex justify-between items-center">
            <div>
              <span className="text-2xl font-bold">$80.00</span>
              <span className="text-gray-400 ml-2 line-through">$100.00</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Rent Now
            </button>
          </div>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Reviews</h3>
            <div className="space-y-4">
              {/* Review 1 */}
              <div className="border-b pb-2">
                <div className="flex items-center">
                  <Image
                    src="/profile.png"
                    alt="User 1"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-semibold">Alex Stanton</p>
                    <p className="text-gray-400 text-sm">CEO at Bukalapak</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">
                  We are very happy with the service from the MORENT App. The price is low, and the variety of cars is excellent.
                </p>
              </div>

              {/* Review 2 */}
              <div>
                <div className="flex items-center">
                  <Image
                    src="/girl.jpeg"
                    alt="User 2"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-semibold">Skylar Dias</p>
                    <p className="text-gray-400 text-sm">CEO at Amazon</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-2">
                  The service was excellent, and the cars were comfortable. I highly recommend using this application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

