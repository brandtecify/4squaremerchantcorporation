import React from 'react';

const GroupofCompanies = () => {
  const groupOfCompanies = [
    {
      name: "Shiva Power Tech",
      description: "Shiva Power Tech specializes in the production of high-quality wooden pellets, offering efficient energy solutions for various industrial and residential needs.",
      image: "images/shivaspower.jpg" // Replace with the actual image path
    },
    {
      name: "Vaikund International",
      description: "Vaikund International is a leading company in export and import, focusing on global trade and distribution of a wide range of goods, ensuring quality and reliability in every transaction.",
      image: "images/vaikund.png" // Replace with the actual image path
    },
    {
      name: "Techno Packers",
      description: "Techno Packers provides innovative packaging solutions, specializing in the design and manufacture of custom packaging that ensures the safe transportation of goods across industries.",
      image: "images/techopacker.png" // Replace with the actual image path
    }
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8 tracking-wide">
        Group of Companies
      </h1>

      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        {/* The grid will center the 3 items, no more than that */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 py-10 max-w-screen-lg">
          {groupOfCompanies.map((item, index) => (
            <div className="flex flex-col items-center p-5 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-48 object-cover mb-4 rounded-full"
              />
              <h2 className="text-center font-semibold text-xl text-gray-800">{item.name}</h2>
              <p className="text-center text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroupofCompanies;
