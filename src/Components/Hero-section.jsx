import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gray-100 text-gray-800 py-24 px-6 md:px-16 text-center">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Transform Unused Software into Value
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          SoftSell helps businesses resell surplus software licenses securely and instantly. Free up your budget and monetize unused assets in minutes.
        </p>
        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
}
