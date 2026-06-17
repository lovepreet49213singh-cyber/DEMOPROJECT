import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./Homepage";

export default function CustomerLayout() {
  return (
    <>
      <Navbar />
      <Homepage />

      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Welcome to RealEstate</h2>
          <p className="text-lg mb-6">
            Discover your perfect garage or parking space with us. Whether you're
            looking to rent or buy, we have a wide range of options to suit your
            needs. Start exploring today and find the ideal space for your vehicle!
          </p>
          <a href="/Listing" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Explore Listings
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
