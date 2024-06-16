import React from "react";
import { middleList } from "../../constants";
import FooterMiddleList from "./FooterMiddleList";
import { logo, bdFlag } from "../../assets/index";

const FooterMiddle = () => {
  return (
    <div className="w-full bg-amazon_light text-white">
      {/* ======================= Middle Top Start here ========================== */}
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 place-items-center items-start px-6 gap-10 lgl:gap-4">
            {/* Map through the middleList array and render FooterMiddleList components */}
            {middleList.map((item) => (
              <FooterMiddleList
                key={item._id}
                title={item.title}
                listItem={item.listItem}
              />
            ))}
          </div>
        </div>
      </div>
      {/* ======================= Middle Top End here ============================ */}
      
      {/* ======================= Middle Bottom Start here ======================= */}
      <div className="w-full flex gap-6 items-center justify-center py-6">
        {/* Logo */}
        <div>
          <img className="w-20 pt-3" src={logo} alt="logo" />
        </div>
        {/* Language and location selector */}
        <div className="flex gap-2">
          <p className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
            English
          </p>
          <div className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazon_yellow cursor-pointer duration-200 px-2 py-1">
            <img className="w-6" src={bdFlag} alt="" />
            <p>Bangladesh</p>
          </div>
        </div>
      </div>
      {/* ======================= Middle Bottom End here ========================= */}
      
      {/* ============ Top Start here ================== */}
      {/* Placeholder for additional top content */}
      {/* ============ Top End here ==================== */}
      
      {/* ============ Bottom Start here =============== */}
      {/* Placeholder for additional bottom content */}
      {/* ============ Bottom End here ================= */}
    </div>
  );
};

export default FooterMiddle;











// import React from "react";
// import { FooterMiddleList } from "./FooterMiddleList";
// import { indiaLogo } from "../../assets/index";

// const EtsyFooterMiddle = () => {
//   return (
//     <div className="w-full bg-gray-900 text-white py-10">
//       {/* Etsy Footer Middle */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
//           <EtsyFooterMiddleList title="Shop" listItem={["Gift Cards", "Etsy blog", "Sell"]} />
//           <EtsyFooterMiddleList title="About" listItem={["Etsy, Inc.", "Policies", "Investors"]} />
//           <EtsyFooterMiddleList title="Help" listItem={["Help Center", "Trust and Safety", "Privacy settings"]} />
//           <EtsyFooterMiddleList title="Social" listItem={["Instagram", "Facebook", "Twitter"]} />
//         </div>
//       </div>

//       {/* Etsy Footer Bottom */}
//       <div className="flex items-center justify-center gap-6 py-6">
//         <div>
//           <img className="w-24" src={indiaLogo} alt="India Logo" />
//         </div>
//         <div className="flex gap-2">
//           <p className="border border-gray-300 hover:border-yellow-400 cursor-pointer duration-200 px-3 py-1">English</p>
//           <p className="border border-gray-300 hover:border-yellow-400 cursor-pointer duration-200 px-3 py-1">India</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EtsyFooterMiddle;
