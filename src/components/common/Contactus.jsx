import { useState } from "react";
import SectionTitle from "../Layout/SectionTitle";
import Container from "../Layout/Container";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requestType: "",
    message: "",
  });

  const [status, setStatus] = useState(null);
  const [showPopup, setShowPopup] = useState(false);  // new state to control popup

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
        setShowPopup(true); // show popup
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  // Popup close handler
  const closePopup = () => {
    setShowPopup(false);
    setStatus(null); // reset status so form shows again if needed
  };

  return (
    <>
      <section className="section bg-gray-50 forbg">
        <Container>
          <div className="lg:w-[900px] mb-[30px]">
            <SectionTitle subtitle="" title="Connect with us" content="" />
            <h2 className="text-[#000]">How can we help?</h2>
          </div>
          <div className="grid lg:grid-cols-12">
            <div className="col-span-8">
              {/* Show form only if popup is not visible */}
              {!showPopup && (
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
                        status === "invalid-request-type"
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      required
                    >
                      <option value="">What can we help you with?</option>
                      <option value="Custom Software Development">
                        Custom Software Development
                      </option>
                      <option value="Web Application Development">
                        Web Application Development
                      </option>
                      <option value="Mobile App Development">
                        Mobile App Development
                      </option>
                      <option value="Artificial Intelligence">
                        Artificial Intelligence
                      </option>
                      <option value="Process Automation"> Process Automation</option>
                      <option value="IT Consulting & Strategy">
                        IT Consulting & Strategy
                      </option>
                    </select>
                    {status === "invalid-request-type" && (
                      <p className="text-sm text-red-600">
                        Please enter a valid request type
                      </p>
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

                  {status === "loading" && (
                    <p className="text-sm text-gray-500 mt-2">Sending...</p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-red-600 mt-2">
                      Failed to send message. Try again.
                    </p>
                  )}
                </form>
              )}

              {/* Popup after success */}
              {showPopup && (
                <div
                  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                  onClick={closePopup} // close when clicking outside box
                >
                  <div
                    className="bg-white rounded-md p-8 max-w-md text-center relative"
                    onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside popup
                  >
                    <h3 className="text-xl font-semibold mb-4">Thanks for your message!</h3>
                    <p>We'll get back to you as soon as we can.</p>
                    <button
                      onClick={closePopup}
                      className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contactus;
