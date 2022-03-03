import { SitemapStream, streamToPromise } from 'sitemap';
import { NextRequest, NextResponse } from 'next/server';

export default async (request: NextRequest, response: NextResponse) => {
  try {
    const smStream = new SitemapStream({
      hostname: `https://${request.headers.host}`,
      cacheTime: 600000,
    });

    // List of posts
    const posts = [];

    // Create each URL row
    posts.forEach(post => {
      smStream.write({
        url: `/post/${post.slug}`,
        changefreq: 'daily',
        priority: 0.9
      });
    });

    // End sitemap stream
    smStream.end();

    // XML sitemap string
    const sitemapOutput = (await streamToPromise(smStream)).toString();

    // Change headers
    response.writeHead(200, {
      'Content-Type': 'application/xml'
    });

    // Display output to user
    response.end(sitemapOutput);
  } catch(e) {
    console.log(e)
    response.send(JSON.stringify(e))
  }
}
