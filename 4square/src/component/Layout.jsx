// import React from 'react'
// import {Link, useLocation, useNavigate } from 'react-router-dom'; // Import Link here
// import 'remixicon/fonts/remixicon.css';



// const Layout = ({children}) => {
 
//      const navigate = useNavigate();

//     const location = useLocation();


//     const menuItems = [
//         {
//             title:"Home",
//             path:'/',
//             icon:'ri-home-8-fill',
//         },
//         {
//             title:'About',
//             path:'/about',
//             icon:'ri-information-line',
//         },
        
       
//         {  
//             title:'Contact',
//             path:'/contact',
//             icon:'ri-contacts-fill',
//         }

//     ]
//   return (
//     <div>
//         {/* content */}
//         <div className="content pb-44">
//               {children}
//         </div>
//         {/* footer */}
//        <div className="fixed bottom-10 left-0 right-0 sm:bottom-0">
//        <div className="flex w-full justify-center ">
//             {menuItems.map((item,index)=>(
//                 <div className='flex flex-col justify-end items-center' key={item.title}>
//                 {location.pathname === item.path &&(
//                     <div className='flex flex-col  items-center sm:hidden '>

//                     <div className='h-5 w-10 bg-gray-500 rounded-t-full'>
                      
//                     </div>
//                      <div className='h-5 w-20 bg-gray-500 rounded-t-full text-center  '>
//                       <i className={`${item.icon}  text-xl text-white  `}></i>
//                      </div>
// </div>
//                 )}
//                 <div 
//                 className={`px-20 sm:px-10  py-5  bg-gray-200  flex items-center justify-center space-x-2 ${index === 0 && "rounded-l"}
//                 ${
//                     index === menuItems.length - 1 && "rounded-r"
//                 }`}>
//                    {location.pathname !== item.path &&(
//                     <i className={`${item.icon} text-black text-xl`}
//                     onClick={()=>navigate(item.path)}
//                     ></i>
//                    )}
                    
//                     <Link to={`${item.path}`} className={`text-secondary text-xl ${item.path !== location.pathname && 'sm:hidden'} `}>
//                     {item.title}
//                     </Link>

  

//                 </div>
//                 </div>
              
//             ))}
//         </div>

//        </div>
     
//     </div>
//   )
// }

// export default Layout




import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import Link here
import 'remixicon/fonts/remixicon.css';

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      title: "Home",
      path: '/',
      icon: 'ri-home-8-fill',
    },
    {
      title: 'About',
      path: '/about',
      icon: 'ri-information-line',
    },
    {
      title: 'Contact',
      path: '/contact',
      icon: 'ri-contacts-fill',
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Main content */}
      <div className="content pb-32 sm:pb-24">
        {children}
      </div>

      {/* Footer Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-200 sm:bg-gray-100">
        <div className="flex justify-around sm:justify-between items-center w-full sm:px-4 py-3">
          {menuItems.map((item, index) => (
            <div className="flex flex-col items-center w-full sm:w-auto" key={item.title}>
              {/* Highlighted Tab */}
              {location.pathname === item.path && (
                <div className="flex flex-col items-center mb-1">
                  <div className="h-2 w-8 bg-primary sm:w-6 rounded-t-full"></div>
                  <div className="h-6 w-12 bg-primary rounded-t-full flex justify-center items-center">
                    <i className={`${item.icon} text-white text-lg`}></i>
                  </div>
                </div>
              )}

              {/* Tab */}
              <div
                className={`px-4 py-2 bg-gray-200 sm:bg-transparent flex items-center justify-center space-x-2 
                  ${index === 0 ? 'rounded-l-lg' : ''} 
                  ${index === menuItems.length - 1 ? 'rounded-r-lg' : ''}`}
              >
                {location.pathname !== item.path && (
                  <i
                    className={`${item.icon} text-black text-lg cursor-pointer`}
                    onClick={() => navigate(item.path)}
                  ></i>
                )}

                <Link
                  to={`${item.path}`}
                  className={`text-secondary text-sm sm:text-base ${
                    item.path !== location.pathname ? 'hidden sm:block' : ''
                  }`}
                >
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
