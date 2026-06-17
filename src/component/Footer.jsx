import React from 'react';
import { NavLink } from 'react-router-dom';




export default function Footer() {
 
  return (
       <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        
        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} GarageGo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
