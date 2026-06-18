import react from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import { Listitems } from "../Dummydata/Properties.jsx";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Clock } from 'lucide-react';




function PropertyDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    
   
    const item = Listitems.find((x) => x.id === parseInt(id));
   
    
   
    
    
    
    return (
        <>

            <Navbar />
            <div className="h-screen flex flex-col items-center justify-center text-center">
                <h1 className="text-4xl font-bold mb-4">Property Detail</h1>
                <p className="text-lg mb-6">Here are the details of the selected property.</p>
                <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover mb-4" />
                    <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <h3 className="text-xl font-bold mb-2">Amenities:</h3>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        {item.amenities.map((amenity, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                               {amenity[1]}  {/* Display the icon and   label of the amenity */}
                            </span>
                        ))}
                    </div>
                </div>
                <Link to="/Listing" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6">
                    Back to Listings
                </Link>
                
            </div>
            <Footer />
        </>
    );
}
    export default PropertyDetail;