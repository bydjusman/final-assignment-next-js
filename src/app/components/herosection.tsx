// import React from "react";

// const cars = [
//   {
//     name: "Koenigsegg",
//     type: "Sport",
//     fuelCapacity: "90L",
//     transmission: "Manual",
//     seats: "2 People",
//     price: 99,
//     image: "/images/koenigsegg.png",
//     discount: null,
//   },
//   {
//     name: "Nissan GT-R",
//     type: "Sport",
//     fuelCapacity: "80L",
//     transmission: "Manual",
//     seats: "2 People",
//     price: 80,
//     image: "/images/nissan-gtr.png",
//     discount: "$100.00",
//   },
//   {
//     name: "Rolls-Royce",
//     type: "Sedan",
//     fuelCapacity: "70L",
//     transmission: "Manual",
//     seats: "4 People",
//     price: 96,
//     image: "/images/rolls-royce.png",
//     discount: null,
//   },
// ];

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-md">
//           <div>
//             <h2 className="text-lg font-semibold">Pick-Up</h2>
//             <div className="grid grid-cols-3 gap-4 mt-4">
//               <div>
//                 <label className="text-sm text-gray-500">Location</label>
//                 <input
//                   type="text"
//                   placeholder="Select your city"
//                   className="w-full border-gray-300 p-2 rounded-md"
//                 />
//               </div>
//               <div>
//                 <label className="text-sm text-gray-500">Date</label>
//                 <input
//                   type="date"
//                   className="w-full border-gray-300 p-2 rounded-md"
//                 />
//               </div>
//               <div>
//                 <label className="text-sm text-gray-500">Time</label>
//                 <input
//                   type="time"
//                   className="w-full border-gray-300 p-2 rounded-md"
//                 />
//               </div>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-lg font-semibold">Drop-Off</h2>
//             <div className="grid grid-cols-3 gap-4 mt-4">
//               <div>
//                 <label className="text-sm text-gray-500">Location</label>
//                 <input
//                   type="text"
//                   placeholder="Select your city"
//                   className="w-full border-gray-300 p-2 rounded-md"
//                 />
//               </div>
//               <div>
//                 <label className="text-sm text-gray-500">Date</label>
//                 <input
//                   type="date"
//                   className="w-full border-gray-300 p-2 rounded-md"
//                 />
//               </div>
//               <div>
//                 <label className="text-sm text-gray-500">Time</label>
//                 <input
//                   type="time"
//                   className="w-full border-gray-300 p-2 rounded-md"
//                 />
//               </div>
              
//             </div>
//           </div>
//         </div>

//         {/* Car Listings */}
//         <h3 className="mt-8 text-xl font-semibold">Popular Cars</h3>
//         <div className="grid grid-cols-4 gap-6 mt-4">
//           {cars.map((car, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
//             >
//               <img
//                 src={car.image}
//                 alt={car.name}
//                 className="w-full h-40 object-contain mb-4"
//               />
//               <h4 className="text-lg font-semibold">{car.name}</h4>
//               <p className="text-gray-500 text-sm">{car.type}</p>
//               <div className="flex justify-between w-full text-sm text-gray-500 mt-4">
//                 <span>{car.fuelCapacity}</span>
//                 <span>{car.transmission}</span>
//                 <span>{car.seats}</span>
//               </div>
//               <div className="mt-4">
//                 <span className="text-lg font-bold text-blue-600">
//                   ${car.price.toFixed(2)}/day
//                 </span>
//                 {car.discount && (
//                   <span className="text-sm line-through text-gray-400 ml-2">
//                     {car.discount}
//                   </span>
//                 )}
//               </div>
//               <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg">
//                 Rent Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
