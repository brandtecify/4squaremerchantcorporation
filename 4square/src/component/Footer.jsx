import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      {/* Main Content */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">About Us</h2>
          <p className="text-gray-400">
            We deliver tailored solutions and strategic expertise to help your business thrive in a competitive world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-primary transition duration-300">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-primary transition duration-300">About Us</a>
            </li>
            <li>
              <a href="/services" className="hover:text-primary transition duration-300">Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-primary transition duration-300">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact Us</h2>
          <address className="not-italic text-gray-400">
            123 Business Lane, Suite 456<br />
            City, State, 12345<br />
            <a href="mailto:info@company.com" className="block hover:text-primary">info@company.com</a>
            <a href="tel:+1234567890" className="block hover:text-primary">+1 234 567 890</a>
          </address>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      {/* Bottom Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-gray-500 text-sm">&copy; 2024 BrandTecify. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-500 hover:text-primary">
            <i className="ri-facebook-fill text-2xl"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-primary">
            <i className="ri-twitter-fill text-2xl"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-primary">
            <i className="ri-instagram-fill text-2xl"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-primary">
            <i className="ri-linkedin-fill text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
