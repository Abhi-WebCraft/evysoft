// src/components/Common/Form.jsx
import React from 'react';

export default function Form() {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Your Name" className="bg-gray-800 text-white p-2 rounded" />
      <input type="email" placeholder="Your Email" className="bg-gray-800 text-white p-2 rounded" />
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
