import Image from "next/image";
import manImg from "../../assets/man-makes-online-payment-with-debit-card-1.png";
import TwoColumnList from "../components/TwoColumnList";

export interface FocusArea {
  id: number;
  title: string;
  content: string;
}

const data: FocusArea[] = [
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

export default function FocusAreas() {
  return (
    <section className="relative bg-[#0c1650] h-screen overflow-hidden pt-16">
      <div className="max-w-6xl mx-auto relative py-12 md:py-20 px-4">
        {/* Зображення */}
        <div className="relative max-w-[600px] mt-20 mb-12">
          <Image
            src={manImg}
            alt="Man makes online payment"
            className="w-full h-auto object-cover"
            placeholder="blur"
          />
        </div>

        {/* Заголовок */}
        <div className="absolute top-[34px] z-30">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Our <span className="text-[#4a90e2]">Focus</span>
          </h2>
          <h3 className="relative top-[-8px] ml-0 md:ml-40 text-5xl md:text-8xl font-extrabold text-white">
            Areas
          </h3>
        </div>

        {/* Контент справа */}
        <div className="absolute top-[220px] left-[310px] w-full z-20">
          <TwoColumnList items={data} />
        </div>
      </div>
    </section>
  );
}
