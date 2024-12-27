// import React from 'react';

// const MainContext = () => {
//   const services = [
//     {
//       "name": "Export of Spices",
//       "description": "Specialized in the export of premium-quality spices, ensuring compliance with international standards to meet diverse culinary and industrial needs.",
//       "image": "images/spices-export.jpg"
//     },
//     {
//       "name": "Warehouse Racking & Shelving",
//       "description": "Offering durable and customizable racking and shelving solutions to optimize warehouse space and improve operational efficiency.",
//       "image": "images/racking.jpg"
//     },
//     {
//       "name": "Floor Epoxy",
//       "description": "Professional epoxy flooring solutions for industrial, commercial, and residential spaces, ensuring durability, aesthetics, and resistance to wear and tear.",
//       "image": "images/flooring-epoxy.jpg"
//     },
//     {
//       "name": "Handling Equipment",
//       "description": "Providing high-quality material handling equipment designed to streamline operations and improve productivity in industrial and warehouse settings.",
//       "image": "images/handleing-equpement.jpg"
//     },
//     {
//       "name": "Wooden Pallets, Boxes, and Crates",
//       "description": "Custom-built wooden pallets, boxes, and crates designed for strength and reliability, catering to various packaging and transportation needs.",
//       "image": "images/wooden_pallets_boxes_crates.jpg"
//     },
//     {
//       "name": "Fire Safety System",
//       "description": "Installation and maintenance of comprehensive fire safety systems to ensure compliance with safety regulations and protect assets and lives.",
//       "image": "images/fire_safety_system.jpg"
//     },
//     {
//       "name": "Smoke Detectors & Sprinklers",
//       "description": "Advanced smoke detection and sprinkler systems designed to provide early warning and fire suppression for enhanced safety.",
//       "image": "images/smoke_detector_sprinkler.jpg"
//     },
//     {
//       "name": "CCTV",
//       "description": "High-definition CCTV solutions for monitoring and securing residential, commercial, and industrial spaces with real-time surveillance.",
//       "image": "images/cctv.jpg"
//     },
//     {
//       "name": "PPE (Personal Protective Equipment)",
//       "description": "Supplying a wide range of certified PPE to ensure safety and compliance in various workplace environments.",
//       "image": "images/ppe.jpg"
//     }
//   ];

//   return (
//     <div className="container">
//    <h1 className="text-3xl font-semibold text-primary p-9 sm:mt-10 sm:text-xl sm:px-4 sm:py-2 whitespace-nowrap text-left">
//       Driving B2B Success:
//    </h1>

//    <h1 className="text-7xl font-semibold text-primary mt-10 p-9 text-center sm:text-3xl sm:p-5 sm:text-left sm:ml-0">
//       The <b className="text-secondary">Solution</b> is here
//    </h1>

//    <p className="text-gray-600 text-xl mt-1 mb-1 p-9 text-center sm:p-5 sm:text-base sm:text-left sm:mx-0 sm:w-full">
//       "Tailored Solutions, Strategic Partnerships, and Unmatched Expertise for Sustainable Business Growth."
//    </p>

//    <h1 className="text-7xl text-secondary text-center mt-10">Services</h1>

  
// <div className="grid grid-cols-1 gap-6 mt-10 sm:w-full sm:px-4 sm:mx-auto md:grid-cols-2 lg:grid-cols-3">
//   {services.map((service, index) => (
//     <div
//       className="border border-primary p-5 rounded transform hover:scale-105 duration-300 sm:w-full md:w-72 lg:w-80"
//       key={index}
//     >
//       <h1 className="text-xl font-bold text-center">{service.name}</h1>
//       <img
//         src={service.image}
//         alt={service.name}
//         className="mt-4 mx-auto sm:w-full sm:h-32 md:w-32 lg:w-36 object-cover"
//       />
//       <p className="mt-4 text-gray-700 text-center sm:mx-3">{service.description}</p>
//     </div>
//   ))}
// </div>

// </div>

//   );
// };

