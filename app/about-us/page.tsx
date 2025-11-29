import Image from "next/image";
import colleaguesOfficeHoldingHandsEachOther1 from "../../assets/colleagues-office-holding-hands-each-other-1.png";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vionum",
  description: "Vionum company website",
  robots: {
    index: false,
    follow: false,
  },
};

const About = () => {
  return (
    <div className="relative h-screen pt-[100px] w-full bg-[#0c1650] ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 top-[60px]">
        <Image
          src={colleaguesOfficeHoldingHandsEachOther1}
          alt="Colleagues office"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT SIDE TEXT */}
          <div className="flex flex-col gap-1">
            <div className="bg-[#0c1650] rounded-md shadow-lg p-6 md:p-10">
              <div className="flex flex-col gap-4">
                <h1 className="font-extrabold text-[64px] bg-gradient-to-r from-[#4a90e2] via-[#4a90e2] to-white bg-clip-text text-transparent">
                  About <span className="text-white">Us</span>
                </h1>

                <div className="bg-[#374591] w-[184px] h-10 rounded-sm flex items-center pl-4">
                  <span className="font-medium text-xl text-white leading-none">
                    We&apos;re a small,
                  </span>
                </div>

                <div className="bg-[#4a90e2] w-[382px] h-[52px] rounded-sm flex items-center pl-4">
                  <span className="font-bold text-4xl text-white">
                    high-performance
                  </span>
                </div>

                <p className="font-bold text-[20px] text-white">
                  dev studio run by engineers who know iOS inside out — and how
                  to make systems scale smoothly.
                </p>
              </div>
            </div>

            <div className="rounded-md shadow-lg p-6 md:p-10">
              <p className="text-lg font-medium text-white/80">
                We believe in clean architecture, developer-friendly code, and
                long-term maintainability.
                <br />
                <br />
                Whether we&apos;re building your MVP or improving an existing
                codebase, we treat every line of code like it&apos;s going to
                production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
