import react from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function Contact() {
  return (
    <>
    <Navbar />
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-6">Get in touch with us for any inquiries or support.</p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Homepage
      </Link>
    </div>
    <Footer />
    </>
  );
}
export default Contact;