// export default MainContext;















 {/* <div className="grid grid-cols-2 gap-10 mt-10 sm:grid-cols-1">
      {services.map((service, index) => (
         <div
            className={`border border-primary p-5 rounded transform hover:scale-105 duration-300 sm:mx-5`}
            key={index}
         >
            <h1 className="text-xl font-bold text-center">{service.name}</h1>
            <img
               src={service.image}
               alt={service.name}
               className="mt-4 mx-auto w-36 h-36 md:w-32 md:h-32 sm:w-28 sm:h-28 object-cover"
            />
            <p className="mt-4 text-gray-700 text-center sm:mx-3">{service.description}</p>
         </div>
      ))}
   </div> */}


{/* <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {services.map((service, index) => (
    <div
      className="border border-primary p-5 rounded transform hover:scale-105 duration-300 sm:mx-5"
      key={index}
    >
      <h1 className="text-xl font-bold text-center">{service.name}</h1>
      <img
        src={service.image}
        alt={service.name}
         className="mt-4 mx-auto w-full sm:w-28 md:w-32 lg:w-36 object-cover"
      />
      <p className="mt-4 text-gray-700 text-center sm:mx-3">{service.description}</p>
    </div>
  ))}
</div> */}

{/* 
<div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:w-full">
  {services.map((service, index) => (
    <div
      className="border border-primary p-5 rounded transform hover:scale-105 duration-300 sm:mx-2 sm:w-full md:mx-10 lg:mx-12 w-full sm:max-w-xs  md:w-72 lg:w-80"
      key={index}
    >
      <h1 className="text-xl font-bold text-center">{service.name}</h1>
      <img
        src={service.image}
        alt={service.name}
        className="mt-4 mx-auto w-full sm:w-full md:w-32 lg:w-36 object-cover"
      />
      <p className="mt-4 text-gray-700 text-center sm:mx-3">{service.description}</p>
    </div>
  ))}
</div> */}




















import React from 'react';

