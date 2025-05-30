import Image from "next/image";
import programming from "../../assets/programming-background-with-person-working-with-codes-computer 1.png";
//import rightArrow from "../../assets/Icon/right-arrow-alt-2.svg";

import TwoColumnList from "../components/TwoColumnList";

export interface Tech {
  id: number;
  title: string;
  content: string;
}

const data: Tech[] = [
  {
    id: 1,
    title: "iOS",
    content: `* Swift
* UIKit + SwiftUI (hybrid architecture)
* Combine (reactive state flow)
* StoreKit 2 (in-app purchases)
* Realm / Core Data (offline-first data)
* Background sync, local notifications, timers
* Custom UI components (scrolling, gestures, sheets)
* Modular architecture (MVVM, DI, async-safe patterns)`,
  },

  {
    id: 2,
    title: "Android",
    content: `* Kotlin
* Jetpack Compose (or XML)
* Retrofit (networking)
* Room (offline data)
* Coroutines & Flow (reactive programming)
* Material 3
* Hilt / Dagger
* Background workers, file sync, notifications`,
  },
  {
    id: 3,
    title: "Backend & APIs",
    content: `* Node.js / Express
* NestJS (TypeScript-based, modular backend architecture)
* .NET Core / Web API
* Firebase (auth, database, messaging) Integrations & Patterns:
* REST & GraphQL APIs
* JWT / OAuth2 auth flows
* Role-based access, rate-limiting, throttling
* Cloud functions / serverless modules
* Caching, validation, database integration (PostgreSQL, MongoDB, Firebase)`,
  },
  {
    id: 4,
    title: "Cloud & Infrastructure",
    content: `* Amazon S3 – File & media storage (user photos, documents, backups)
* Amazon CloudFront – Fast global content delivery (CDN)
* Amazon RDS – Managed databases (PostgreSQL, MySQL)
* Amazon Cognito – Scalable user authentication (JWT, federated auth)
* Amazon Lambda – Serverless functions for events and background tasks
* Amazon SES – Transactional emails (for verification, alerts, reports)`,
  },
  {
    id: 5,
    title: "Web",
    content: `* React / Next.js
* Tailwind CSS / Figma tokens
* Dynamic admin panels, dashboards, landing pages
* Shared design logic with mobile
* Fast SPA or SSR rendering for performance`,
  },
  {
    id: 6,
    title: "Dev Process & Collaboration",
    content: `* GitHub / GitLab
* Trello / Notion / Linear
* Figma (for handoff + design reviews)
* Postman / Swagger for API testing
* CI/CD pipelines: GitHub Actions, Xcode Cloud, Firebase TestLab
* Modular starter kits for common MVP setups`,
  },
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
        {/* <div className="absolute top-[650px] left-[665px] hidden lg:block z-30">
          <div className="flex items-center">
            <span className="text-[#4A90E2] text-2xl font-extrabold mr-2">
              Let&apos;s tell more
            </span>
            <Image src={rightArrow} alt="Icon" width={40} height={40} />
          </div>
        </div> */}

        {/* Two Column List */}
        <div className="absolute top-[170px] left-[295px] w-full h-full z-30 hidden lg:block">
          <TwoColumnList items={data} />
        </div>
      </div>
    </div>
  );
};

export default Technology;
