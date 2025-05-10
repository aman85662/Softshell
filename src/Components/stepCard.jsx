export default function StepCard({ number, title, description }) {
  return (
    <div className="flex flex-col items-center max-w-sm text-center px-4 py-6 bg-white/10 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition duration-300">
      <div className="text-5xl font-bold text-cyan-300 mb-2">{number}</div>
      <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
      <p className="text-sm text-gray-200">{description}</p>
    </div>
  );
}