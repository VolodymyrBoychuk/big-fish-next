"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import PageOne from "../ProjectsPages/PageOne";
import PageTwo from "../ProjectsPages/PageTwo";
import PageThree from "../ProjectsPages/PageThree";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [autoChange, setAutoChange] = useState<boolean>(true);

  const pages = [
    <PageOne key="page-one" />,
    <PageTwo key="page-two" />,
    <PageThree key="page-three" />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoChange) {
        setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [autoChange, pages.length]);

  // Функція для зміни сторінки
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setAutoChange(false); // Вимикає автоматичну зміну
  };

  // Отримуємо стиль для кнопки в залежності від активної сторінки
  const getButtonStyle = (index: number) => {
    const isActive = currentPage === index;
    return `border-2 px-4 py-2 text-white font-medium transition-all duration-200 ${
      isActive
        ? "bg-[#1650] border-[#4a90e2] hover:bg-white hover:text-[#0c1650]"
        : "bg-[#4a90e2] border-[#4a90e2] hover:bg-[#4a90e2] hover:text-white"
    }`;
  };

  return (
    <div className="relative w-full h-screen bg-[#0c1650] flex flex-col items-center justify-between">
      {/* Сторінки */}
      <div className="relative w-full h-full overflow-hidden">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <div className="shadow-md">{pages[currentPage]}</div>
        </motion.div>
      </div>

      {/* Кнопки навігації */}
      <div className="absolute bottom-5 right-5 flex space-x-3">
        <button
          onClick={() => handlePageChange(0)}
          className={getButtonStyle(0)}
        >
          1
        </button>
        <button
          onClick={() => handlePageChange(1)}
          className={getButtonStyle(1)}
        >
          2
        </button>
        <button
          onClick={() => handlePageChange(2)}
          className={getButtonStyle(2)}
        >
          3
        </button>
      </div>
    </div>
  );
};

export default Projects;
