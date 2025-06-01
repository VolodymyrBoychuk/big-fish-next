import Image from "next/image";
import green_land from "../../assets/CarpTracker/pageThree/Rectangle-8.png";
import iphone13Pro from "../../assets/CarpTracker/pageThree/iPhone-13-Pro.png";
import rightArrowAlt from "../../assets/CarpTracker/pageTwo/Icon/right-arrow-alt.png";
import bottomArrowAlt from "../../assets/CarpTracker/pageThree/Icon/right-arrow-alt.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Big Fish",
  description: "Big Fish company website",
  robots: {
    index: false,
    follow: false,
  },
};

const PageThree = () => {
  return (
    <div className="relative bg-[#0c1650] w-full">
      {/* Left Section: Core Features */}
      <div className="absolute left-[88px] top-[159px] z-10 space-y-10 w-[600px]">
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="relative inline-block">
              <Image
                src={rightArrowAlt}
                alt="Arrow Icon"
                className="w-[24px] h-[24px]"
              />
            </div>
            <h2 className="text-2xl font-extrabold text-[#4A90E2]">
              Core Features
            </h2>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold text-[16px] leading-[24px] mb-1">
                Rod Configuration Engine
              </h3>
              <p className="text-[#FFFFFFB2] text-[16px] leading-[24px]">
                Set up multiple rods with distance, bait, timer logic, reminder
                alerts, and haptic feedback.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-[16px] leading-[24px] mb-1">
                Session History + Filters
              </h3>
              <p className="text-[#FFFFFFB2] text-[16px] leading-[24px]">
                Persistent data stored locally with deep filtering (by location,
                effectiveness, date).
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold text-[16px] leading-[24px] mb-1">
                Bite & Catch Logger
              </h3>
              <p className="text-[#FFFFFFB2] text-[16px] leading-[24px]">
                Instant entry for species, weight, bait, rod number, and catch
                timing. Includes visual indicators and completion flow.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold text-[16px] leading-[24px] mb-1">
                Session Summary + Stats
              </h3>
              <p className="text-[#FFFFFFB2] text-[16px] leading-[24px]">
                Post-session dashboard showing total catches, weight, bait
                effectiveness, and per-rod stats.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Architecture & Scalability */}
      <div className="absolute left-[88px] top-[580px] w-[600px]">
        <h3 className="text-white font-semibold text-[24px] leading-[24px] mb-1">
          Architecture & Scalability
        </h3>
        <ul className="text-[#FFFFFFB2] text-[16px] leading-[24px] font-normal list-disc space-y-2 mt-4 pl-4">
          <li>Modular architecture ready for feature scaling</li>
          <li>
            Future-ready for iCloud sync, advanced statistics, and multiple user
            profiles
          </li>
          <li>In-app purchase layer architected with clean upgrade path</li>
          <li>
            Codebase structured for team collaboration and long-term
            maintainability
          </li>
        </ul>
      </div>

      {/* Right Section: Image and Result */}
      <div className="absolute top-[210px] right-0 w-[617px] h-[571px]">
        <Image
          src={green_land}
          alt="Green Land"
          className="absolute top-0 left-0 object-cover w-[617px] h-[571px]"
        />
        <Image
          src={iphone13Pro}
          alt="iPhone 13 Pro"
          className="absolute top-[-160px] right-[50px] object-cover w-[617px] h-[571px]"
        />
        <Image
          src={bottomArrowAlt}
          alt="Arrow Icon"
          className="absolute top-[340px] left-[40px] w-[24px] h-[24px]"
        />
        <p className="absolute top-[370px] left-[40px] text-white font-extrabold text-[16px] leading-[100%]">
          Result
        </p>
        <p className="absolute top-[400px] left-[40px] text-white font-medium text-[16px] leading-[24px] w-[464px]">
          A high-performance MVP that feels premium from first launch — built
          for fishing in real-world outdoor conditions, optimized for quick
          interaction, offline storage, and intuitive rod-by-rod management.
        </p>
      </div>
    </div>
  );
};

export default PageThree;
