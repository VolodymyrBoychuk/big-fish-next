//"use client";

import Image from "next/image";
import code from "../../assets/code.svg";
import optimization from "../../assets/optimization.svg";
import rewardLaptop from "../../assets/reward-laptop.svg";
import support from "../../assets/support.svg";
import ui from "../../assets/ui.svg";
import vector from "../../assets/vector.svg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vionum",
  description: "Vionum company website",
  robots: {
    index: false,
    follow: false,
  },
};

const services = [
  {
    icon: vector,
    title: "IOS App Development",
    description:
      "We build fast, production-ready iOS apps using a hybrid UIKit + SwiftUI architecture. Whether it’s a full MVP or a complex module, we deliver scalable, testable codebases.",
  },
  {
    icon: code,
    title: "Backend API Integration",
    description:
      "We integrate your iOS frontend with Node.js, .NET, or custom REST APIs — handling everything from token-based auth to real-time updates with proper async flows.",
  },
  {
    icon: ui,
    title: "UI/UX Design",
    description:
      "We collaborate with an experienced UI/UX designer to deliver modern, conversion-focused interfaces tailored to your product and users. Design handoff is smooth and dev-ready.",
  },
  {
    icon: optimization,
    title: "Code Audits & Optimization",
    description:
      "Need to fix or improve an existing project? We’ll audit performance, structure, and state management — and provide hands-on fixes if needed.",
  },
  {
    icon: rewardLaptop,
    title: "Frontend Web Development",
    description:
      "For full MVPs, we can also deliver a responsive web frontend (React/Next.js) using the same design system — perfect for admin panels, landing pages, or customer dashboards.",
  },
  {
    icon: support,
    title: "Ongoing Feature Development",
    description:
      "We support startups and internal teams with feature delivery, refactoring, and platform upgrades — available on a flexible retainer or per-project basis.",
  },
];

export default function WhatWeDo() {
  return (
    <div className="bg-[#0c1650] py-24 px-4 lg:px-32">
      <div className="mb-16 max-w-[1000px] mx-auto">
        <h1 className="text-5xl font-extrabold text-white">
          <span className="text-[#4a90e2]">What</span> We Do
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
        {services.map(({ icon, title, description }) => (
          <div key={title} className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative w-[50px] h-[50px]">
                {/* Blurred blue background */}
                <div className="absolute inset-0 w-[100px] h-[100px] bg-[#0077ff] opacity-40 blur-[50px] rounded-full -top-[25px] -left-[25px]" />
                <Image
                  src={icon}
                  alt={`${title} icon`}
                  width={50}
                  height={50}
                  className="relative z-10"
                />
              </div>
              <h3 className="text-2xl font-extrabold text-white">{title}</h3>
            </div>
            <p className="text-white text-base opacity-70 pl-[66px] pr-4">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
