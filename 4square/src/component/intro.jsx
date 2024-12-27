import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import  LogoFourSquare from "../logofile/index"


import animationData from '../../src/Animation - 1735058492560.json'; // Path to your Lottie JSON file


// const LottieComponent = () => {
//   return (
//     <div>
//       {/* Use Lottie component to display your animation */}
//       <Lottie animationData={animationData} loop={true} autoplay={true} />
//     </div>
//   );
// };



// function Intro() {
//   return (
//     <div className="grid grid-cols-2 h-screen items-center">

//     <div className="flex flex-col justify-center items-end p-7">
     
//         <div className="flex flex-col items-center">
     
//             <LogoFourSquare 
//          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 sm:items-center" 
//            />
           
//             <h1 className="text-center  text-xl font-bold">Square Mercantile Corporation</h1>

//             <button className='px-16 py-2 bg-secondary text-white rounded-lg max-w-max mt-3'>
//   <Link to="/contact">Get In Touch</Link>
// </button>
//         </div>
//     </div>

//     {/* Right Column with Lottie Animation */}
//     <div className="flex justify-center p-10">
//         <LottieComponent />
//     </div>
// </div>
//   );
// }




// // function Intro () {
// //     return(
// //         <div className="grid grid-cols-2 h-screen items-center">
// //             <div className='flex flex-col items-end p-7 h-full'>
// //               <LogoFourSquare width={400}/>
// //               <div className='mt-4'>
// //               <h1 className="text-right mt-4">Your Logo Text</h1>
// //               </div>
             
// //             </div>
// //             <div className="p-10">
// //                 <LottieComponent/>
// //             </div>
// //         </div>
// //     )
// // }


// export default Intro;







































// import React from "react";
// import Lottie from "lottie-react";
// import { Link } from "react-router-dom";
// import animationData from "./path/to/animation.json";
// import LogoFourSquare from "./path/to/LogoFourSquare";

// const LottieComponent = () => {
//   return (
//     <div className="w-full max-w-md">
//       <Lottie animationData={animationData} loop autoplay />
//     </div>
//   );
// };



const LottieComponent = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-80 h-80 sm:w-60 sm:h-60 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
};




function Intro() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen items-center p-5 gap-10">
      {/* Left Column with Logo and Content */}
      <div className="flex flex-col justify-center items-center md:items-end text-center md:text-right space-y-5">
      <LogoFourSquare 
  className="w-40 h-40 sm:w-50 sm:h-50 md:w-64 md:h-64 lg:w-80 lg:h-80" 
  style={{ width: "100%", height: "auto" }} 
/>
        <h1 className="text-2xl font-bold text-primary">
          Four Square Mercantile Corporation
        </h1>
        <button className="px-6 py-1.5 sm:px-4 sm:py-2 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition">
  <Link to="/contact" className="block w-full text-center">Get In Touch</Link>
</button>

      
    

      
      </div>

      {/* Right Column with Lottie Animation */}
      {/* <div className="flex justify-center items-center">
        <LottieComponent />
      </div> */}
      <div className="flex justify-center items-center">
     <div className="w-80 h-80 sm:w-90 sm:h-90 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
    <LottieComponent />
  </div>
</div>

    </div>
  );
}

export default Intro;
