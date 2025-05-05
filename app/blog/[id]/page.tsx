import Image from "next/image";
import { usePagination } from "../../hooks/usePagination";
import { BlogPost } from "../../blogType";
import { useFetchBlogs } from "../../hooks/useFetchBlogs";
import { useRouter } from "next/navigation";

const Blog = () => {
  const { data, loading, error } = useFetchBlogs("items");
  const { currentItems, page, totalPages, nextPage, prevPage, goToPage } =
    usePagination(data, 3);
  const router = useRouter();

  const openSeparatePage = (item: BlogPost | null) => {
    router.push(`/separate/${item?.id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
          <div
            onClick={() => openSeparatePage(currentItems[0])}
            className="cursor-pointer hover:bg-white/10 transition duration-200"
          >
            <div className="mb-4">
              <Image
                src={currentItems[0].image}
                alt="Left Top Image"
                className="rounded-md w-full h-auto"
                width={1120}
                height={630} // Задайте розміри відповідно до вашого зображення
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
          </div>

          {/* Права колонка */}
          <div className="space-y-6">
            {/* Перший блок */}
            <div
              onClick={() => openSeparatePage(currentItems[1])}
              className="flex items-start space-x-4 cursor-pointer hover:bg-white/10 transition duration-200"
            >
              {currentItems[1] && (
                <>
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
                </>
              )}
            </div>

            {/* Другий блок */}
            <div
              onClick={() => openSeparatePage(currentItems[2])}
              className="flex items-start space-x-4 cursor-pointer hover:bg-white/10 transition duration-200"
            >
              {currentItems[2] && (
                <>
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
                </>
              )}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={prevPage}
            disabled={page === 1}
            className="bg-blue-600 text-white py-2 px-6 rounded-md disabled:opacity-50"
          >
            Preview
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i + 1)}
              className={`py-2 px-6 rounded-md ${
                page === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-transparent border-2 border-white text-white"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={nextPage}
            disabled={page === totalPages}
            className="bg-blue-600 text-white py-2 px-6 rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
