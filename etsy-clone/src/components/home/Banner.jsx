



















// import React from 'react';
// import image1 from '../../assets/images/image1.jpeg';
// import image2 from '../../assets/images/image2.jpeg';
// import image3 from '../../assets/images/image3.jpeg';
// import image4 from '../../assets/images/image4.jpeg';
// import image5 from '../../assets/images/image5.jpeg'; 
// import image6 from '../../assets/images/image6.jpeg'; 
// import image7 from '../../assets/images/image7.jpeg';
// import image8 from '../../assets/images/image8.jpeg';
// import image9 from '../../assets/images/image9.jpeg';
// import image10 from '../../assets/images/image10.jpeg';
// import './Banner.css';

// const Banner = () => {
//   return (
//     // Banner container with background color, border, and shadow
//     <div className="bg-yellow-100 py-8 border-4 border-black rounded-lg my-8 mx-4 shadow-xl">
//       {/* Max width container with padding and flex layout */}
//       <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center space-x-6">
//         {/* Content section with introducing message, title, and button */}
//         <div className="space-y-6">
//           <div className="flex items-center space-x-2">
//             {/* Tagline */}
//             <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm animate-bounce">Introducing Gift Mode</span>
//           </div>
//           {/* Title */}
//           <h1 className="text-4xl font-bold text-gray-900 animate-fade-in">Extra-special gifting made extra-easy</h1>
//           {/* Call to action button */}
//           <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 focus:outline-none animate-pulse">
//             Shop now
//           </button>
//         </div>
//         {/* Image carousel section */}
//         <div className="relative w-2/3 h-64 overflow-hidden flex space-x-4">
//           {/* First column of images */}
//           <div className="flex flex-col space-y-4 animate-slide-up">
//             <img className="rounded-lg shadow-md" src={image1} alt="Product 1" />
//             <img className="rounded-lg shadow-md" src={image2} alt="Product 2" />
//             <img className="rounded-lg shadow-md" src={image3} alt="Product 3" />
//             <img className="rounded-lg shadow-md" src={image4} alt="Product 4" />
//             <img className="rounded-lg shadow-md" src={image7} alt="Product 4" />
//           </div>
//           {/* Second column of images */}
//           <div className="flex flex-col space-y-4 animate-slide-down">
//             <img className="rounded-lg shadow-md" src={image5} alt="Product 5" />
//             <img className="rounded-lg shadow-md" src={image6} alt="Product 6" />
//             <img className="rounded-lg shadow-md" src={image8} alt="Product 6" />
//             <img className="rounded-lg shadow-md" src={image9} alt="Product 6" />
//             <img className="rounded-lg shadow-md" src={image10} alt="Product 6" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;














import React from 'react';
import image1 from '../../assets/images/image1.jpeg';
import image2 from '../../assets/images/image2.jpeg';
import image3 from '../../assets/images/image3.jpeg';
import image4 from '../../assets/images/image4.jpeg';
import image5 from '../../assets/images/image5.jpeg'; 
import image6 from '../../assets/images/image6.jpeg'; 
import image7 from '../../assets/images/image7.jpeg';
import image8 from '../../assets/images/image8.jpeg';
import image9 from '../../assets/images/image9.jpeg';
import image10 from '../../assets/images/image10.jpeg';
import './Banner.css';

const Banner = () => {
  return (
    <div className="bg-yellow-100 py-8 border-4 border-black rounded-lg my-8 mx-4 shadow-xl">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="space-y-6 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start items-center space-x-2">
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm animate-bounce">Introducing Gift Mode</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 animate-fade-in">Extra-special gifting made extra-easy</h1>
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 focus:outline-none animate-pulse">
            Shop now
          </button>
        </div>
        <div className="relative w-full lg:w-2/3 h-64 overflow-hidden flex space-x-4">
          <div className="flex flex-col space-y-4 animate-slide-up w-1/2">
            <img className="rounded-lg shadow-md object-cover h-24 md:h-32 lg:h-40" src={image1} alt="Product 1" />
            <img className="rounded-lg shadow-md object-cover h-24 md:h-32 lg:h-40" src={image2} alt="Product 2" />
            <img className="rounded-lg shadow-md object-cover h-24 md:h-32 lg:h-40" src={image3} alt="Product 3" />
            <img className="rounded-lg shadow-md object-cover h-24 md:h-32 lg:h-40" src={image4} alt="Product 4" />
            <img className="rounded-lg shadow-md object-cover h-24 md:h-32 lg:h-40" src={image7} alt="Product 7" />
          </div>
          <div className="flex flex-col space-y-4 animate-slide-down w-1/2">
            <img className="rounded-lg shadow-md object-cover h-24 md:h-32 lg:h-40" src={image5} alt="Product 5" />
            <img className="rounded-lg shadow-md object-cover h-24 md:h-32 lg:h-40" src={image6} alt="Product 6" />
            <img className="rounded-lg shadow-md object-cover h-24 md:h-32 lg:h-40" src={image8} alt="Product 8" />
            <img className="rounded-lg shadow-md object-cover h-24 md:h-32 lg:h-40" src={image9} alt="Product 9" />
            <img className="rounded-lg shadow-md object-cover h-24 md:h-32 lg:h-40" src={image10} alt="Product 10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
