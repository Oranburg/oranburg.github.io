import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { postUrl, byDateDesc, stripHtml } from "../lib/posts.js";

// Feed parity with jekyll-feed's /feed.xml.
export async function GET(context) {
  const posts = (await getCollection("insights")).sort(byDateDesc);
  return rss({
    title: "Seth C. Oranburg",
    description:
      "Law professor and scholar researching how technological disruption destabilizes moral norms and social trust, and how legal design can restore integrity to markets and institutions.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.deck || stripHtml(post.data.excerpt || ""),
      link: postUrl(post),
    })),
  });
}
