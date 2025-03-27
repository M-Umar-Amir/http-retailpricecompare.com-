import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import productsData from '../../products'; // Importing the products from products.js

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const [isClient, setIsClient] = useState(false); // Track if it's client-side rendering

  useEffect(() => {
    // This will run only on the client side
    setIsClient(true);

    // Access the products data directly from the imported products.js file
    const storedProducts = productsData;

    if (storedProducts) {
      // Extracting 2 products from each brand
      const naheedProducts = storedProducts.Naheed ? storedProducts.Naheed.slice(0, 2) : [];
      const skinfitProducts = storedProducts.TheSkinFit ? storedProducts.TheSkinFit[0].products.slice(0, 2) : []; // Accessing the products array in TheSkinFit

      // Combining both arrays
      setProducts([...naheedProducts, ...skinfitProducts]);
    }
  }, []); // Empty dependency array ensures it runs only on mount

  if (!isClient) {
    // Render nothing on the server-side (SSR)
    return null;
  }

  return (
    <div className="py-6 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 ml-4 sm:ml-16 font-poppins text-customGreen">BEST SELLER</h2>
      <div className="flex overflow-x-auto space-x-6 px-4 md:ml-10">
        {products.length > 0 ? (
          products.map((product) => ( // Showing the combined products from both brands
            <div
              key={product.name} // Use name as key or unique ID
              className="flex-shrink-0 md:w-72 sm:w-64 p-2 sm:p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Link href={`/product/${product.name}`}>
              <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={100}
                  className="mx-auto mb-2 sm:mb-3 rounded-md"
                />
                <h3 className="text-xs sm:text-sm font-medium text-gray-800 mt-1">{product.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{product.price}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No products available in the product data.</p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
