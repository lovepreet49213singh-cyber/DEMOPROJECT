import react from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { Listitems } from "../Dummydata/Properties.jsx";
import { useNavigate } from "react-router-dom";

function Listing() {
    const navigate = useNavigate();
    

  return (


    <>
    <Navbar />

    <section className="bg-gray-100 py-12">
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">Listing Page</h1>
      <p className="text-lg mb-6">Explore our listings of garages and parking spaces.</p>
      <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Homepage
      </Link>
    </div>
    </section>

    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Available Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Listitems.map((item) => (
                
                <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                    <Link to={`/property/${item.id}`} className="block">
                        <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-700 mb-4">{item.description}</p>
                        <p className="text-gray-900 font-bold">${item.price}</p>
                    </Link>

                    <button onClick={() => navigate(`/property/${item.id}`)} className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition font-medium">
                        View Details
                    </button>

                </div>  
            ))}
        </div>
      </div>
    </section>



    <Footer />
   </>
  );
}
export default Listing;