import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    branch: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const services = ["Diet Plans", "Workout Plans", "Both"];

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md second">
      <div className="flex gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-base text-white leading-7">
            Name
          </label>
          <input
            type="text"
            placeholder="Kamal Raj"
            className="w-full px-4 py-3 bg-[#1a1a1a] rounded-lg border text-sm border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-base text-white leading-7">
            Phone
          </label>
          <input
            type="tel"
            placeholder="9876543210"
            className="w-full px-4 py-3 bg-[#1a1a1a] rounded-lg text-sm border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-base text-white leading-7">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 bg-[#1a1a1a] rounded-lg border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="service" className="text-base text-white leading-7">
          Services
        </label>
        <select
          className="w-full px-4 py-3 bg-[#1a1a1a] text-sm rounded-lg border border-gray-700 text-white focus:outline-none focus:border-red-500"
          value={formData.service}
          onChange={(e) =>
            setFormData({ ...formData, service: e.target.value })
          }
        >
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 text-base bg-[#760000] text-black rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300"
      >
        Submit
      </button>
    </form>
  );
}
