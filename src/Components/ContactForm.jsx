import { useState } from "react";

export default function ContactForm() {
  const [, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (No backend connected)");
  };

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">
        Get In Touch
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md grid grid-cols-1 gap-6"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="bg-gray-50 text-gray-800 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="bg-gray-50 text-gray-800 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          required
          className="bg-gray-50 text-gray-800 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={handleChange}
        />
        <select
          name="licenseType"
          required
          className="bg-gray-50 text-gray-800 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={handleChange}
        >
          <option value="">Select License Type</option>
          <option value="Windows">Windows</option>
          <option value="Microsoft Office">Microsoft Office</option>
          <option value="Adobe Creative Cloud">Adobe Creative Cloud</option>
          <option value="Enterprise Software">Enterprise Software</option>
        </select>
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="bg-gray-50 text-gray-800 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg transition duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
