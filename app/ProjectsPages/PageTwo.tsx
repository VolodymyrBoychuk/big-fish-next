import Image from "next/image";
import frameTwo from "../../assets/CarpTracker/pageTwo/Frame-2-1.png";
import iphone16Pro from "../../assets/CarpTracker/pageTwo/iPhone-16-Pro.png";
import iphone16ProTwo from "../../assets/CarpTracker/pageTwo/iPhone-16-Pro2.png";
import rightArrowAlt from "../../assets/Icon/right-arrow-alt-2.svg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vionum",
  description: "Vionum company website",
  robots: {
    index: false,
    follow: false,
  },
};

const PageTwo = () => {
  return (
    <div className="relative w-full bg-[#0c1650]">
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        <Image
          src={frameTwo}
          alt="Frame"
          className="absolute top-[165px] left-[-17px] object-cover w-[808px] h-[670px]"
          priority
        />
        <Image
          src={iphone16Pro}
          alt="iPhone 16 Pro"
          className="absolute top-[100px] left-[169px] object-cover w-[273px] h-[528px]"
          priority
        />
        <Image
          src={iphone16ProTwo}
          alt="iPhone 16 Pro 2"
          className="absolute top-[272px] left-[431px] object-cover w-[273px] h-[528px]"
          priority
        />
      </div>

      {/* Content */}
      <div className="absolute left-[800px] top-[182px] w-[450px] z-10 space-y-10">
        {/* Heading */}
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="relative inline-block">
              <Image
                src={rightArrowAlt}
                alt="Arrow Icon"
                className="w-[24px] h-[24px]"
              />
            </div>
            <h2 className="text-2xl font-extrabold text-[#4a90e2] leading-[100%]">
              What We Built
            </h2>
          </div>
        </div>

        {/* Content Text */}
        <div className="space-y-8">
          <p className="text-[16px] leading-[24px] text-white/80 font-normal">
            <span className="font-bold text-white">
              SwiftUI + UIKit Hybrid:
            </span>{" "}
            SwiftUI used for layout speed; UIKit for critical components like
            sheets, lists, and animation-driven views.
          </p>
          <p className="text-[16px] leading-[24px] text-white/80 font-normal">
            <span className="font-bold text-white">
              Reactive State with Combine:
            </span>{" "}
            State-driven logic for sessions, rods, bite events, and UI flow —
            all built with Combine publishers and clean separation of concerns.
          </p>
          <p className="text-[16px] leading-[24px] text-white/80 font-normal">
            <span className="font-bold text-white">
              Local Database with Realm:
            </span>{" "}
            Real-time data persistence for rods, catches, and sessions. Enables
            full offline functionality and fast filtering.
          </p>
          <p className="text-[16px] leading-[24px] text-white/80 font-normal">
            <span className="font-bold text-white">Custom UI Design:</span>{" "}
            Entire app interface follows a bespoke design — no templates or UI
            kits. Focused on contrast, visibility in outdoor light, and tap
            precision.
          </p>
          <p className="text-[16px] leading-[24px] text-white/80 font-normal">
            <span className="font-bold text-white">
              In-App Purchases Ready:
            </span>{" "}
            Architected and stubbed for scalable monetization — premium
            features, advanced stats, backups (via StoreKit).
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
