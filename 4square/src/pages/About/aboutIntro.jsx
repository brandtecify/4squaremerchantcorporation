import React from 'react'
import  LogoFourSquare from "../../logofile/index"
import GroupofCompanies from './GroupofCompanies';
import founders from "../../../public/images/founders.jpg"
import Footer from '../../component/Footer';

const aboutIntro = () => {




  return (
    <div className='h-screen'>
        <section className="relative py-32 md:py-16 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Content Column */}
          <div className="w-full lg:w-1/2 px-4 order-2 lg:order-1">
            <div className="relative pl-8">
            <span className="block text-red-600 font-medium text-lg mb-4">About Us</span>
              <div className="sec-title mb-16">
               
                <h2 className="text-4xl font-semibold text-gray-900 pb-4">
                "We have been a leader in  <br /> the industrial market since 1799, with a legacy of innovation and excellence spanning over 225 years."
                </h2>
              </div>
              <p className="text-lg leading-7 text-gray-600 mb-8">
Four Square Mercantile Corporation has a rich history of 225 years, starting in the colonial British era. Our company was founded by Mr. Lona in 1799 AD, originally trading spices and tobacco.

During the 1st and 2nd World Wars, Mr. Lona’s son expanded the business to include wooden boxes. After World War II, the company opened three wholesale outlets: one in Mattancherry, Cochin for tobacco export, one in Rajas Street, Coimbatore for jewels, and another in our homeland for alcohol and medicinal plants.

In 2020, the current generation, led by Mr. Austin Cherussery, rebranded the company as Four Square Mercantile Corporation. We also moved our business headquarters to Bangalore to make operations easier and more efficient.

Today, Four Square Mercantile Corporation continues its legacy, combining tradition with modern solutions to grow and succeed in the B2B sector.
              </p>
              {/* <ul className="list-none space-y-4 mb-12">
                <li className="flex items-start text-lg text-gray-800">
                  <svg className="w-5 h-5 text-red-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Lorem Ipsum is simply dummy text
                </li>
                <li className="flex items-start text-lg text-gray-800">
                  <svg className="w-5 h-5 text-red-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Consectetur adipisicing elit
                </li>
                <li className="flex items-start text-lg text-gray-800">
                  <svg className="w-5 h-5 text-red-600 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Sed do eiusmod tempor incididunt
                </li>
              </ul> */}
              <div className="btn-box">
                <a href="#" className="inline-block px-12 py-4 text-lg font-semibold text-white bg-red-600 hover:bg-blue-900 transition-colors duration-200">
                  Contact Us
                </a>
              </div>
            </div>
          </div>

         

          <div className="w-full lg:w-1/2 px-4">
  <div className="relative">
    <img src={founders} className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl" />
  </div>
</div>

        </div>
      </div>
    </section>
     
  
    <GroupofCompanies/>
   <Footer/>
      </div>
  )
}

export default aboutIntro







// import React from 'react';

// const AboutSection = () => {
//   return (
  
//   );
// };

// export default AboutSection;
