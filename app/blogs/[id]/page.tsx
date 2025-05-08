import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "../../lib/posts";
import type { Metadata } from "next";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const page = Number((await params).id);
  const postsPerPage = 3;

  const allPosts = await getAllPosts();
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  const metadata: Metadata = {
    title: `Blog - Page ${page}`,
    description: `Page ${page} of our blog with current posts.`,
    alternates: {
      canonical: `/blogs/${page}`,
      ...(page > 1 && { prev: `/blogs/${page - 1}` }),
      ...(page < totalPages && { next: `/blogs/${page + 1}` }),
    },
  };

  return metadata;
}

const Blog = async ({ params }: Props) => {
  const { id } = await params;
  //console.log("ID:", id);
  const page = Number(id);
  const postsPerPage = 3;

  const posts = getAllPosts();

  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  const currentItems = posts.slice(startIndex, endIndex);

  // console.log(`Page: ${page}`);
  // console.log("Posts:", currentItems);
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const hasPrev = page > 1;
  const hasNext = page < totalPages;
  const prevPage = page - 1;
  const nextPage = page + 1;

  return (
    <div className="bg-[#0c1650] min-h-screen overflow-hidden">
      <div className="max-w-screen-xl mx-auto py-12 px-4 md:py-20">
        <div className="relative pl-6 z-10">
          <div className="flex justify-between w-full mb-0">
            <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight text-left">
              Blog
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
          {/* Ліва колонка */}
          <div className="cursor-pointer hover:bg-white/10 transition duration-200">
            <Link href={`/posts/${currentItems[0].slug}`}>
              <div className="mb-4">
                <Image
                  src={currentItems[0].image}
                  alt="Left Top Image"
                  className="rounded-md w-full h-auto"
                  width={1120}
                  height={630}
                />
              </div>
              <div>
                <h2 className="text-white text-2xl font-bold leading-[140%]">
                  {currentItems[0].title}
                </h2>
                <p className="text-white text-base font-normal leading-[150%]">
                  {currentItems[0].text}
                </p>
              </div>
            </Link>
          </div>

          {/* Права колонка */}
          <div className="space-y-6">
            {/* Перший блок */}

            {currentItems[1] && (
              <Link href={`/posts/${currentItems[1].slug}`}>
                <div className="flex items-start space-x-4 cursor-pointer hover:bg-white/10 transition duration-200">
                  <Image
                    src={currentItems[1].image}
                    alt="Space"
                    className="rounded-md w-[276px] h-[250px] object-cover"
                    width={276}
                    height={250}
                  />
                  <div>
                    <h2 className="text-white text-2xl font-bold leading-[140%]">
                      {currentItems[1].title}
                    </h2>
                    <p className="text-white text-base font-normal leading-[150%]">
                      {currentItems[1].text}
                    </p>
                  </div>
                </div>
              </Link>
            )}

            {/* Другий блок */}
            {currentItems[2] && (
              <Link href={`/posts/${currentItems[2].slug}`}>
                <div className="flex items-start space-x-4 mt-10 cursor-pointer hover:bg-white/10 transition duration-200">
                  <Image
                    src={currentItems[2].image}
                    alt="Hands"
                    className="rounded-md w-[276px] h-[250px] object-cover"
                    width={276}
                    height={250}
                  />
                  <div>
                    <h2 className="text-white text-2xl font-bold leading-[140%]">
                      {currentItems[2].title}
                    </h2>
                    <p className="text-white text-base font-normal leading-[150%]">
                      {currentItems[2].text}
                    </p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 space-x-4">
          {hasPrev ? (
            <Link
              href={`/blogs/${prevPage}`}
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Preview
            </Link>
          ) : (
            <span className="bg-blue-600 text-white py-2 px-6 rounded-md opacity-50 cursor-not-allowed">
              Preview
            </span>
          )}

          {hasNext ? (
            <Link
              href={`/blogs/${nextPage}`}
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Next
            </Link>
          ) : (
            <span className="bg-blue-600 text-white py-2 px-6 rounded-md opacity-50 cursor-not-allowed">
              Next
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
