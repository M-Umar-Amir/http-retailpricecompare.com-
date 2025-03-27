/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.shopify.com",
      "media.naheed.pk",
      "www.theskinfit.com",
      "media.highfy.pk",
      "bagallery.com",
      "imagedelivery.net",
      "highfy.pk",
      "www.makeupcityshop.com"
    ]
  },
  trailingSlash: true,  // Ensures GitHub Pages works correctly     // Exports static HTML for deployment
};

module.exports = nextConfig;
