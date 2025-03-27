import CategoryBar from "@/components/CategorySection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PromoBanner from "@/components/PromoBanner";

// pages/contact.js
export default function ContactUs() {
    return (
        
      <div className="bg-gray-50">
        {/* Header Section */}
        <header>
            <PromoBanner />
            <Navbar />
            <CategoryBar />
        </header>
  
        {/* Main Content */}
        <main
  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-poppins bg-cover bg-center"
  style={{
    backgroundImage: "url('https://cdn.shopify.com/s/files/1/0576/9579/7455/files/4907157_3a433f09-65f1-427d-bbc7-ae0d1e40300b.jpg?v=1712563542')",
  }}
>          {/* Contact Us Section */}
         {/* Contact Us Section */}
{/* Contact Us Section */}
<section className="mb-20 mt-10">
  <h1 className="text-3xl text-center font-bold text-gray-800">Contact Us</h1>
  <p className="mt-4 text-center text-6xl font-semibold text-gray-800">
    You're not a stranger, let's talk.
  </p>
  <div className="mt-6 flex flex-col space-y-6 text-lg text-gray-600">
    <div className="flex flex-col">
      <span className="font-medium text-gray-800 w-24 text-2xl">Email:</span>
      <a href="mailto:support@highfy.pk" className="text-purple-600 underline">
        support@highfy.pk
      </a>
    </div>
    <div className="flex flex-col">
      <span className="font-medium text-gray-800 w-24 text-2xl">Phone:</span>
      <a href="tel:021-37133279" className="text-purple-600 underline">
        021-37133279
      </a>
    </div>
    <div className="flex flex-col">
      <span className="font-medium text-gray-800 w-24 text-2xl">Address:</span>
      <span>
        VBuild Infinity Tower, Office No # 2A, Khaliq-uz-Zaman Rd, Block B Clifton, Karachi, Sindh 75600
      </span>
    </div>
  </div>
</section>


  
          {/* FAQs Section */}
          <section>
            <h2 className="text-4xl font-medium text-gray-800 text-center mb-8">FAQS</h2>
            <div className="space-y-4">
              {[
                "How can I pay for my order?",
                "What are our delivery charges?",
                "How can I get a refund?",
                "How can I replace a product?",
                "Do I have to pay for shipping charges when replacing a product?",
                "What will happen if my return request is not approved?",
              ].map((faq, index) => (
                <details
                  key={index}
                  className="bg-white shadow-sm p-4 rounded-md border border-gray-200"
                >
                  <summary className="font-medium text-gray-800 cursor-pointer">
                    {faq}
                  </summary>
                  <p className="mt-2 text-gray-600">
                    This is a placeholder answer. You can customize the content
                    as needed.
                  </p>
                </details>
              ))}
            </div>
          </section>
        </main>
  
        {/* Features Section */}
        <section className="bg-customGreen text-white py-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-8">
    {[
      {
        icon: "🚚",
        title: "Nationwide Shipping",
        description: "We ship all over Pakistan.",
      },
      {
        icon: "💬",
        title: "24/7 Customer Support",
        description: "We are here to answer all your queries.",
      },
      {
        icon: "🌐",
        title: "Best Global Brands",
        description: "We provide the best brands available globally.",
      },
      {
        icon: "💰",
        title: "Best Rates in Town",
        description: "We promise to provide the best prices.",
      },
    ].map((feature, index) => (
      <div
        key={index}
        className="flex items-center text-center md:text-left space-x-4"
      >
        <div className="text-7xl">{feature.icon}</div>
        <div>
          <h3 className="text-2xl font-semibold">{feature.title}</h3>
          <p className="text-lg">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

  
        {/* Footer */}
       <div>
        <h3>Why Use Our Store Price Comparison Website?</h3>
        <p>You can find the best deals instantly for free!</p>
        <Footer />
       </div>
      </div>
    );
  }
  