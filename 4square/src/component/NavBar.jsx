// 
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close the menu after navigation
  };

//   const handleServicesClick = () => {
//     // Only perform smooth scroll if we are on the home page, otherwise navigate to the page first
//     if (window.location.pathname === "/") {
//       const servicesSection = document.getElementById("services");
//       if (servicesSection) {
//         servicesSection.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       // Navigate to Home and then scroll to services
//       navigate("/#services");
//     }
//   };

const handleServicesClick = () => {
    // First, navigate to the home page
    navigate("/");

    // Then scroll to the services section after a slight delay to ensure the page has loaded
    setTimeout(() => {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Timeout to ensure smooth scrolling works after navigation
  };


// const handleServicesClick = () => {
//     // Scroll to the 'services' section
//     const servicesSection = document.getElementById('services');
//     if (servicesSection) {
//       servicesSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };


  return (
    <nav className="bg-gray-100 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center max-w-full">
        {/* Logo/Title with animation */}
        <div className="text-3xl font-bold text-primary animate-bounce">
          <span
            className="hover:text-secondary transition duration-300 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            Square Mercantile Corporation
          </span>
        </div>

        {/* Menu for larger screens */}
        <ul className="hidden lg:flex space-x-8 font-semibold text-gray-600">
          <li
            className="hover:text-primary transition duration-300 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            Home
          </li>
          <li
            className="hover:text-primary transition duration-300 cursor-pointer"
            onClick={() => handleNavigation('/about')}
          >
            About
          </li>

          {/* Services with smooth scroll */}
          <li
            className="hover:text-primary transition duration-300 cursor-pointer"
            onClick={handleServicesClick}
          >
            Services
          </li>

          <li
            className="hover:text-primary transition duration-300 cursor-pointer"
            onClick={() => handleNavigation('/contact')}
          >
            Contact
          </li>
        </ul>

        {/* Hamburger Menu Button for mobile */}
        <button
          className="lg:hidden text-2xl text-gray-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className="ri-menu-line"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100">
          <ul className="flex flex-col items-center space-y-4 py-4 font-semibold text-gray-600">
            <li
              className="hover:text-primary transition duration-300 cursor-pointer"
              onClick={() => handleNavigation('/')}
            >
              Home
            </li>
            <li
              className="hover:text-primary transition duration-300 cursor-pointer"
              onClick={() => handleNavigation('/about')}
            >
              About
            </li>
            <li
              className="hover:text-primary transition duration-300 cursor-pointer"
              onClick={handleServicesClick}
            >
              Services
            </li>
            <li
              className="hover:text-primary transition duration-300 cursor-pointer"
              onClick={() => handleNavigation('/contact')}
            >
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
