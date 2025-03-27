import Link from 'next/link';
import Image from 'next/image';

// components/Footer.js
export default function Footer() {
    return (
      <footer
      >
        <div className="bg-white bg-opacity-80 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 rounded-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Social Icons */}
            <div className='text-left'>
            <Image
            src="/WhatsApp_Image_2025-01-31_at_18.30.28-removebg-preview.png" // Path to your logo in the public folder
            alt="Highfy Logo"
            width={150} // Adjust the width as per your design
            height={30} // Adjust the height as per your design
            className="mx-auto" // Centering the image
          />              <p className="text-gray-500 text-sm">
            Best Retail Price Comparison App | Compare Store Prices & Save
                © 2025, Retail Price Comparison All Right Reserved
              </p>
              <p className="text-gray-500 text-sm">
                © 2025, Retail Price Comparison All Rights Reserved
              </p>
            </div>

            {/* Customer Service */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">CUSTOMER SERVICE</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-gray-800">FAQs</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800">Blog</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800">Track Your Order</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800">Careers</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800">Become A Vendor</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800">Highfy Affiliate</a></li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">INFORMATION</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-500 hover:text-gray-800">About Us</a></li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800">Returns & Exchange</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800">Privacy & Cookie Policy</a></li>
                <li><a href="#" className="text-gray-500 hover:text-gray-800">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Subscribe to our emails</h3>
              <form className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none"
                >
                  →
                </button>
              </form>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-10 flex justify-center space-x-6 text-gray-500">
            <a href="#" className="hover:text-gray-800">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Facebook Icon */}
              </svg>
            </a>
            <a href="#" className="hover:text-gray-800">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Instagram Icon */}
              </svg>
            </a>
            <a href="#" className="hover:text-gray-800">
              <span className="sr-only">YouTube</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                {/* YouTube Icon */}
              </svg>
            </a>
            <a href="#" className="hover:text-gray-800">
              <span className="sr-only">Snapchat</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Snapchat Icon */}
              </svg>
            </a>
          </div>
        </div>
      </footer>
    );
}
