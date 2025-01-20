"use client";

import { useState } from "react";

export default function RentalForm() {
  const [paymentMethod, setPaymentMethod] = useState("credit");

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Billing Info */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Billing Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Your phone number"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Address</label>
            <input
              type="text"
              placeholder="Address"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Town / City</label>
            <input
              type="text"
              placeholder="Town or city"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      </section>

      {/* Rental Info */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Rental Info</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Pick-Up Location</label>
            <input
              type="text"
              placeholder="Enter pick-up location"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Time</label>
            <input type="time" className="w-full p-2 border rounded" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-1">Drop-Off Location</label>
            <input
              type="text"
              placeholder="Enter drop-off location"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <input type="date" className="w-full p-2 border rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Time</label>
            <input type="time" className="w-full p-2 border rounded" />
          </div>
        </div>
      </section>

      {/* Payment Method */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
        <div className="space-y-4">
          {/* Credit Card */}
          <div>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="credit"
                checked={paymentMethod === "credit"}
                onChange={() => setPaymentMethod("credit")}
                className="h-4 w-4"
              />
              Credit Card
            </label>
            {paymentMethod === "credit" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Expiration Date"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="Card Holder"
                  className="w-full p-2 border rounded"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-full p-2 border rounded"
                />
              </div>
            )}
          </div>
          {/* PayPal */}
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
              className="h-4 w-4"
            />
            PayPal
          </label>

          {/* Bitcoin */}
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="bitcoin"
              checked={paymentMethod === "bitcoin"}
              onChange={() => setPaymentMethod("bitcoin")}
              className="h-4 w-4"
            />
            Bitcoin
          </label>
        </div>
      </section>

      {/* Confirmation */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Confirmation</h2>
        <div className="mb-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-4 w-4" />
            I agree with the terms and conditions and privacy policy.
          </label>
        </div>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold">
          Rent Now
        </button>
      </section>
    </div>
  );
}
