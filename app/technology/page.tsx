import Image from "next/image";
import programming from "../../assets/programming-background-with-person-working-with-codes-computer 1.png";
import rightArrow from "../../assets/Icon/right-arrow-alt-2.svg";

import TwoColumnList from "../components/TwoColumnList";

export interface Tech {
  id: number;
  title: string;
  content: string;
}

const data: Tech[] = [
  {
    id: 1,
    title: "Finance (FinTech)",
    content: `Our core focus is native iOS development — but our strength goes deeper: we’ve worked on
            complex production systems with performance-critical database access, large data flows,
            and tight integration between frontend and backend.
            We know how to structure your app for real-world scale — from hybrid UIKit/SwiftUI
            interfaces to asynchronous state flows and optimized data access (CoreData, SQLite,
            CloudKit, or custom APIs).`,
  },
  { id: 2, title: "Healthcare (HealthTech)", content: "You never see it" },
  { id: 3, title: "Logistics", content: "Це вміст для пункту 3" },
];

const Technology = () => {
  return (
    <div className="bg-[#0c1650] p-[60px] h-screen overflow-hidden relative">
      <div className="relative max-w-6xl mx-auto py-12 md:py-20 px-4">
        {/* Image */}
        <div className="relative max-w-[600px] mt-10 mb-12">
          <Image
            src={programming}
            alt="Man makes online payment"
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Title Text */}
        <div className="absolute top-6 left-4 md:left-0 z-30">
          <h2 className="text-white text-4xl md:text-6xl font-extrabold leading-tight">
            Technology
          </h2>
        </div>

        {/* Right Arrow Text Block */}
        <div className="absolute top-[650px] left-[665px] hidden lg:block z-30">
          <div className="flex items-center">
            <span className="text-[#4A90E2] text-2xl font-extrabold mr-2">
              Let&apos;s tell more
            </span>
            <Image src={rightArrow} alt="Icon" width={40} height={40} />
          </div>
        </div>

        {/* Two Column List */}
        <div className="absolute top-[170px] left-[295px] w-full h-full z-30 hidden lg:block">
          <TwoColumnList items={data} />
        </div>
      </div>
    </div>
  );
};

export default Technology;
