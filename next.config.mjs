 module.exports = {
    async rewrites() {
      return [
        {
          source: "/sitemap.xml",
          destination: "/api/sitemap"
        }
      ];
    }
  };  

  module.exports = {
    async rewrites() {
      return [
        {
          source: "/robots.txt",
          destination: "/api/robots"
        }
      ];
    }
  };
  


  module.exports = {
    async rewrites() {
      return [
        {
           images: {
    domains: [
      'cdn.shopify.com', 
      'media.naheed.pk', 
      'www.theskinfit.com', // Added this domain as well
      'media.highfy.pk', // Added this domain to the list
      'bagallery.com',
      'imagedelivery.net',
      'highfy.pk',
      'www.makeupcityshop.com'
    ],
  }
        }
      ];
    }
  };  

    