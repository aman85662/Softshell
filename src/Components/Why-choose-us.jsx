import { ShieldCheck, Clock, DollarSign, Headset } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <ShieldCheck size={40} className="text-blue-600" />,
    title: "Secure Transactions",
    desc: "End-to-end encrypted processes to ensure your data and licenses stay protected.",
  },
  {
    icon: <Clock size={40} className="text-blue-600" />,
    title: "Fast Payments",
    desc: "We process and transfer funds within 48 hours of license approval.",
  },
  {
    icon: <DollarSign size={40} className="text-blue-600" />,
    title: "Best Market Value",
    desc: "Smart valuation engine ensures you get the highest resale price possible.",
  },
  {
    icon: <Headset size={40} className="text-blue-600" />,
    title: "Enterprise Support",
    desc: "Dedicated customer support to guide you through every step of the process.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16 text-gray-800">
      <motion.h2
        className="text-3xl font-bold text-center mb-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why Choose SoftSell?
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto"
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
        {features.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
