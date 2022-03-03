import { GetServerSideProps } from "next";

const Sitemap = () => {
    return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = 'https://jonasdev.com.br';
  const allPaths = [
    `${BASE_URL}/`,
    `${BASE_URL}/products`
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths.map((url) => {
        return `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
        `;
      }).join("")}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
      props: {},
  };
};

export default Sitemap;
