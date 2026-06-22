import react from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Contact() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-indigo-600 text-white py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Contact Us
        </h1>
        <p className="text-center mt-2 text-gray-200">
          We'd love to hear from you! Please fill out the form below or reach
          us through our contact details.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        {/* Contact Details */}
       <div className="bg-white p-6 rounded-lg shadow-lg">
        <img src="/hero.jpg" alt="Contact Image" className="w-full h-64 object-cover rounded-lg" />
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-4">
          Have questions or need assistance? Reach out to us through any of the
          following methods:
        </p>
       </div>

      {/* Contact Form */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <form className="bg-white p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      </div>
    <Footer />
    </div>
    </>
  );
}
export default Contact;