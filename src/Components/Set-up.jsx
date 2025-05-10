import StepCard from "./stepCard.jsx";

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
    <section className="bg-gradient-to-r from-indigo-700 to-purple-800 py-10 px-4 sm:py-16 sm:px-6 text-white text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">
        Three easy steps to cash in your software
      </h2>
      <div className="flex flex-col gap-8 sm:flex-row sm:justify-center sm:items-center sm:gap-10">
        {steps.map((step) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}