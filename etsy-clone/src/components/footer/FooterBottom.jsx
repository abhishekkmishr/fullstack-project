// import React from "react";
// import { footerBottomItem } from "../../constants";

// const FooterBottom = () => {
//   return (
//     <div className="w-full bg-footerBottom py-8">
//       {/* ======================= Top start here ====================== */}
//       <div className="max-w-5xl mx-auto">
//         <div className="w-full grid grid-cols-3 md:grid-cols-5 lgl:grid-cols-7 gap-3 px-6 place-content-center items-start text-gray-400">
//           {footerBottomItem.map((item) => (
//             <div key={item._id} className="group cursor-pointer">
//               <h3 className="footerBottomTitle">{item.title}</h3>
//               <p className="footerBottomText">{item.des}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* ======================= Top End here ======================== */}
//       {/* ======================= Bottom Start here =================== */}
//       <div className="flex flex-col justify-center items-center px-4">
//         <div>
//           <ul className="text-gray-300 text-sm gap-2 md:gap-4 py-2 mt-4 flex">
//             <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
//               Conditions of Use
//             </li>
//             <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
//               Privacy Notice
//             </li>
//             <li className="font-normal text-[12px] hover:underline cursor-pointer text-[#DDD] leading-3">
//               Your Ads Privacy Choices
//             </li>
//           </ul>
//         </div>
//         <div>
//           <p className="font-normal text-[12px] text-[#DDD] leading-3">
//             © 1996-2022, Amazon.com, Inc. or its affiliates
//           </p>
//         </div>
//       </div>
//       {/* ======================= Bottom End here ===================== */}
//       {/* ============ Top Start here ================== */}
//       {/* ============ Top End here ==================== */}
//       {/* ============ Bottom Start here =============== */}
//       {/* ============ Bottom End here ================= */}
//     </div>
//   );
// };

// export default FooterBottom;
















import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from "react-icons/fa";
import logo from "../../assets/logo.png"; // Adjust the path based on your directory structure
// import indiaFlag from "../../assets/indiaFlag.png"; // Adjust the path based on your directory structure
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-blue-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between flex-wrap">
          {/* Logo and description */}
          <div className="w-full sm:w-auto mb-6 sm:mb-0">
            <img className="h-10" src={logo} alt="Logo" />
            <p className="mt-2 text-sm text-gray-400">
              Discover unique handmade items, vintage goods, and more from the world’s largest creative marketplace.
            </p>
          </div>
          {/* Shop section */}
          <div className="w-full sm:w-auto mb-6 sm:mb-0">
            <h2 className="text-lg font-semibold mb-4">Shop</h2>
            <ul className="text-gray-400 space-y-2">
              <li><Link to="#" className="hover:text-white">Gift Cards</Link></li>
              <li><Link to="#" className="hover:text-white">Etsy Blog</Link></li>
              <li><Link to="#" className="hover:text-white">Sitemap</Link></li>
              <li><Link to="#" className="hover:text-white">Etsy Studio</Link></li>
            </ul>
          </div>
          {/* Sell section */}
          <div className="w-full sm:w-auto mb-6 sm:mb-0">
            <h2 className="text-lg font-semibold mb-4">Sell</h2>
            <ul className="text-gray-400 space-y-2">
              <li><Link to="#" className="hover:text-white">Sell on Etsy</Link></li>
              <li><Link to="#" className="hover:text-white">Teams</Link></li>
              <li><Link to="#" className="hover:text-white">Forums</Link></li>
            </ul>
          </div>
          {/* About section */}
          <div className="w-full sm:w-auto mb-6 sm:mb-0">
            <h2 className="text-lg font-semibold mb-4">About</h2>
            <ul className="text-gray-400 space-y-2">
              <li><Link to="#" className="hover:text-white">Etsy, Inc.</Link></li>
              <li><Link to="#" className="hover:text-white">Policies</Link></li>
              <li><Link to="#" className="hover:text-white">Investors</Link></li>
              <li><Link to="#" className="hover:text-white">Careers</Link></li>
              <li><Link to="#" className="hover:text-white">Press</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex justify-between items-center flex-wrap">
            {/* Social media icons */}
            <div className="flex space-x-6">
              <a href="https://www.facebook.com/" className="text-white-400 hover:text-white"><FaFacebookF /></a>
              <a href="https://x.com/?lang=en" className="text-white-400 hover:text-white"><FaTwitter /></a>
              <a href="https://www.instagram.com/" className="text-white-400 hover:text-white"><FaInstagram /></a>
              {/* <a href="#" className="text-white-400 hover:text-white"><FaPinterestP /></a> */}
            </div>
            {/* Currency and location */}
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <div className="flex items-center space-x-1 border border-gray-700 p-2 rounded">
                {/* <img className="w-6" src={indiaFlag} alt="India Flag" /> */}
                <span>India</span>
              </div>
              <div className="flex items-center space-x-1 border border-gray-700 p-2 rounded">
                <span>₹</span>
                <span>INR</span>
              </div>
            </div>
          </div>
          {/* Footer bottom text */}
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2024 Etsy, Inc. All rights reserved.</p>
            <p>
              <Link to="#" className="hover:text-white">Terms of Use</Link> | 
              <Link to="#" className="hover:text-white"> Privacy Policy</Link> | 
              <Link to="#" className="hover:text-white"> Interest-based ads</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

