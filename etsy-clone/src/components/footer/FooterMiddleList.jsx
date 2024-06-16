import React from "react";

const FooterMiddleList = ({ title, listItem }) => {
  return (
    <div className="w-full">
      {/* Title of the list */}
      <h3 className="font-titleFont text-white text-base font-semibold mb-3">
        {title}
      </h3>
      {/* List of items */}
      <ul className="flex flex-col gap-2 font-bodyFont">
        {/* Iterate over listItem array */}
        {listItem.map((item) =>
          // Iterate over listData array within each item
          item.listData.map((data, i) => (
            <li key={i} className="footerLink">
              {data}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default FooterMiddleList;
