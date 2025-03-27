"use client"; // <-- Add this line at the top of your file

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from "next/image";

const dropdownContent = {
  "Skin Care": ["FaceSerum", "Face Toner", "Face Mask & Sheets"],
  Makeup: ["Foundation", "Lipstick", "Mascara"],
  "Hair Care": ["Shampoo", "Conditioner", "Hair Oil"],
  "Beauty Tools": ["Brushes", "Hair Dryers", "Curling Irons"],
  Professional: ["Spa Products", "Salon Tools"],
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('productsData');
    console.log(storedProducts);

    if (storedProducts) {
      const parsedData = JSON.parse(storedProducts);

      // Extracting 2 products from each brand
      const naheedProducts = parsedData.naheeds ? parsedData.naheeds.slice(0, 2) : [];
      const skinfitProducts = parsedData.theskinfits ? parsedData.theskinfits.slice(0, 2) : [];

      // Combining both arrays
      setProductsData([...naheedProducts, ...skinfitProducts]);
    }
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter products based on the search term
  const filteredProducts = productsData.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleCategory = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
    } else {
      setActiveCategory(category);
    }
  };

  return (
    <header className="bg-white top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Hamburger Menu */}
        <div
          className="md:hidden text-lg text-purple-800 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </div>

        {/* Logo */}
        <div className="text-xl md:text-xl font-bold text-purple-800 text-center flex-grow">
          {/* Add Image here */}
          
          <Link href="/" passHref>
          <Image
            src="/WhatsApp_Image_2025-01-31_at_18.30.28-removebg-preview.png" // Path to your logo in the public folder
            alt="Highfy Logo"
            width={150} // Adjust the width as per your design
            height={30} // Adjust the height as per your design
            className="mx-auto" // Centering the image
          />
      </Link>
        </div>
      </div>

      {/* Search Bar for Mobile */}
      <div className="px-4 mt-0 md:-mt-5">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
        />
        {/* Show search results below the input */}
        {searchTerm && filteredProducts.length > 0 && (
          <div className="mt-2 bg-white shadow-lg max-h-60 overflow-y-auto">
            {filteredProducts.map((product, idx) => (
              <div key={idx} className="px-4 py-2 text-gray-700 hover:text-purple-800">
                <Link href={`/product/${product._id}`}> {/* Use product.id or product.name */}
                  {product.name}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-4 space-y-4">
          {Object.keys(dropdownContent).map((category, index) => (
            <div key={index} className="w-full">
              <div
                className="flex items-center justify-between px-4 py-3 cursor-pointer group hover:bg-purple-100 transition-colors duration-300"
                onClick={() => toggleCategory(category)}
              >
                <span className="text-black group-hover:text-purple-800">
                  {category}
                </span>
                {activeCategory === category ? (
                  <IoIosArrowUp className="text-xs font-bold group-hover:text-purple-800" />
                ) : (
                  <IoIosArrowDown className="text-xs font-bold group-hover:text-purple-800" />
                )}
              </div>
              {/* Submenu */}
              {activeCategory === category && (
                <div className="bg-purple-50 pl-8 py-2 space-y-2">
                  {dropdownContent[category].map((item, idx) => (
                    <div
                      key={idx}
                      className="text-gray-700 hover:text-purple-800 transition-colors duration-200"
                    >
                      <Link href={`/products/${item}`}>
                        {item}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Contact Link */}
          <div className="w-full">
            <div className="flex items-center justify-between px-4 py-3 cursor-pointer group hover:bg-purple-100 transition-colors duration-300">
              <span className="text-black group-hover:text-purple-800">
                Contact
              </span>
            </div>
            {/* Contact Link */}
            <div className="bg-purple-50 pl-8 py-2">
              <Link href="/contact" className="text-gray-700 hover:text-purple-800 transition-colors duration-200">
                Contact Us
              </Link>
            </div>
            <div className="bg-purple-50 pl-8 py-2">
              <Link href="/about-us" className="text-gray-700 hover:text-purple-800 transition-colors duration-200">
                About Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
