export default function handler(req, res) {
    const robots = `User-agent: *
  Disallow:
  
  Sitemap: https://retailpricecompare.com/sitemap.xml
  `;
  
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(robots);
  }
  