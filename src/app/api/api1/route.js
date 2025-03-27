export async function GET() {
    const response = await fetch("https://be-web-scraping.vercel.app/api/getAllProducts.js", {
      headers: { "Content-Type": "application/json" },
    });
  
    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch products" }), { status: 500 });
    }
  
    const data = await response.json();
    return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
  }


  
  