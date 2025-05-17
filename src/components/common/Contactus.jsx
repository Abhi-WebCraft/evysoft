import { useState } from "react";
import SectionTitle from "../Layout/SectionTitle";
import Container from "../Layout/Container";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requestType: "", // New field
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    if (!formData.requestType) {
      setStatus("invalid-request-type");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.status === "success") {
        setStatus("success");
        setFormData({ name: "", email: "", requestType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="section bg-gray-50 form-bg">
      <Container>
        <div className="lg:w-[900px] mb-[30px]">
          <SectionTitle subtitle="" title="Connect with us" content="" />
          <h2 className="text-[#000]">How can we help?</h2>
        </div>
        <div className="grid lg:grid-cols-12">
          <div className="col-span-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                  className="w-full border border-gray-300 rounded-md p-4"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="w-full border border-gray-300 rounded-md p-4"
                  required
                />
                <select
                  name="requestType"
                  value={formData.requestType}
                  onChange={handleChange}
                  className={`w-full border rounded-md p-4 ${
                    status === "invalid-request-type" ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                >
                  <option value="">What can we help you with?</option>
                  <option value="Custom Software Development">Custom Software Development</option>
                  <option value="Web Application Development">Web Application Development</option>
                  <option value="Mobile App Development">Mobile App Development</option>
                   <option value="Artificial Intelligence">Artificial Intelligence</option>
                  <option value="Process Automation"> Process Automation</option>
                  <option value="IT Consulting & Strategy">IT Consulting & Strategy</option>
                </select>
                {status === "invalid-request-type" && (
                  <p className="text-sm text-red-600">Please enter a valid request type</p>
                )}
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write Your Message"
                className="w-full border border-gray-300 rounded-md p-4"
                required
              />

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-4 rounded-md"
              >
                MAKE AN APPOINTMENT
              </button>

              {status === "loading" && <p className="text-sm text-gray-500 mt-2">Sending...</p>}
              {status === "success" && (
                <p className="text-sm text-green-600 mt-2">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 mt-2">Failed to send message. Try again.</p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contactus;