const MainContext = () => {
  const services = [
    {
      "name": "Export of Spices",
      "description": "Specialized in the export of premium-quality spices, ensuring compliance with international standards to meet diverse culinary and industrial needs.",
      "image": "images/spices-export.jpg"
    },
    {
      "name": "Warehouse Racking & Shelving",
      "description": "Offering durable and customizable racking and shelving solutions to optimize warehouse space and improve operational efficiency.",
      "image": "images/racking.jpg"
    },
    {
      "name": "Floor Epoxy",
      "description": "Professional epoxy flooring solutions for industrial, commercial, and residential spaces, ensuring durability, aesthetics, and resistance to wear and tear.",
      "image": "images/flooring-epoxy.jpg"
    },
    {
      "name": "Handling Equipment",
      "description": "Providing high-quality material handling equipment designed to streamline operations and improve productivity in industrial and warehouse settings.",
      "image": "images/handleing-equpement.jpg"
    },
    {
      "name": "Wooden Pallets, Boxes, and Crates",
      "description": "Custom-built wooden pallets, boxes, and crates designed for strength and reliability, catering to various packaging and transportation needs.",
      "image": "images/wooden_pallets_boxes_crates.jpg"
    },
    {
      "name": "Fire Safety System",
      "description": "Installation and maintenance of comprehensive fire safety systems to ensure compliance with safety regulations and protect assets and lives.",
      "image": "images/fire_safety_system.jpg"
    },
    {
      "name": "Smoke Detectors & Sprinklers",
      "description": "Advanced smoke detection and sprinkler systems designed to provide early warning and fire suppression for enhanced safety.",
      "image": "images/smoke_detector_sprinkler.jpg"
    },
    {
      "name": "CCTV",
      "description": "High-definition CCTV solutions for monitoring and securing residential, commercial, and industrial spaces with real-time surveillance.",
      "image": "images/cctv.jpg"
    },
    {
      "name": "PPE (Personal Protective Equipment)",
      "description": "Supplying a wide range of certified PPE to ensure safety and compliance in various workplace environments.",
      "image": "images/ppe.jpg"
    }
  ];

  return (
    <div className="container">
      <h1 className="text-3xl font-semibold text-primary p-9 sm:mt-10 sm:text-xl sm:px-4 sm:py-2 whitespace-nowrap text-left">
        Driving B2B Success:
      </h1>

      <h1 className="text-7xl font-semibold text-primary mt-10 p-9 text-center sm:text-3xl sm:p-5 sm:text-left sm:ml-0">
        The <b className="text-secondary">Solution</b> is here
      </h1>

      <p className="text-gray-600 text-xl mt-1 mb-1 p-9 text-center sm:p-5 sm:text-base sm:text-left sm:mx-0 sm:w-full">
        "Tailored Solutions, Strategic Partnerships, and Unmatched Expertise for Sustainable Business Growth."
      </p>

      <h1 className="text-7xl text-secondary text-center mt-10">Services</h1>

      {/* <div className="grid grid-cols-1 gap-6 mt-10 sm:px-4 sm:mx-auto md:grid-cols-2 lg:grid-cols-3 sm:w-full">
        {services.map((service, index) => (
          <div
            className="border border-primary p-5 rounded transform hover:scale-105 duration-300 sm:mx-3 sm:w-full md:w-72 lg:w-80 mx-auto"
            key={index}
          >
            <h1 className="text-xl font-bold text-center">{service.name}</h1>
            <img
              src={service.image}
              alt={service.name}
              className="mt-4 mx-auto sm:w-80 sm:h-40 md:w-32 lg:w-36 object-cover"
            />
            <p className="mt-4 text-gray-700 text-center sm:mx-3">{service.description}</p>
          </div>
        ))}
      </div> */}

<div className="grid grid-cols-1 gap-6 mt-10 sm:px-4 sm:mx-auto md:grid-cols-2 lg:grid-cols-3 sm:w-full" id='services'>
  {services.map((service, index) => (
    <div
      className="border border-gray-200 shadow-lg p-6 rounded-lg transform hover:scale-105 hover:shadow-2xl duration-300 bg-white sm:mx-auto sm:w-full md:w-72 lg:w-80"
      key={index}
    >
      <div className="flex flex-col items-center">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          {service.name}
        </h1>
        <p className="text-gray-600 text-center text-sm sm:text-base">
          {service.description}
        </p>
      </div>
    </div>
  ))}
</div>

    </div>

//    <div className="container">
//   <h1 className="text-3xl font-semibold text-primary p-9 sm:mt-10 sm:text-xl sm:px-4 sm:py-2 whitespace-nowrap text-left">
//     Driving B2B Success:
//   </h1>

//   <h1 className="text-7xl font-semibold text-primary mt-10 p-9 text-center sm:text-3xl sm:p-5 sm:text-left sm:ml-0">
//     The <b className="text-secondary">Solution</b> is here
//   </h1>

//   <p className="text-gray-600 text-xl mt-1 mb-1 p-9 text-center sm:p-5 sm:text-base sm:text-left sm:mx-0 sm:w-full">
//     "Tailored Solutions, Strategic Partnerships, and Unmatched Expertise for Sustainable Business Growth."
//   </p>

//   <h1 className="text-7xl text-secondary text-center mt-10">Services</h1>

//   <div className="grid grid-cols-1 gap-6 mt-10 sm:px-4 sm:mx-auto md:grid-cols-2 lg:grid-cols-3 sm:w-full">
//     {services.map((service, index) => (
//       <div
//         className="border border-primary p-5 rounded transform hover:scale-105 duration-300 sm:mx-3 sm:w-full sm:h-60 md:w-72 lg:w-80 mx-auto"
//         key={index}
//       >
//         <h1 className="text-xl font-bold text-center">{service.name}</h1>
//         <img
//           src={service.image}
//           alt={service.name}
//           className="mt-4 mx-auto sm:w-full sm:h-40 md:w-32 lg:w-36 object-cover"
//         />
//         <p className="mt-4 text-gray-700 text-center sm:mx-3">{service.description}</p>
//       </div>
//     ))}
//   </div>
// </div>


  );
};

export default MainContext;
