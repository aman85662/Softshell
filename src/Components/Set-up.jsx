import StepCard from "./stepCard.jsx";
import { motion } from "framer-motion";

export default function SetUp() {
  const steps = [
    {
      number: "1",
      title: "Upload License",
      description: "Send us your unused licenses through our secure portal.",
    },
    {
      number: "2",
      title: "Get Valuation",
      description: "We evaluate the resale value of your licenses.",
    },
    {
      number: "3",
      title: "Get Paid",
      description: "Receive payment directly to your account within 48 hours.",
    },
  ];

  return (
    <section className="bg-gray-100 py-10 px-4 sm:py-16 sm:px-6 text-gray-800 text-center">
      <motion.h2
        className="text-3xl font-bold mb-8 sm:mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        How It Works
      </motion.h2>
      <motion.div
        className="flex flex-col gap-8 sm:flex-row sm:justify-center sm:items-center sm:gap-10"
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
        {steps.map((step) => (
          <motion.div
            key={step.number}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <StepCard
              number={step.number}
              title={step.title}
              description={step.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}