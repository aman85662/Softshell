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
    <section className="bg-slate-950 text-white py-20 px-6 md:px-16">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-cyan-400 drop-shadow-md">
        What Our Clients Say
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10"
          >
            <p className="text-gray-300 italic text-base mb-6">“{review.quote}”</p>
            <div className="text-cyan-300 font-semibold">{review.name}</div>
            <div className="text-sm text-gray-400">{review.role}, {review.company}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
