import Image from "next/image";
import female from "../assets/female-web-designer-office-1.png";
import representation from "../assets/representation-user-experience-interface-design-1.png";

export default function Home() {
  return (
    <div className="flex justify-center w-full min-h-screen bg-[#0c1650]">
      <div className="relative w-full h-screen overflow-hidden bg-[#0c1650]">
        {/* Background Images */}
        <Image
          src={female}
          alt="Female web designer in office"
          className="absolute top-[330px] w-[643px] h-[522px] object-cover opacity-50 mix-blend-color-dodge"
          placeholder="blur"
        />
        <Image
          src={representation}
          alt="User experience interface design"
          className="absolute top-[-69px] left-[652px] w-[619px] h-[328px] object-cover mix-blend-color-dodge"
          placeholder="blur"
        />

        {/* Rotated Text */}
        <h2 className="absolute top-[10px] left-[317px] w-[592px] rotate-[-90deg] text-[#4a90e2] text-[64px] font-extrabold">
          scalable
        </h2>

        {/* Main Heading */}
        <div className="absolute top-[122px] left-[150px] w-[422px] h-[214px]">
          <h1 className="text-white text-[64px] font-extrabold whitespace-nowrap">
            We build fast,
          </h1>
          <div className="absolute top-[72px] left-[230px] text-right">
            <p className="m-0 text-white text-8xl font-black leading-none">
              IOS
            </p>
            <p className="m-0 text-white text-4xl font-black leading-none">
              apps
            </p>
          </div>
        </div>

        {/* Subheading */}
        <p className="absolute top-[365px] left-[648px] w-[592px] text-4xl text-white font-extrabold">
          with UIKit, SwiftUI, and performance-first architecture.
        </p>

        {/* Description */}
        <p className="absolute top-[480px] left-[648px] w-[620px] text-xl leading-[34px] text-white/80">
          We help startups and product teams launch clean, production-ready apps
          using hybrid SwiftUI/Combine/UIKit components — designed for
          maintainability, performance, and future scaling.
        </p>

        {/* CTA Button */}
        <div className="absolute top-[600px] left-[648px]">
          <button className="bg-[#4a90e2] text-white text-base font-medium px-[18px] py-[10px] rounded hover:bg-[#3a78c2] transition-colors duration-200">
            Let&apos;s talk
          </button>
        </div>
      </div>
    </div>
  );
}
