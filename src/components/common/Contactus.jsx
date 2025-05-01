import { useState } from "react";
import Container from "../Layout/Container";
import SectionTitle from "../Layout/SectionTitle";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    phone: "",
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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: `[Subject: ${formData.subject}]\n\n${formData.message}`,
        }),
      });

      const data = await res.json();

      if (data.status === "success") {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "General Inquiry", phone: "", message: "" });
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
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-4"
                >
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Feedback</option>
                </select>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 rounded-md p-4"
                />
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
