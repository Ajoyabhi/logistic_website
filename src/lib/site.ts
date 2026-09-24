/* ============================================================
   Nexora Movers — central site data
   A moving, packing & on-demand transport startup with an
   in-house team (inspired by Porter / Agarwal Packers & Movers /
   NoBroker Movers). All page content is driven from here.
   ============================================================ */

export const site = {
  name: "Nexora Movers",
  tagline: "Packers, Movers & On-Demand Transport.",
  email: "care@nexoramovers.in",
  phone: "1800 200 0142",
  hq: "Nexora House, Sector 44, Gurugram, Haryana 122003, India",
  appNote: "Book a move, get live crew tracking and support on the Nexora app.",
};

/* Headline stats (homepage grid uses 4) */
export const stats = [
  { value: 50000, label: "Moves Completed", suffix: "+" },
  { value: 25, label: "Cities Served", suffix: "+" },
  { value: 1200, label: "In-House Movers", suffix: "+" },
  { value: 98, label: "On-Time Moves", suffix: "%" },
];

/* Secondary stats */
export const networkStats = [
  { value: 600, label: "Own Vehicles", suffix: "+" },
  { value: 15000, label: "Homes Shifted / Year", suffix: "+" },
  { value: 100, label: "Trained Packing Crews", suffix: "+" },
  { value: 24, label: "Support", suffix: "/7" },
];

/* Cities we serve */
export const metros = [
  "Delhi NCR", "Mumbai", "Bengaluru", "Hyderabad", "Chennai",
  "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Surat", "Chandigarh",
];

/* Why choose us — our own team, no middlemen */
export const promises = [
  { icon: "users", title: "Our Own Trained Crew", body: "Every move is done by Nexora's own uniformed, background-verified movers — never outsourced." },
  { icon: "rupee", title: "Transparent Pricing", body: "Upfront, itemised quotes with no hidden charges and no last-minute surprises." },
  { icon: "shield", title: "Damage-Safe Packing", body: "Multi-layer, quality packing materials and careful handling for fragile items." },
  { icon: "clock", title: "On-Time, Every Time", body: "98% on-time performance with a dedicated move coordinator for every booking." },
];

export type Solution = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  intro: string;
  features: { title: string; body: string }[];
  bullets: string[];
  image: string;
  icon: string;
};

