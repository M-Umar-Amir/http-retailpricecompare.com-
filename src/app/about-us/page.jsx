// pages/about.js
import CategoryBar from '@/components/CategorySection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import PromoBanner from '@/components/PromoBanner';
import Head from 'next/head'

const About = () => {
  return (
    <>
      <Head>
        <title>About - Retail</title>
      </Head>
<PromoBanner />
<Navbar />
<CategoryBar />
      <div className="w-full mx-auto py-10 bg-white">
        {/* Hero Section */}
        <section className="bg-customGreen py-36 w-full text-center">
          <h1 className="text-white text-5xl font-extrabold">
          Compare Retail Prices & Save More
          </h1>
        </section>

        {/* Story Section */}
        <section className="py-12 text-center space-y-6">
          <h2 className="text-3xl font-semibold">Best Retail Price Comparison App</h2>
          <p className="text-xl font-semibold text-gray-700">
  Pakistan's Premier Personal Care & Beauty E-commerce
</p>
<p className="text-lg text-gray-800 max-w-3xl mx-auto">
  At our beauty and personal care store, we understand the importance of using authentic skin care and personal care products. Every individual deserves the confidence that comes with high-quality, genuine beauty essentials. With a growing demand for trustworthy online retailers and a gap in reliable platforms, we launched our store to provide easy access to premium skincare, fragrance, and haircare products.
</p>
<p className="text-lg text-gray-800 max-w-3xl mx-auto">
  Our curated collection features top-rated skin care for newborns, personal care products, best hair growth serums, and luxury fragrances. From bridal makeup essentials to DIY makeup brush cleaners, we offer a wide selection to cater to your beauty and wellness needs. Our mission is to bridge the gap between beauty enthusiasts and authentic, high-quality products.
</p>
<p className="text-lg text-gray-800 max-w-3xl mx-auto">
  With a focus on excellence, we aspire to be Pakistan’s go-to platform for personal care and fragrance products. Whether you're looking for sexual wellness products for men and women, premium skin and hair care solutions, or everyday beauty essentials, we are here to elevate your experience. Discover the true essence of beauty and self-care with our ever-expanding range of trusted brands.
</p>

        </section>
      </div>
      <Footer />
    </>
  )
}

export default About;
