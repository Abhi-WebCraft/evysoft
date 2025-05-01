// File: components/Contactus.js
"use client";

import { useState } from "react";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    if (result.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  };

  return (
    <section className="section bg-gray-50 form-bg">
      <Container>
        <div className="lg:w-[900px] mb-[30px]">
          <SectionTitle
            subtitle="CONTACT WITH US!"
            title="Have Any Questions?"
            content="Enthusiastically disintermediate one-to-one leadership via business e-commerce. Dramatically reintermediate compelling process improvements rather than empowered relationships."
          />
        </div>
        <div className="grid lg:grid-cols-12">
          <div className="col-span-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="w-full border border-gray-300 rounded-md p-4"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="w-full border border-gray-300 rounded-md p-4"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <select
                  name="subject"
                  className="w-full border border-gray-300 rounded-md p-4"
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="">Select Subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Support">Support</option>
                  <option value="Feedback">Feedback</option>
                </select>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-md p-4"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                rows="5"
                placeholder="Write Your Message"
                className="w-full border border-gray-300 rounded-md p-4"
                required
                value={formData.message}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-4 rounded-md"
              >
                MAKE AN APPOINTMENT
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contactus;
