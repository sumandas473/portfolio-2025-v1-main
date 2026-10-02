"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// 🔗 ProjectLinks button component
const ProjectLinks = ({ github, live }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-4 justify-center" >
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white hover:bg-gray-800 transition duration-300 shadow-lg"
        >
          <FaGithub />
          GitHub Repo
        </a>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300 shadow-lg"
        >
          <FaExternalLinkAlt />
          Live Demo
        </a>
      )}
    </div>
  );
};

// 🧠 Project Section
export function Projects() {
  const cards = data.map((card, index) => (
    <Card key={`card-${index}`} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20" id="projects">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Recent Projects
      </h2>
      {cards.length > 0 ? (
        <Carousel items={cards} />
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-16 text-center text-neutral-500">
          <p className="text-lg">Ready to add your projects...</p>
        </div>
      )}
    </div>
  );
}

// 📦 Project Data
export const data = [
  {
    category: "Full-Stack Healthcare",
    title: "Mothers Multispeciality Hospital",
    src: "/mothers-hospital.jpg",
    live: "https://mother-mothernursinghome.in/",
    content: (
      <div className="space-y-6 text-neutral-700 dark:text-neutral-200">
        <div>
          <h4 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white mb-2">
            Hospital Management System (HMS)
          </h4>
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            A comprehensive hospital management web application developed for Mothers Multispeciality Hospital to streamline patient registration, doctor scheduling, appointment management, and billing operations. The system provides a centralized platform for managing patient records, improving front-desk workflows, and supporting efficient hospital administration through role-based access control.
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {["React.js", "Node.js", "Express.js", "Prisma ORM", "SQL", "Hostinger", "Healthcare Tech"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-neutral-50 dark:bg-neutral-900/60 p-4 md:p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-2">
          <h5 className="font-semibold text-neutral-900 dark:text-white text-sm md:text-base mb-3">
            Key Highlights & Features:
          </h5>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span><strong>Patient Registration:</strong> Unique Hospital UHID generation & intake.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span><strong>Appointment Management:</strong> Doctor scheduling & slot booking.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span><strong>Patient Directory:</strong> Fast search & record management.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span><strong>Role-Based Access:</strong> Secure, role-specific administrative permissions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span><strong>Integrated Billing:</strong> Financial tracking & invoice workflows.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span><strong>Status Tracking:</strong> Real-time OPD, admitted, consultation & discharge tracking.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span><strong>Data Export:</strong> Export records & directory to PDF and Excel.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold">•</span>
              <span><strong>Date Filters:</strong> Filter records by today, last 7 days, or custom ranges.</span>
            </li>
          </ul>
        </div>

        <img
          src="/mothers-hospital.jpg"
          alt="Mothers Multispeciality Hospital Management System"
          className="w-full rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 object-cover"
        />

        <ProjectLinks live="https://mothernursinghome.in/" />
      </div>
    ),
  },
  {
    category: "Full-Stack Retail & POS",
    title: "Ganapati Hardware POS",
    src: "/ganapati-hardware.jpg",
    live: "https://ganapanihardware.in/",
    content: (
      <div className="space-y-6 text-neutral-700 dark:text-neutral-200">
        <div>
          <h4 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white mb-2">
            Inventory Management & Billing Software
          </h4>
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            Developed a full-stack Point of Sale (POS) and inventory management application for Ganapati Hardware to streamline sales transactions, monitor stock levels, and simplify daily business operations. The system integrates billing, invoice generation, inventory tracking, and sales reporting into a centralized platform for efficient retail management.
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {["React.js", "Node.js", "Express.js", "Prisma ORM", "SQL", "Hostinger", "POS & Retail Tech"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-neutral-50 dark:bg-neutral-900/60 p-4 md:p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-2">
          <h5 className="font-semibold text-neutral-900 dark:text-white text-sm md:text-base mb-3">
            Key Highlights & Features:
          </h5>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Inventory Management:</strong> Manage hardware products, stock quantities, and inventory records.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Real-Time Stock Tracking:</strong> Monitor stock levels as inventory changes through sales and restocks.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Low-Stock Alerts:</strong> Identify products that require restocking with instant indicators.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Fast POS Billing:</strong> Process customer purchases rapidly through an intuitive checkout counter.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Invoice Generation:</strong> Generate and print clean invoices for completed sales transactions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Sales Reporting:</strong> Review sales records, daily revenue analytics, and performance insights.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Product Management:</strong> Maintain detailed product information, pricing tiers, and stock counts.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Centralized Dashboard:</strong> Access essential billing and inventory operations from a unified interface.</span>
            </li>
          </ul>
        </div>

        <img
          src="/ganapati-hardware.jpg"
          alt="Ganapati Hardware POS & Inventory Management"
          className="w-full rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 object-cover"
        />

        <ProjectLinks live="https://ganapanihardware.in/" />
      </div>
    ),
  },
  {
    category: "Full-Stack E-Commerce",
    title: "Jems Flower By Art",
    src: "/jems-flower.jpg",
    live: "https://jamesflowers.in/",
    content: (
      <div className="space-y-6 text-neutral-700 dark:text-neutral-200">
        <div>
          <h4 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white mb-2">
            E-Commerce Platform for Flowers, Bouquets & Events
          </h4>
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            Developed a full-stack e-commerce platform for Jems Flower By Art, specializing in flowers, bouquets, and event-related products. The platform provides a seamless online shopping experience with category-based browsing, product search, filtering, cart management, secure checkout workflows, and order tracking, alongside an administrative portal for managing products and orders.
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {["React.js", "Node.js", "Express.js", "Prisma ORM", "SQL", "Hostinger", "E-Commerce", "Payment & Cart"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-neutral-50 dark:bg-neutral-900/60 p-4 md:p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-2">
          <h5 className="font-semibold text-neutral-900 dark:text-white text-sm md:text-base mb-3">
            Key Highlights & Features:
          </h5>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Product Catalog:</strong> Showcase flowers, bouquets, and event products in an organized online store.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Category-Based Browsing:</strong> Explore collections by bouquets, wedding decorations, and events.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Search & Filters:</strong> Find products by occasion, flower type, price range, and availability.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Shopping Cart:</strong> Real-time cart drawer with quantity modification and price calculation.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Checkout Workflow:</strong> Smooth, secure order placement and checkout process.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Order Tracking:</strong> Customer portal to monitor delivery status and purchase history.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Admin Portal:</strong> Centralized dashboard for product listings, inventory, and order fulfillment.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Responsive UI:</strong> Elegant, mobile-first aesthetic tailored for high-end boutique shopping.</span>
            </li>
          </ul>
        </div>

        <img
          src="/jems-flower.jpg"
          alt="Jems Flower By Art E-commerce Platform"
          className="w-full rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 object-cover"
        />

        <ProjectLinks live="https://jamesflowers.in/" />
      </div>
    ),
  },
  {
    category: "Hospitality & Travel",
    title: "Samriddha Beach Resort",
    src: "/samriddha-resort.jpg",
    live: "https://samriddhabeachresort.com/",
    content: (
      <div className="space-y-6 text-neutral-700 dark:text-neutral-200">
        <div>
          <h4 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white mb-2">
            Resort Website & Online Room Booking Platform
          </h4>
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            Developed a modern resort website for Samriddha Beach Resort, Mandarmani, designed to showcase accommodations, resort amenities, dining experiences, coastal activities, and event facilities. The platform helps visitors explore the property, check their preferred stay dates, and initiate room reservations directly through WhatsApp, creating a convenient booking enquiry experience.
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {["React.js", "Tailwind CSS", "WhatsApp API", "Google Maps", "Hospitality", "Booking Engine"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-neutral-50 dark:bg-neutral-900/60 p-4 md:p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-2">
          <h5 className="font-semibold text-neutral-900 dark:text-white text-sm md:text-base mb-3">
            Key Highlights & Features:
          </h5>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">•</span>
              <span><strong>Resort Showcase:</strong> Immersive virtual presentation of facilities, dining, and coastal hospitality.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">•</span>
              <span><strong>Accommodation Listings:</strong> Air-conditioned rooms, suites, amenities, and occupancy details.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">•</span>
              <span><strong>WhatsApp Booking:</strong> Direct reservation enquiries with date selection and guest count via WhatsApp.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">•</span>
              <span><strong>Interactive Booking Bar:</strong> Datepicker, adult/child selector, and real-time enquiry triggers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">•</span>
              <span><strong>Resort Experiences:</strong> Highlight swimming pools, beach walks, bonfires, and lawn dining.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">•</span>
              <span><strong>Events & Celebrations:</strong> Poolside events, corporate gatherings, and group stay packages.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">•</span>
              <span><strong>Visual Photo Gallery:</strong> Categorized high-resolution photo galleries of rooms, pool, and beach.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-500 font-bold">•</span>
              <span><strong>Contact & Location:</strong> Click-to-call, WhatsApp enquiry, and integrated Google Maps navigation.</span>
            </li>
          </ul>
        </div>

        <img
          src="/samriddha-resort.jpg"
          alt="Samriddha Beach Resort Mandarmani"
          className="w-full rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 object-cover"
        />

        <ProjectLinks live="https://samriddhabeachresort.com/" />
      </div>
    ),
  },
  {
    category: "Organization & Community Portal",
    title: "WBMPAF – Artists' Forum",
    src: "/wbmpaf.jpg",
    live: "https://www.wbmpaf.com/",
    content: (
      <div className="space-y-6 text-neutral-700 dark:text-neutral-200">
        <div>
          <h4 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white mb-2">
            West Bengal Motion Pictures Artists' Forum Website & Member Portal
          </h4>
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            Developed a comprehensive digital platform for the West Bengal Motion Pictures Artists' Forum (WBMPAF) to showcase the organization, its leadership, activities, and initiatives while providing useful resources for members and visitors. The website brings together artist information, organizational notices, membership resources, event galleries, official documents, and member-focused digital services in one centralized platform.
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {["React.js", "Node.js", "Express.js", "Prisma ORM", "SQL", "Hostinger", "Member Portal", "CMS & Media"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-neutral-50 dark:bg-neutral-900/60 p-4 md:p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-2">
          <h5 className="font-semibold text-neutral-900 dark:text-white text-sm md:text-base mb-3">
            Key Highlights & Features:
          </h5>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Organizational Portal:</strong> Mission, aims, constitution, and historical archives of the forum.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Executive Committee Directory:</strong> Profiles and designations of committee leadership.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Artist Tribute Section:</strong> Commemorative memorial honoring legends of Bengali cinema & television.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Notices & Announcements:</strong> Official circulars, election bulletins, and organizational updates.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Membership Resources:</strong> Digital application forms, audition notices, and member guidance.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Artist Portfolio Platform:</strong> Digital portfolio visibility and profiles for registered artists.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Event Photo Gallery:</strong> Media albums from annual general meetings, cultural functions & sports.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-500 font-bold">•</span>
              <span><strong>Documents & Welfare:</strong> Audited accounts, PDF reports, constitution, and artist welfare services.</span>
            </li>
          </ul>
        </div>

        <img
          src="/wbmpaf.jpg"
          alt="West Bengal Motion Pictures Artists' Forum Website"
          className="w-full rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 object-cover"
        />

        <ProjectLinks live="https://www.wbmpaf.com/" />
      </div>
    ),
  },
  {
    category: "Multi-Vendor Marketplace & Mobile App",
    title: "BharatParts – Auto Ecosystem",
    src: "/bharatparts.jpg",
    live: "https://bharatparts.com/",
    content: (
      <div className="space-y-6 text-neutral-700 dark:text-neutral-200">
        <div>
          <h4 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white mb-2">
            Large-Scale Multi-Vendor Automotive E-commerce Platform & Mobile App
          </h4>
          <p className="text-sm md:text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            Developed a large-scale multi-vendor e-commerce platform and mobile application for automotive spare parts, connecting customers, suppliers, and automotive brands through a centralized digital marketplace. The platform enables vehicle-compatible part discovery, product browsing, online purchasing, order tracking, and multi-vendor commerce management.
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2">
          {["React.js", "React Native", "Node.js", "Express.js", "SQL / MongoDB", "AWS", "Fitment Engine", "Multi-Vendor Marketplace"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-neutral-50 dark:bg-neutral-900/60 p-4 md:p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-2">
          <h5 className="font-semibold text-neutral-900 dark:text-white text-sm md:text-base mb-3">
            Key Highlights & Features:
          </h5>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span><strong>Multi-Vendor Marketplace:</strong> Multi-tier ecosystem connecting buyers, certified suppliers, and OEM brands.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span><strong>Vehicle-Based Part Search:</strong> Dynamic fitment filter by Make, Model, Year, and Engine Variant.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span><strong>Spare Parts Catalog:</strong> Detailed listings across braking, engine, suspension, electricals, and exterior.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span><strong>Brand & Category Filtering:</strong> Filter by OEM/Aftermarket, pricing tiers, discounts, and ratings.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span><strong>Mobile App Experience:</strong> Fast, native mobile shopping app with push updates and garage management.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span><strong>Cart & Checkout:</strong> Multi-vendor cart calculation, shipping options, and secure payment gateway.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span><strong>Order Tracking:</strong> Live dispatch status, courier tracking, and customer account dashboard.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span><strong>Vendor & Marketplace Admin:</strong> Merchant onboarding, inventory synchronization, and payout systems.</span>
            </li>
          </ul>
        </div>

        <img
          src="/bharatparts.jpg"
          alt="BharatParts Automotive E-commerce Platform and Mobile App"
          className="w-full rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-800 object-cover"
        />

        <ProjectLinks live="https://bharatparts.com/" />
      </div>
    ),
  },
  {
    category: "Portfolio",
    title: "20+ Projects",
    src: "/more-projects.jpg",
    content: (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
        <h3 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          20+ Projects
        </h3>
        <p className="text-neutral-600 dark:text-neutral-300 text-base md:text-lg max-w-md">
          Built across web applications, mobile apps, SaaS, e-commerce, and enterprise solutions.
        </p>
        <a
          href="https://github.com/sumandas473"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-lg inline-flex items-center gap-2"
        >
          View More on GitHub &rarr;
        </a>
      </div>
    ),
  },
];
