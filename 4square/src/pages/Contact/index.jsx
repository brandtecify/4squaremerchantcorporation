import React from 'react'
import Layout from '../../component/Layout'
import Address from './Address'
import ContactForm from './ContactForm'
import Footer from '../../component/Footer'

const Contact = () => {
  return (
   <>  
<div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-10 px-4 sm:px-6 lg:px-8">
  {/* Header */}
  <h1 className="text-4xl font-bold text-primary mb-6 text-center sm:text-2xl">
    Connect with Us
  </h1>
  <p className="text-gray-600 text-lg text-center mb-10 sm:text-base">
    We’re here to assist you. Fill out the form, or contact us through the details below.
  </p>

  <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
    {/* Contact Form */}
    <div className="bg-white shadow-lg rounded-lg p-8 sm:p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Form</h2>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white p-3 rounded-lg shadow hover:bg-secondary transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>

    {/* Contact Details */}
    <div className="bg-gray-100 shadow-lg rounded-lg p-8 sm:p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
      <div className="space-y-6">
        {/* Address Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Address</h3>
          <p className="text-gray-600">
            123 Business Street, Suite 100, <br /> Cityville, State 456789, Country
          </p>
        </div>

        {/* Contact Number Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
          <p className="text-gray-600">Main Office: +1 234 567 890</p>
          <p className="text-gray-600">Support: +1 987 654 321</p>
        </div>

        {/* Email Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Email Us</h3>
          <p className="text-gray-600">info@company.com</p>
          <p className="text-gray-600">support@company.com</p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <i className="ri-facebook-circle-fill text-primary text-3xl"></i>
            <i className="ri-twitter-fill text-primary text-3xl"></i>
            <i className="ri-instagram-fill text-primary text-3xl"></i>
            <i className="ri-linkedin-box-fill text-primary text-3xl"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
   </>
   
  )
}

export default Contact



