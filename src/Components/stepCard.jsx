export default function StepCard({ number, title, description }) {
  return (
    <div className="flex flex-col items-center max-w-sm text-center px-6 py-8 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="text-4xl font-bold text-blue-600 mb-4">{number}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}