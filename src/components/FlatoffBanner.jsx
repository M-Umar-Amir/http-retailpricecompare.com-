import Image from 'next/image';

const offers = [
  {
    brand: 'L\'OREAL PARIS',
    discount: 'FLAT 15% OFF',
    image: 'https://cdn.shopify.com/s/files/1/0576/9579/7455/files/HerBeauty_54_251faa1c-a30e-47ef-9b83-fe5d7f2b99a7.png?v=1737118778',
  },
  {
    brand: 'MAYBELLINE NEW YORK',
    discount: 'FLAT 40% OFF',
    image: 'https://cdn.shopify.com/s/files/1/0576/9579/7455/files/Makeup_Revolution_57.png?v=1737118778',
  },
  {
    brand: 'LAMEL',
    discount: 'FLAT 20% OFF',
    image: 'https://cdn.shopify.com/s/files/1/0576/9579/7455/files/Bourjois_42.png?v=1737118778',
  },
  {
    brand: 'L\'OREAL PARIS',
    discount: 'FLAT 15% OFF',
    image: 'https://cdn.shopify.com/s/files/1/0576/9579/7455/files/Dr_Rashel_67_7c7ed50b-b1fc-41ea-81bc-e387c94a2e3c.png?v=1737118778',
  },
  {
    brand: 'MAYBELLINE NEW YORK',
    discount: 'FLAT 40% OFF',
    image: 'https://cdn.shopify.com/s/files/1/0576/9579/7455/files/Neutrogena_76_f2631f58-a93b-463c-ad4b-88a883893425.png?v=1737118778',
  },
  {
    brand: 'LAMEL',
    discount: 'FLAT 20% OFF',
    image: 'https://cdn.shopify.com/s/files/1/0576/9579/7455/files/Rimmel_62.png?v=1737118778',
  },
];

const FlatofferBanner = () => {
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



export default FlatofferBanner;
