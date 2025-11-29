import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { getAllPosts } from "../../lib/posts";
import { notFound } from "next/navigation";
import "./markdown.css";
import type { Metadata } from "next";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).isSpace = (ch: string | number) => {
  if (typeof ch === "string") ch = ch.charCodeAt(0);
  return ch === 32 || ch === 9 || ch === 10 || ch === 13;
};

export const metadata: Metadata = {
  title: "Vionum",
  description: "Vionum company website",
  robots: {
    index: false,
    follow: false,
  },
};

const md: MarkdownIt = new MarkdownIt({
  html: true,
  highlight: (str: string, lang: string): string => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${
          hljs.highlight(str, { language: lang }).value
        }</code></pre>`;
      } catch (err) {
        console.error("Highlight error:", err);
      }
    }

    // If the language is not recognized, or if there's an error, fallback to plain text
    // and escape HTML to prevent XSS attacks
    return `<pre class="hljs"><code>${MarkdownIt.prototype.utils.escapeHtml(
      str
    )}</code></pre>`;
  },
});

export interface Post {
  slug: string;
  title: string;
  text: string;
  image: string;
  date: string;
  content: string;
}

async function fetchPost(slug: string) {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) as Post;
}

export default async function Post(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }

  const htmlContent = md.render(post.content);

  return (
    <div className="bg-[#0c1650] min-h-screen overflow-hidden">
      <div className="max-w-[1000px] mx-auto py-12  md:py-20">
        <div className="relative pl-6 z-10">
          <div className="flex justify-between w-full mb-0">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight text-left">
              {post.title}
            </h1>
          </div>

          <div className="flex items-center mt-4">
            <h2 className="text-white text-2xl font-bold leading-[140%]">
              {post.date}
            </h2>
          </div>
        </div>

        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
