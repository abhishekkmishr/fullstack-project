









import React from "react";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

const HeaderBottom = () => {
  return (
    <div className="w-full px-4 h-[60px] bg-white text-gray-800 flex items-center justify-center shadow-md">
      {/* Navigation Links */}
      <ul className="flex items-center gap-4 text-sm tracking-wide">
        {/* Gift Mode Link */}
        <li className="headerHover flex items-center gap-1">
          <CardGiftcardIcon />
          Gift Mode
        </li>
        {/* Other Navigation Links */}
        <li className="headerHover">Father's Day Deal</li>
        <li className="headerHover">Home Favourites</li>
        <li className="headerHover">Fashion Find</li>
        <li className="headerHover">Registry</li>
      </ul>
    </div>
  );
};

export default HeaderBottom;



