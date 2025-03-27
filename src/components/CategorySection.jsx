import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const dropdownContent = {
  "Skin Care": ["Face Serum", "Face Toner", "Face Mask & Sheets"],
  Makeup: ["Foundation", "Lipstick", "Mascara"],
  "Hair Care": ["Shampoo", "Conditioner", "Hair Oil"],
  Fragrance: ["Perfume", "Body Mist", "Deodorant"],
  "Personal Care": ["Body Wash", "Hand Wash", "Moisturizer"],
  "Sexual Wellness": ["Condoms", "Lubricants", "Intimate Wash"],
  Support: ["FAQ", "Contact Us"],
  Brands: ["Brand A", "Brand B", "Brand C"],
};

const CategoryBar = () => {
  return (
    <div className="bg-customGreen mt-2 text-sm font-medium h-12 text-white py-0 px-4 hidden md:block">
      {/* Wrapper to enable horizontal scrolling on small screens */}
      <div className="flex justify-center space-x-4 pb-2 md:space-x-1 md:overflow-x-visible">
        {Object.keys(dropdownContent).map((category, index) => (
          <div
            key={index}
            className="relative flex items-center space-x-2 px-4 py-3.5 group hover:bg-orange-500 transition-colors duration-300 min-w-max"
          >
            {/* Vertical divider line */}
            {index !== 0 && (
              <div className="absolute left-0 top-0 bottom-0 w-[2px] h-14 bg-white group-hover:bg-white" />
            )}
            {/* Category Link */}
            <Link
              href="/"
              className="text-white group-hover:text-white no-underline"
            >
              {category.toUpperCase()}
            </Link>
            {/* Arrow Icon */}
            {dropdownContent[category] && (
              <IoIosArrowDown className="text-xs font-bold group-hover:text-white" />
            )}
            {/* Dropdown Menu - Visible on hover */}
            {dropdownContent[category] && category === "Skin Care" && (
              <div className="absolute top-full left-0 bg-white text-black w-max mt-1 p-3 rounded shadow-lg hidden group-hover:block z-20">
                {dropdownContent[category].map((item, idx) => (
                  <Link
                    key={idx}
                    href={`/products/${item}`}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
            {/* "Coming Soon" animation for all categories except Skin Care */}
            {dropdownContent[category] && category !== "Skin Care" && (
              <div className="absolute top-full left-0 text-white bg-red-500 w-max mt-1 p-3 rounded shadow-lg hidden group-hover:block z-20 animate-pulse">
                Coming Soon
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
