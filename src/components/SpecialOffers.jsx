import Image from 'next/image';

const offers = [
  {
    brand: 'L\'OREAL PARIS',
    discount: 'FLAT 15% OFF',
    image: 'https://cdn.shopify.com/s/files/1/0576/9579/7455/files/L_Oreal_Skincare_56.png?v=1737117784',
  },
  {
    brand: 'MAYBELLINE NEW YORK',
    discount: 'FLAT 40% OFF',
    image: 'https://cdn.shopify.com/s/files/1/0576/9579/7455/files/Maybelline_Flat_40_off.png?v=1737122527',
  },
  {
    brand: 'LAMEL',
    discount: 'FLAT 20% OFF',
    image: 'https://cdn.shopify.com/s/files/1/0576/9579/7455/files/Lamel_13_abf433fd-0c85-4d35-8e0a-71b086fcf8eb.png?v=1737117784',
  },
  {
    brand: 'L\'OREAL PARIS',
    discount: 'FLAT 15% OFF',
    image: 'https://cdn.shopify.com/s/files/1/0576/9579/7455/files/Rederm_26_febfb3a6-be12-43c1-a77a-b587f067ac7c.png?v=1737117784',
  },
  {
    brand: 'MAYBELLINE NEW YORK',
    discount: 'FLAT 40% OFF',
    image: 'https://cdn.shopify.com/s/files/1/0576/9579/7455/files/Miss_Rose_31.png?v=1737117784',
  },
  {
    brand: 'LAMEL',
    discount: 'FLAT 20% OFF',
    image: 'https://cdn.shopify.com/s/files/1/0576/9579/7455/files/BioAqua_13.png?v=1737117784',
  },
];

const SpecialOffers = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 px-4">
        {offers.map((offer, index) => (
          <div key={index} className="relative rounded-lg p-4">
            <Image
              src={offer.image}
              alt={offer.brand}
              width={400}
              height={400}
              className="rounded-t-lg mx-auto"
            />
            {/* <div className="absolute bottom-0 w-full text-center bg-purple-700 text-white py-2 rounded-b-lg">
              <p className="font-bold">{offer.discount}</p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
