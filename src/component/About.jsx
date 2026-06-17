import react from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function About() {
  return (
    <>
    <Navbar />
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <section className="mt-25">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-6">Learn more about our company and mission.</p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Homepage
      </Link>
    </section>
    
    <section className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
      <p className="text-lg mb-6 px-4">Our mission is to provide high-quality products and services that improve the lives of our customers.</p>
    </section>
    <section className="mt-10 ">
      <h2 className="text-2xl font-bold mb-4">Our Team</h2>
      <p className="text-lg mb-6 px-4">We have a dedicated team of professionals who are passionate about what they do and are committed to</p>
    </section>
    </div>
    <Footer />
    </>
  );
}

export default About;