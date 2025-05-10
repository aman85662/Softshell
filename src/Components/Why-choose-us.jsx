import { ShieldCheck, Clock, DollarSign, Headset } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={40} className="text-cyan-400" />,
    title: "Secure Transactions",
    desc: "End-to-end encrypted processes to ensure your data and licenses stay protected.",
  },
  {
    icon: <Clock size={40} className="text-cyan-400" />,
    title: "Fast Payments",
    desc: "We process and transfer funds within 48 hours of license approval.",
  },
  {
    icon: <DollarSign size={40} className="text-cyan-400" />,
    title: "Best Market Value",
    desc: "Smart valuation engine ensures you get the highest resale price possible.",
  },
  {
    icon: <Headset size={40} className="text-cyan-400" />,
    title: "Enterprise Support",
    desc: "Dedicated customer support to guide you through every step of the process.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-900 py-20 px-6 md:px-16 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-cyan-400 drop-shadow-md">
        Why Choose SoftSell?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/10 hover:shadow-cyan-500/30 transition duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-cyan-100">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
