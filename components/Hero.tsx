import React from "react";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 bg-gray-100 p-6 rounded">
      <div>
        <h1 className="text-2xl font-bold mb-2">Live Streaming 2026</h1>
        <p className="text-sm text-gray-600 mb-4">
          fsgs Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has
        </p>

        <div className="flex gap-3">
          <button className="bg-gray-400 text-white px-0 py-2 rounded text-sm">
            Tonton sekarang
          </button>
          <button className="bg-gray-300 px-4 py-2 rounded text-sm">
            Selengkapnya
          </button>
        </div>
      </div>

      <div className="bg-gray-500 rounded h-48 md:h-auto"></div>
    </section>
  );
};

export default Hero;
