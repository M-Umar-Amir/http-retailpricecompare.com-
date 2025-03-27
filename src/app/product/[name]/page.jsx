"use client";  // Enable client-side behavior
import { useState, useEffect } from 'react';
import Image from 'next/image';
import PromoBanner from '@/components/PromoBanner';
import Navbar from '@/components/Navbar';
import CategoryBar from '@/components/CategorySection';
import Footer from '@/components/Footer';
import productsData from '../../../../products';

const ProductDetail = ({ params }) => {
    const { name } = params;  // Use 'name' instead of 'id' to match the dynamic URL segment
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        if (typeof window !== 'undefined') {
            const storedProducts = productsData;

            if (storedProducts) {
                let combinedProducts = [];

                // Combine data from all categories
                if (storedProducts.Naheed) {
                    combinedProducts = [...combinedProducts, ...storedProducts.Naheed];
                }
                if (storedProducts.TheSkinFit && storedProducts.TheSkinFit[0]?.products) {
                    combinedProducts = [
                        ...combinedProducts,
                        ...storedProducts.TheSkinFit[0].products
                    ];
                }
                if (storedProducts.MakeUpCity && storedProducts.MakeUpCity[0]?.products) {
                    combinedProducts = [
                        ...combinedProducts,
                        ...storedProducts.MakeUpCity[0].products
                    ];
                }
                if (storedProducts.highfy) {
                    combinedProducts = [...combinedProducts, ...storedProducts.highfy];
                }

                // Set the combined products to state
                setProducts(combinedProducts);
            }
        }
    }, []);

    useEffect(() => {
        // When products data is available, check if the product with the given name exists
        if (products.length > 0) {
            const foundProduct = products.find((p) => p.name === decodeURIComponent(name)); // Match by name, not id
            setProduct(foundProduct);
        }
    }, [products, name]);

    if (!isClient) {
        return null;
    }

    if (!product) {
        return <p className="text-center text-gray-500">Product not found</p>;
    }

    // Function to get related products from different categories
    const getRelatedProducts = (product) => {
        let relatedProducts = [];
        
        const categories = ['Naheed', 'TheSkinFit', 'MakeUpCity', 'highfy'];
        const categoryData = {
            Naheed: [],
            TheSkinFit: [],
            MakeUpCity: [],
            highfy: []
        };

        // Organize products by category
        categories.forEach((category) => {
            if (category === 'Naheed' && productsData.Naheed) {
                categoryData.Naheed = productsData.Naheed;
            } else if (category === 'TheSkinFit' && productsData.TheSkinFit && productsData.TheSkinFit[0]?.products) {
                categoryData.TheSkinFit = productsData.TheSkinFit[0].products;
            } else if (category === 'MakeUpCity' && productsData.MakeUpCity && productsData.MakeUpCity[0]?.products) {
                categoryData.MakeUpCity = productsData.MakeUpCity[0].products;
            } else if (category === 'highfy' && productsData.highfy) {
                categoryData.highfy = productsData.highfy;
            }
        });

        // Function to check if product is a serum or related to brightening
        const isSerum = (name) => name.toLowerCase().includes('serum');
        const isBrightening = (name) => name.toLowerCase().includes('brightening') || name.toLowerCase().includes('vitamin c');
        const hasNiacinamide = (name) => name.toLowerCase().includes('niacinamide');
        
        // Filter products based on these categories
        categories.forEach((category) => {
            categoryData[category].forEach((p) => {
                // Check if the product is related (same category and matching type: serum, brightening, etc.)
                if (
                    p.name.toLowerCase() !== product.name.toLowerCase() && // Ensure it’s not the same product
                    ((isSerum(p.name) && isSerum(product.name)) || 
                    (isBrightening(p.name) && isBrightening(product.name)) ||
                    (hasNiacinamide(p.name) && hasNiacinamide(product.name)))
                ) {
                    relatedProducts.push(p); // Add related product to the list
                }
            });
        });

        // Randomly shuffle related products and select 4 from different categories
        let selectedRelatedProducts = [];
        const availableCategories = [...categories];

        // Add one product from each category
        availableCategories.forEach((category) => {
            const filteredCategoryProducts = relatedProducts.filter((p) => {
                // Filter out products that don't belong to this category
                if (category === 'Naheed' && productsData.Naheed.includes(p)) return true;
                if (category === 'TheSkinFit' && productsData.TheSkinFit[0]?.products.includes(p)) return true;
                if (category === 'MakeUpCity' && productsData.MakeUpCity[0]?.products.includes(p)) return true;
                if (category === 'highfy' && productsData.highfy.includes(p)) return true;
                return false;
            });

            if (filteredCategoryProducts.length > 0) {
                // Pick one random product from each category
                selectedRelatedProducts.push(filteredCategoryProducts[Math.floor(Math.random() * filteredCategoryProducts.length)]);
            }
        });

        // Limit to 4 related products (in case we have less than 4 after filtering)
        return selectedRelatedProducts.slice(0, 4);
    };

    // Get related products based on the current product
    const relatedProducts = getRelatedProducts(product);

    // Handle "View Details" button click
    const handleViewDetails = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <PromoBanner />
            <Navbar />
            <CategoryBar />
            <div className="container mx-auto p-6 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    {/* Left: Product Image */}
                    <div className="flex justify-center">
                        <Image
                            src={product.image && product.image.startsWith("//") ? `https:${product.image}` : product.image}
                            alt={product.name}
                            width={400}
                            height={400}
                            className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Right: Product Details */}
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                        <div className="mb-4">
                            <p className="text-xl font-semibold text-gray-800">{product.price}</p>
                        </div>

                        {/* View Details Button */}
                        <button
                            onClick={() => handleViewDetails(product.link)}
                            className="bg-customGreen text-white w-full mt-4 px-4 py-2 rounded-md hover:bg-black text-sm"
                        >
                            View Details
                        </button>

                        {/* Product Description */}
                        {/* <div className="mt-6 text-gray-700">
                            <h3 className="text-xl font-semibold mb-3">Description:</h3>
                            <p className="text-sm leading-relaxed">{product.description}</p>
                        </div> */}
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-12 mb-10">
                    <h2 className="text-2xl font-bold mb-6 text-center">Related Products</h2>
                    <div className="flex overflow-x-auto gap-6 pb-4 md:ml-20 md:gap-8">
                        {relatedProducts.map((relatedProduct) => (
                            <div
                                key={relatedProduct.name}  // Using 'name' as the key
                                className="w-60 p-4 border rounded-lg hover:shadow-lg transition flex flex-col items-center shrink-0"
                            >
                                <Image
                                    src={relatedProduct.image && relatedProduct.image.startsWith("//") ? `https:${relatedProduct.image}` : relatedProduct.image}
                                    alt={relatedProduct.name}
                                    width={300}
                                    height={200}
                                    className="rounded-lg"
                                />
                                <h3 className="text-sm font-medium text-gray-800 mt-2 text-center">
                                    {relatedProduct.name}
                                </h3>
                                <p className="text-green-600 text-xs font-bold mt-1">
                                    {relatedProduct.price}
                                </p>
                                <button
                                    onClick={() => handleViewDetails(relatedProduct.link)}
                                    className="bg-customGreen text-white w-full mt-3 px-8 py-1 rounded-md hover:bg-black text-sm"
                                >
                                    View Details
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <h2>Find the Best Deals with Our Shopping Price Comparison App</h2>
            <Footer />
        </>
    );
};

export default ProductDetail;
