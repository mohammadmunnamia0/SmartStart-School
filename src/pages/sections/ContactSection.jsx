import React from "react";

const ContactSection = () => (
  <section className="py-16 px-4">
    <div className="max-w-xl mx-auto bg-gradient-to-br from-orange-200 to-pink-300 rounded-3xl shadow-xl p-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Let's Get Started</h2>
      <form className="space-y-4">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-1/2 px-4 py-2 rounded bg-white border border-gray-300"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-1/2 px-4 py-2 rounded bg-white border border-gray-300"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded bg-white border border-gray-300"
        />
        <input
          type="text"
          placeholder="Phone"
          className="w-full px-4 py-2 rounded bg-white border border-gray-300"
        />
        <textarea
          placeholder="Message"
          className="w-full px-4 py-2 rounded bg-white border border-gray-300"
          rows="3"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-orange-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
