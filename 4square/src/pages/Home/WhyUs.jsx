import React from 'react';
import Lottie from 'lottie-react';

// Import your Lottie animation JSON file
import whyanimation from "../../why-Animation - 1735195503475.json";

// const WhyLottieComponent = () => {
//   return (
//     <div className='flex justify-center items-center h-full'>
//       <Lottie animationData={whyanimation} loop={true} autoplay={true} style={{ width: 300, height: 300 ,alignItems:'center'}}  />
//     </div>
//   );
// };


const WhyLottieComponent = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Lottie
        animationData={whyanimation}
        loop={true}
        autoplay={true}
        style={{
          width: "80%", // Default width
          height: "auto", // Maintain aspect ratio
        }}
        className="sm:w-1/2 md:w-2/3 lg:w-1/3 xl:w-1/4" // Adjust size based on screen size
      />
    </div>
  );
};




const WhyUs = () => {
  return (
    <div className="mt-20">
      <h1 className="text-center text-8xl font-semibold text-primary sm:text-5xl sm:text-center">
        WHY <b className="text-secondary">Us</b>
      </h1>
      <div>
        <WhyLottieComponent  />
      </div>
      
      <h1 className="text-primary text-4xl font-semibold mt-10 text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
  "Partner with us for exceptional quality, tailored strategies,<br />
  and guaranteed results."
</h1>

    </div>
  );
};

export default WhyUs;

