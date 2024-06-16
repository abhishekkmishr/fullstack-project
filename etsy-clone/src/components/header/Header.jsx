import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
// import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { allItems } from "../../constants";
import { logo } from "../../assets/index";
import HeaderBottom from "./HeaderBottom";

const Header = () => {
  // Redux selectors
  const cart = useSelector((state) => state.amazonReducer.products);
  const userInfo = useSelector((state) => state.amazonReducer.userInfo);

  // Data loaded with useLoaderData
  const data = useLoaderData();
  const products = data.data;

  // Ref for handling click outside functionality
  const ref = useRef();

  // State for managing visibility of dropdown menus and search results
  const [showAll, setShowAll] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Effect to handle click outside functionality
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        showAll && setShowAll(false);
        showCategories && setShowCategories(false);
      }
    });
  }, [ref, showAll, showCategories]);

  // Function to handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      {/* Header content */}
      <div className="w-full text-gray-700 px-4 py-3 flex justify-between items-center">
        {/* Etsy Logo */}
        <Link to="/">
          <div className="headerHover">
            <img className="w-24 mt-2" src={logo} alt="logoImage" />
          </div>
        </Link>
        {/* Categories Dropdown */}
        <div className="hidden md:flex items-center headerHover relative">
          <MenuIcon 
            className="cursor-pointer"
            onClick={() => setShowCategories(!showCategories)} 
          />
          <button 
            className="text-sm font-medium text-gray-700 ml-2"
            onClick={() => setShowCategories(!showCategories)}
          >
            Categories
          </button>
          {showCategories && (
            <ul 
              ref={ref} 
              className="absolute top-12 left-0 w-56 bg-white border border-gray-300 text-gray-700 p-2 z-50 rounded-md shadow-lg"
            >
              {allItems.map((item) => (
                <li
                  className="text-sm font-medium py-1 px-2 hover:bg-gray-200 cursor-pointer"
                  key={item._id}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Search Bar */}
        <div className="flex h-10 rounded-full flex-grow relative border border-gray-300">
          <input
            className="h-full text-base text-gray-700 flex-grow outline-none px-4 rounded-l-full border-2 border-black	 "
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for anything"
          />
          <span className="w-12 h-full flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white cursor-pointer rounded-r-full">
            <SearchIcon />
          </span>
          {filteredProducts.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 text-gray-700 z-50 rounded-md">
              <ul>
                {filteredProducts.map((product) => (
                  <li key={product.id} className="p-2 hover:bg-gray-200">
                    <Link to={`/product/${product.id}`}>
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          {/* Favorites */}
          <Link to="/favorites" className="headerHover">
            <FavoriteBorderIcon />
          </Link>
          {/* Notifications */}
          <Link to="/notifications" className="headerHover">
            <NotificationsNoneIcon />
          </Link>
          {/* Profile or Sign In */}
          {userInfo ? (
            <div className="headerHover">
              <PersonOutlineIcon />
              <p className="text-xs font-semibold">Profile</p>
            </div>
          ) : (
            <Link to="/signin" className="headerHover">
              <PersonOutlineIcon />
              <p className="text-xs font-semibold">Sign in</p>
            </Link>
          )}
          {/* Cart */}
          <Link to="/cart" className="relative headerHover">
            <ShoppingCartIcon />
            <span className="absolute -top-1 -right-2 text-xs font-semibold bg-orange-500 text-white rounded-full px-1">
              {cart.length > 0 ? cart.length : 0}
            </span>
          </Link>
          {/* Logout */}
          {userInfo && (
            <div className="headerHover">
              <LogoutIcon />
            </div>
          )}
        </div>
      </div>
      {/* Header bottom */}
      <HeaderBottom />
    </div>
  );
};

export default Header;

