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
    title: "Healthcare & Wellness",
    content: `We build wellness and health-support apps where trust, clarity, and performance are critical. From mental health tools to habit systems or patient onboarding flows — our systems are built with privacy, offline access, and simplicity in mind.
We support design teams with clean handoff, build modular frontends, and integrate with secure backends or APIs as needed. Whether you're working on a B2C product or an internal patient app, we structure the product around clarity and future-proof tech decisions.`,
  },
  {
    id: 2,
    title: "E-commerce & Subscriptions",
    content: `We help commerce platforms and subscription products create fast, high-conversion experiences. From storefronts and onboarding to purchase logic and upsells — we focus on fluid UX, backend stability, and monetization.
We support mobile and web frontends, integrate with custom or 3rd-party APIs, and build flexible systems that can scale. We’ve also architected in-app purchase flows, push notification logic, and layered user tiers for growing businesses.`,
  },
  {
    id: 3,
    title: "Fitness & Activity Tracking",
    content: `We build reliable, real-time activity tools with user-friendly logging, timers, performance tracking, and goal logic. Whether it’s for training sessions, coaching dashboards, or personal improvement, we focus on a fluid, frictionless experience.
These apps are often used outdoors, mid-movement, or in offline settings — so we design with clarity, state safety, and battery-conscious flows. We also support in-app analytics and syncing across devices or storage layers.`,
  },
  {
    id: 4,
    title: "Productivity & Internal Tools",
    content: `We help teams and founders build tools that actually make things easier — not just add dashboards. Whether it's scheduling, form collection, session logs, or reminders, we design for clarity, simplicity, and scale.
Our work includes data architecture, modular UI, and optional backend or cloud logic. You’ll get a system that’s responsive, easy to maintain, and works with whatever stack you’re building on.`,
  },
  {
    id: 5,
    title: "Logistics & Field Tools",
    content: `We design tools for real work in messy environments: job sites, warehouses, roads, and remote areas. Offline-first, clean interface, fast sync, low-risk errors — these are the priorities we build around.
Our systems support backend syncing, file uploads, form logic, camera or QR integrations, and checklist workflows. The frontend is simple and rugged — not a pretty UI that breaks in the field.`,
  },
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
