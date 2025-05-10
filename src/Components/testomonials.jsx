import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      quote:
        "SoftSell turned our unused licenses into actual revenue in just two days. The process was seamless.",
      name: "Amit Kapoor",
      role: "IT Manager",
      company: "NeoTech Solutions",
    },
    {
      quote:
        "Their valuation system is spot-on, and the customer support team was incredibly responsive throughout.",
      name: "Rachel Chen",
      role: "Procurement Lead",
      company: "CoreWave Systems",
    },
  ];

  return (
    <section className="bg-gray-100 text-gray-800 py-20 px-6 md:px-16">
      <motion.h2
        className="text-3xl font-bold text-center mb-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Our Clients Say
      </motion.h2>
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p className="text-gray-600 italic text-base mb-6">“{review.quote}”</p>
            <div className="text-blue-600 font-semibold">{review.name}</div>
            <div className="text-sm text-gray-600">
              {review.role}, {review.company}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
