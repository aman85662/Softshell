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
    <section className="bg-slate-900 py-20 px-6 md:px-16 text-white">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-cyan-400 drop-shadow-md">
        Get In Touch
      </h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white/5 backdrop-blur-lg p-8 rounded-2xl shadow-xl grid grid-cols-1 gap-6"
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="bg-slate-800 text-white px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="bg-slate-800 text-white px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          required
          className="bg-slate-800 text-white px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          onChange={handleChange}
        />
        <select
          name="licenseType"
          required
          className="bg-slate-800 text-white px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
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
          className="bg-slate-800 text-white px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold text-lg transition duration-300"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
