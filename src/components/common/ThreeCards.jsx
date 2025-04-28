import React from "react";

const steps = [
  {
    number: "01",
    title: "Select a project",
    description: "Continua scale empowered metrics with cost effective innovation.",
    icon: "📝", // You can replace with real SVGs if you have
  },
  {
    number: "02",
    title: "Project analysis",
    description: "Continua scale empowered metrics with cost effective innovation.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Plan Execute",
    description: "Continua scale empowered metrics with cost effective innovation.",
    icon: "⚙️",
  },
  {
    number: "04",
    title: "Deliver result",
    description: "Continua scale empowered metrics with cost effective innovation.",
    icon: "📈",
  },
];

const ThreeCards = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 text-center ">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 relative "
            >
              {/* Circle number */}
              <div className="absolute -top-8 left-5 transform -translate-x-1/2">
                <div className="bg-indigo-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold border-4 border-indigo-200">
                  {step.number}
                </div>
              </div>

              {/* Icon */}
              <div className="text-indigo-600 text-4xl mb-4">{step.icon}</div>

              {/* Title */}
              <h4 className="text-xl font-bold mb-2">{step.title}</h4>

              {/* Description */}
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeCards;
