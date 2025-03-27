import Image from 'next/image';

const BannerSection = () => {
  return (
    <div className="py-8">
      {/* Upper Image */}
      <div className="mb-8">
        <Image
          src="https://cdn.shopify.com/s/files/1/0576/9579/7455/files/Bundles_Breaker_Banner_1.png?v=1736248579" // Replace with actual URL
          alt="Glow in a Budget Bundles"
          width={1200}
          height={600}
          className="rounded-lg mx-auto"
        />
      </div>

      {/* Lower Image */}
      <div>
        <Image
          src="https://cdn.shopify.com/s/files/1/0576/9579/7455/files/Jenpharm_Breaker_Banner_2c2d5ef5-1c40-4a01-8991-2556a3499416.png?v=1737185544" // Replace with actual URL
          alt="JenPharm Life Sciences"
          width={1200}
          height={600}
          className="rounded-lg mx-auto"
        />
      </div>
    </div>
  );
};

export default BannerSection;
