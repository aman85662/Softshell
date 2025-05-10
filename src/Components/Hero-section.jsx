import React from 'react';
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white py-24 px-6 md:px-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Turn Unused Software into Real Money
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          SoftSell helps businesses resell surplus software licenses securely and instantly. Free up your budget and monetize unused assets in minutes.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-2xl text-lg transition duration-300 shadow-lg">
          Sell My Licenses
        </button>
      </div>
    </section>
  );
}
