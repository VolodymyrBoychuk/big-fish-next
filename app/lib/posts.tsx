import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post } from "../posts/[slug]/page";

const postsDirectory = path.join(process.cwd(), "public/posts");

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    if (
      typeof data.title !== "string" ||
      typeof data.text !== "string" ||
      typeof data.image !== "string" ||
      typeof data.date !== "string"
    ) {
      throw new Error(`Not enough data in the file: ${fileName}`);
    }

    return {
      slug,
      title: data.title,
      text: data.text,
      image: data.image,
      date: data.date,
      content,
    };
  });
}
