import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./Homepage";

export default function CustomerLayout() {
  return (
    <>
      <Navbar />
      {/* hero banner section */}
      <section className="relative h-screen bg-gray-900">
        <img
          src="/hero.jpg"
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find Your Perfect Home
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Explore our listings and discover the best properties for sale or rent.
          </p>
          <a
            href="/Listing"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Explore Listings
          </a>
        </div>
      </section>
   


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
