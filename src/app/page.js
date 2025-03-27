"use client";  // Enable client-side behavior

import Head from 'next/head';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import CategorySection from '../components/CategorySection';
import PromoBanner from '../components/PromoBanner';  // Import PromoBanner
import BestSeller from '@/components/BestSeller';
import SpecialOffers from '@/components/SpecialOffers';
import RestockAlert from '@/components/RestockAlert';
import BannerSection from '@/components/BannerSection';
import FlatofferBanner from '@/components/FlatoffBanner';
import Footer from '@/components/Footer';
import BlogSection from '@/components/Blog';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Check if data is already in localStorage
    const savedData = localStorage.getItem('productsData');

    if (savedData) {
      // If data exists in localStorage, use it
      setData(JSON.parse(savedData));
    } else {
      // Fetch the data from the API if not in localStorage
      const fetchData = async () => {
        try {
          const response = await fetch('api/api1', {
            method: 'GET',  // Use GET method to fetch the data
            headers: {
              'Content-Type': 'application/json',  // Set the content type to JSON
              'Access-Control-Allow-Origin': '*',  // Allow any origin (you might need to adjust this for your API)
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',  // Allow specific methods
              'Access-Control-Allow-Headers': 'Content-Type, Authorization'  // Allow specific headers
            }
          });

          // Check if the response is successful
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const result = await response.json();

          // Save the response to localStorage
          localStorage.setItem('productsData', JSON.stringify(result));

          // Set the data state
          setData(result);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }
  }, []);  // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <>
      <PromoBanner /> {/* Render PromoBanner above the Navbar */}
      <Navbar />
      <CategorySection />
      <div>
        <Head>
        <title>Best Retail Price Comparison App | Compare Store Prices & Save</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Retail Price Compare",
          "url": "https://retailpricecompare.com/",
          "description": "Compare prices across multiple retail stores with our advanced price comparison tool.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://retailpricecompare.com/search?q={search_term}",
            "query-input": "required name=search_term"
          }
        })}} />
        </Head>
        <meta name="description" content="Find the best deals with our retail price comparison app. Compare store prices instantly and save big on shopping!"></meta>
        <meta name="google-site-verification" content="_fEr-3GQQFGo3onCTLErvpP-jjZz7ewAUQ3LWVh9znE" />
        <Banner />
        <h1>Compare Retail Prices & Save More</h1>
        <BestSeller products={data?.products || []} /> {/* Pass products to BestSeller */}
        <SpecialOffers />
        <RestockAlert />
        <BannerSection />
        <FlatofferBanner />
        <BlogSection />
        <Footer />
      </div>
    </>
  );
}