export const solutions: Solution[] = [
  {
    slug: "home-shifting",
    title: "Home Shifting",
    tagline: "Move your home, stress-free",
    summary:
      "Complete house & flat relocation — professional packing, loading, moving, unloading and unpacking by our own crew.",
    intro:
      "From a 1RK to a 4BHK villa, our in-house packing and moving crew handles your entire home shift end to end. We pack every item with quality materials, load and transport on our own vehicles, and unpack at your new home — so all you do is settle in. A dedicated move coordinator stays with you from survey to setup.",
    features: [
      { title: "Professional Packing", body: "Multi-layer packing for furniture, appliances and fragile items." },
      { title: "Loading & Unloading", body: "Our trained crew handles the heavy lifting, safely." },
      { title: "Dedicated Coordinator", body: "One point of contact from survey to final setup." },
      { title: "Unpack & Arrange", body: "We unpack and place your things where you want them." },
    ],
    bullets: [
      "Free pre-move survey & fixed quote",
      "Quality packing materials included",
      "Furniture dismantling & reassembly",
      "Own vehicles, own crew — no middlemen",
    ],
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1600&q=70",
    icon: "home",
  },
  {
    slug: "office-shifting",
    title: "Office & Commercial Shifting",
    tagline: "Relocate your workplace with zero downtime",
    summary:
      "Planned office, shop and commercial relocation with minimal disruption to your business.",
    intro:
      "Moving an office is complex — workstations, IT equipment, documents and inventory all need care. Nexora plans your commercial move around your schedule, with our own crew packing, labelling and moving everything systematically, so you're up and running fast at the new location.",
    features: [
      { title: "Move Planning", body: "A phased plan built around your working hours." },
      { title: "IT & Equipment Care", body: "Safe handling of computers, servers and electronics." },
      { title: "Labelled & Organised", body: "Systematic labelling for a fast, orderly setup." },
      { title: "Weekend Moves", body: "After-hours and weekend options to avoid downtime." },
    ],
    bullets: [
      "Workstation & furniture handling",
      "IT, server & electronics packing",
      "Document & inventory management",
      "Minimal business disruption",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=70",
    icon: "building",
  },
  {
    slug: "intercity-relocation",
    title: "Intercity Relocation",
    tagline: "City-to-city moves, handled door to door",
    summary:
      "Long-distance household shifting between cities on our own fleet, with tracking and insurance.",
    intro:
      "Relocating to another city? Nexora manages your entire intercity move door to door — professional packing, dedicated vehicle, safe long-haul transport and unpacking at the destination. Track your goods throughout and move with full transit protection.",
    features: [
      { title: "Dedicated Vehicle", body: "Your goods travel alone — no shared, mixed loads." },
      { title: "Transit Protection", body: "Optional all-risk insurance for total peace of mind." },
      { title: "Live Tracking", body: "Know where your belongings are, city to city." },
      { title: "Door-to-Door", body: "We pack at origin and unpack at your new home." },
    ],
    bullets: [
      "Dedicated (non-shared) vehicle option",
      "Professional packing for long transit",
      "GPS tracking throughout the journey",
      "All-risk transit insurance available",
    ],
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=70",
    icon: "truck",
  },
  {
    slug: "intra-city-transport",
    title: "Intra-City Transport",
    tagline: "Book a mini-truck or bike in minutes",
    summary:
      "On-demand two-wheelers, three-wheelers and mini-trucks to move goods anywhere in your city.",
    intro:
      "Need to move goods across town — a few boxes, furniture, a shop delivery or a small load? Book a Nexora two-wheeler, three-wheeler or mini-truck on demand, with a driver from our own fleet. Instant fare, live tracking and pay per trip — moving goods around your city has never been simpler.",
    features: [
      { title: "On-Demand Booking", body: "Book a vehicle in minutes, any time of day." },
      { title: "Choice of Vehicle", body: "Two-wheeler to Pickup 8ft — right-sized for your load." },
      { title: "With Loading Help", body: "Add trained loading-unloading helpers to any trip." },
      { title: "Live Tracking", body: "Track your driver in real time from pickup to drop." },
    ],
    bullets: [
      "Two-wheelers, autos & mini-trucks on demand",
      "Optional loading & unloading helpers",
      "Instant, transparent per-trip fare",
      "Own fleet & drivers — never outsourced",
    ],
    image: "https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?auto=format&fit=crop&w=1600&q=70",
    icon: "bolt",
  },
  {
    slug: "vehicle-transport",
    title: "Car & Bike Transport",
    tagline: "Move your vehicle safely, anywhere in India",
    summary:
      "Door-to-door car and two-wheeler transportation on enclosed carriers, with full insurance.",
    intro:
      "Relocating and don't want to drive or ride long distance? Nexora transports your car or bike safely across cities on our own carriers. We handle pickup, secure loading, insured transit and doorstep delivery — with condition reports at both ends so your vehicle arrives exactly as it left.",
    features: [
      { title: "Enclosed Carriers", body: "Your vehicle travels protected from road and weather." },
      { title: "Full Insurance", body: "Comprehensive transit cover for total peace of mind." },
      { title: "Condition Reports", body: "Documented condition at pickup and delivery." },
      { title: "Doorstep Service", body: "Pickup and delivery right at your address." },
    ],
    bullets: [
      "Cars & two-wheelers, door to door",
      "Enclosed, secure carriers",
      "Comprehensive transit insurance",
      "Pickup & delivery condition reports",
    ],
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=70",
    icon: "car",
  },
  {
    slug: "storage-warehousing",
    title: "Storage & Warehousing",
    tagline: "Safe storage for however long you need",
    summary:
      "Clean, secure, CCTV-monitored storage for your belongings — short or long term.",
    intro:
      "Between moves, renovating, or just short on space? Store your belongings in Nexora's clean, secure and monitored warehouses. We pack, inventory and store your items safely, and deliver them back to you whenever you're ready — with flexible short and long-term plans.",
    features: [
      { title: "Secure Facilities", body: "CCTV-monitored, access-controlled storage units." },
      { title: "Full Inventory", body: "Every item catalogued so nothing goes missing." },
      { title: "Flexible Terms", body: "Daily, monthly or long-term storage plans." },
      { title: "On-Demand Delivery", body: "We bring your goods back whenever you need them." },
    ],
    bullets: [
      "Clean, dry, monitored warehouses",
      "Itemised inventory of everything stored",
      "Short & long-term flexible plans",
      "Pickup & re-delivery handled by us",
    ],
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=70",
    icon: "warehouse",
  },
];

/* "Who we serve" segments (kept as `industries` for routing) */
export type Industry = {
  slug: string;
  title: string;
  hook: string;
  summary: string;
  intro: string;
  capabilities: string[];
  image: string;
  icon: string;
};

export const industries: Industry[] = [
  {
    slug: "homes-families",
    title: "Homes & Families",
    hook: "Move your family with care",
    summary: "Full-service home shifting for families, from compact flats to large villas.",
    intro:
      "Moving a family home means moving memories. Our crew packs everything — from the kitchen to the kids' rooms — with care, handles the heavy furniture, and sets you up at your new place so your family settles in quickly and comfortably.",
    capabilities: ["Full-home packing & unpacking", "Furniture dismantling & reassembly", "Fragile & appliance handling", "Dedicated move coordinator"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=70",
    icon: "home",
  },
  {
    slug: "working-professionals",
    title: "Working Professionals",
    hook: "Move without taking leave",
    summary: "Quick, flexible moves that fit around your work schedule.",
    intro:
      "Busy professionals don't have time for a chaotic move. Nexora offers evening and weekend slots, fast turnaround and a single coordinator, so you can relocate with minimal disruption to your work and life.",
    capabilities: ["Evening & weekend slots", "Fast, same-day local moves", "Single point of contact", "Live tracking on the app"],
    image: "https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&w=1600&q=70",
    icon: "users",
  },
  {
    slug: "offices-enterprises",
    title: "Offices & Enterprises",
    hook: "Relocate your workplace, smoothly",
    summary: "Planned commercial relocation with minimal business downtime.",
    intro:
      "From startups to large offices, we plan and execute commercial moves around your operations — packing IT, furniture and files systematically and setting them up fast so your team is back to work quickly.",
    capabilities: ["Phased move planning", "IT & electronics handling", "Systematic labelling", "After-hours execution"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=70",
    icon: "building",
  },
  {
    slug: "students-bachelors",
    title: "Students & Bachelors",
    hook: "Small moves, big savings",
    summary: "Affordable shifting for hostels, PGs and shared flats.",
    intro:
      "Moving a room's worth of stuff shouldn't cost a fortune. Our right-sized vehicles and shared-load options make student and bachelor moves quick and budget-friendly — with the same trained crew and care.",
    capabilities: ["Budget mini-truck options", "Single-room & partial moves", "Quick same-day booking", "Optional loading helpers"],
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1600&q=70",
    icon: "box",
  },
  {
    slug: "tenants-landlords",
    title: "Tenants & Landlords",
    hook: "Rent, move, repeat — sorted",
    summary: "Hassle-free moves whenever you change a rented home.",
    intro:
      "Changing a rented home is one of the most common reasons people move in India. Nexora makes every rental move smooth — flexible slots, careful handling of your deposit-sensitive property, and transparent pricing you can count on each time.",
    capabilities: ["Flexible move-in / move-out slots", "Careful, damage-safe handling", "Transparent fixed quotes", "Short-notice bookings"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=70",
    icon: "pin",
  },
  {
    slug: "nri-long-distance",
    title: "NRI & Long-Distance",
    hook: "Move across India, remotely managed",
    summary: "End-to-end intercity and remote-managed moves you can trust from afar.",
    intro:
      "Managing a move from another city or country? We handle everything door to door — survey over video, professional packing, insured long-haul transport and setup — with regular updates so you stay in control from wherever you are.",
    capabilities: ["Video survey & remote coordination", "Door-to-door intercity moves", "Insured long-haul transit", "Regular status updates"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=70",
    icon: "globe",
  },
];

export type Article = {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  image: string;
};

export const articles: Article[] = [
  {
    id: "nexora-crosses-50000-moves",
    category: "Milestone",
    date: "Sep/02/2026",
    title: "Nexora Movers Crosses 50,000 Successful Moves",
    excerpt:
      "A major milestone for our in-house crews, built on transparent pricing and on-time, damage-safe moves.",
    body: [
      "Nexora Movers today announced it has completed more than 50,000 successful home and office moves across India.",
      "The milestone reflects the trust customers place in our fully in-house model — our own trained crews, our own vehicles and transparent, fixed pricing.",
      "\"Every move is someone's home or livelihood,\" said the Head of Operations. \"Doing it ourselves, end to end, is how we keep quality high and surprises low.\"",
    ],
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: "mini-trucks-10-cities",
    category: "Service",
    date: "Aug/19/2026",
    title: "On-Demand Mini-Trucks & Bikes Now Live in 10 Cities",
    excerpt:
      "Book a two-wheeler, auto or mini-truck in minutes to move goods anywhere within your city.",
    body: [
      "Nexora Movers has expanded its on-demand intra-city transport to 10 cities, letting customers book a vehicle in minutes.",
      "From a few boxes to a full furniture load, users can now hire a two-wheeler, three-wheeler or mini-truck with a driver from our own fleet — with instant fares and live tracking.",
    ],
    image: "https://images.unsplash.com/photo-1599050751795-6cdaafbc2319?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: "how-we-pack-fragile-items",
    category: "Moving Tips",
    date: "Aug/05/2026",
    title: "How Our Crew Packs Your Fragile Items",
    excerpt:
      "A look inside our multi-layer packing process that keeps glassware, TVs and art safe in transit.",
    body: [
      "Fragile items cause the most moving-day anxiety — so we've built a careful, repeatable packing process for them.",
      "From bubble-wrap and corner guards to custom crating for TVs and artwork, our trained crews pack every delicate item to survive the journey.",
    ],
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: "nexora-launches-pune",
    category: "Expansion",
    date: "Jul/22/2026",
    title: "Nexora Movers Launches Full Services in Pune",
    excerpt:
      "Home shifting, office relocation and on-demand transport are now available across Pune.",
    body: [
      "Nexora Movers has launched its full range of services in Pune, adding local crews, vehicles and a city operations team.",
      "Residents and businesses in Pune can now book home shifting, office relocation, intercity moves and on-demand transport directly through the app and website.",
    ],
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: "car-bike-transport-launch",
    category: "Service",
    date: "Jun/30/2026",
    title: "Nexora Introduces Insured Car & Bike Transport",
    excerpt:
      "Move your vehicle across cities on enclosed carriers, with full insurance and condition reports.",
    body: [
      "Nexora Movers has launched door-to-door car and two-wheeler transport on enclosed carriers.",
      "The service includes comprehensive transit insurance and documented condition reports at pickup and delivery, so vehicles arrive exactly as they left.",
    ],
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=70",
  },
  {
    id: "festive-season-moving-tips",
    category: "Moving Tips",
    date: "Jun/11/2026",
    title: "Planning a Move This Festive Season? 7 Tips",
    excerpt:
      "Book early, declutter smart, and label rooms — our coordinators' best advice for a smooth festive move.",
    body: [
      "The festive season is peak moving time in India — and a little planning goes a long way.",
      "Our move coordinators share their top tips: book early to lock your slot, declutter before you pack, label boxes by room, and keep an essentials bag handy for the first night.",
    ],
    image: "https://images.unsplash.com/photo-1594732832278-abd644401426?auto=format&fit=crop&w=1600&q=70",
  },
];

export const industryList = industries;
export const solutionList = solutions;
