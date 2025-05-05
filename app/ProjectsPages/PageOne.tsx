import Image from "next/image";
import x121 from "../../assets/CarpTracker/12-1.png";
import green_bg from "../../assets/CarpTracker/green_237974_755x375.png";
import iconCarpl from "../../assets/CarpTracker/icon-carp-1.png";
import iphone16Pro from "../../assets/CarpTracker/iPhone-16-Pro.png";
import rightArrowAlt from "../../assets/CarpTracker/right-arrow-alt.svg";

const PageOne = () => {
  return (
    <div className="relative w-full bg-[#0c1650]">
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        <Image
          src={x121}
          alt="Colleagues office"
          className="absolute top-[239px] right-1/2 object-cover w-[755px] h-[375px]"
          priority
        />
        <Image
          src={green_bg}
          alt="Colleagues office"
          className="absolute top-[239px] left-1/2 object-cover w-[755px] h-[375px]"
          priority
        />
      </div>

      {/* Main content */}
      <div className="flex h-screen">
        <div className="w-full pl-[100px] pr-[100px] mt-28 space-y-10">
          {/* Case Study */}
          <div className="space-y-3">
            <div className="flex items-center gap-5">
              <div className="space-y-4 text-center">
                <p className="text-[16px] font-extrabold pl-2 leading-[100%]">
                  Case Study
                </p>
                <Image
                  src={iconCarpl}
                  alt="Carp icon"
                  className="w-[82px] h-[82px] rounded-[10px] object-cover"
                  priority
                />
              </div>
              <div className="text-white pt-6">
                <h2 className="text-[#4a90e2] text-[48px] font-extrabold leading-[100%]">
                  CarpTracker
                </h2>
                <p className="text-[16px] leading-[30px] font-normal">
                  <span className="font-extrabold">Fishing Session</span>{" "}
                  Companion App
                </p>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-x-3 gap-y-6 mt-20 z-10">
            <div>
              <p className="text-[16px] pr-[140px] text-left leading-[24px] font-medium text-white">
                <span className="font-extrabold">CarpTracker</span> is a
                custom-built iOS application for fishing enthusiasts, designed
                to streamline the experience of managing and tracking fishing
                sessions.
              </p>
            </div>
            <div className="flex items-center relative left-[320px]">
              <Image
                src={rightArrowAlt}
                alt="Icon"
                className="w-[24px] h-[24px] relative"
                priority
              />
              <p className="text-2xl font-extrabold text-white">
                What We Built
              </p>
            </div>
            <div>
              <p className="text-[16px] pr-[175px] text-left leading-[24px] font-medium text-white">
                The app combines a unique design, intuitive controls, and
                real-time performance to help users stay{" "}
                <span className="font-extrabold">
                  focused on their rods — not their screens.
                </span>
              </p>
            </div>
            <div className="relative left-[350px] top-[-10px] w-[253px]">
              <p className="text-[16px] text-white font-normal leading-[24px]">
                We developed CarpTracker as a fully offline-first,
                performance-focused SwiftUI/Combine app with UIKit integration
                for complex views and interactions.
              </p>
            </div>
          </div>
        </div>

        {/* iPhone image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={iphone16Pro}
            alt="Iphone 16 Pro"
            className="absolute top-[70px] left-[42%] object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default PageOne;
