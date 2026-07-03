import Image from "next/image";
import {
  Heart,
  Calendar,
  Gem,
  Settings,
  Plus,
  Search,
  ChevronDown,
  MoreHorizontal,
  Box,
  Activity,
  Headphones,
  Menu,
} from "lucide-react";

const sidebarIcons = [Heart, Calendar, Gem, Settings];

const customerPoints = [40, 55, 35, 60, 45, 70, 50, 65, 42, 58, 48, 62];

function Sparkline({ points, colorA = "#facc15", colorB = "#f97316" }) {
  const w = 260;
  const h = 70;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const step = w / (points.length - 1);
  const toY = (v) => h - ((v - min) / (max - min)) * (h - 10) - 5;

  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${toY(p)}`)
    .join(" ");

  const path2 = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${toY(p * 0.7 + 10)}`)
    .join(" ");

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-16">
      <path d={path2} fill="none" stroke={colorB} strokeWidth="2" opacity="0.8" />
      <path d={path} fill="none" stroke={colorA} strokeWidth="2.5" />
    </svg>
  );
}

function DotGrid() {
  const rows = [
    ["white", "white", "white", "white", "white", "white"],
    ["gray", "green", "green", "orange", "green", "orange"],
    ["gray", "green", "orange", "green", "green", "orange"],
    ["gray", "green", "orange", "green", "orange", "orange"],
  ];
  const colorMap = {
    white: "bg-white",
    gray: "bg-neutral-700",
    green: "bg-lime-400",
    orange: "bg-orange-400",
  };
  return (
    <div className="flex flex-col gap-2.5 mt-4">
      {rows.map((row, i) => (
        <div key={i} className="flex gap-2.5">
          {row.map((c, j) => (
            <span key={j} className={`w-2.5 h-2.5 rounded-full ${colorMap[c]}`} />
          ))}
        </div>
      ))}
    </div>
  );
}

const productBars = [
  { top: 52, bottom: 81, topColor: "white", bottomColor: "orange" },
  { top: 96, bottom: 25, topColor: "green", bottomColor: "orange" },
  { top: 48, bottom: 51, topColor: "green", bottomColor: "white" },
  { top: 80, bottom: 49, topColor: "orange", bottomColor: "green" },
  { top: 34, bottom: 67, topColor: "white", bottomColor: "white" },
  { top: 92, bottom: 28, topColor: "green", bottomColor: "orange" },
  { top: 58, bottom: 20, topColor: "orange", bottomColor: "white" },
  { top: 84, bottom: 39, topColor: "orange", bottomColor: "green" },
  { top: 36, bottom: 72, topColor: "white", bottomColor: "orange" },
];

const barColorMap = {
  white: "bg-white text-black",
  green: "bg-lime-400 text-black",
  orange: "bg-orange-400 text-black",
};

function ProductBars() {
  const maxVal = 100;
  return (
    <div className="flex items-end justify-between gap-1 mt-6 h-56">
      {productBars.map((b, i) => (
        <div key={i} className="flex flex-col items-center justify-end h-full w-full">
          <div
            className={`w-full max-w-[2.25rem] rounded-full flex items-start justify-center pt-1.5 text-[10px] font-semibold ${barColorMap[b.topColor]}`}
            style={{ height: `${(b.top / maxVal) * 55}%` }}
          >
            {b.top}
          </div>
          <div
            className={`w-full max-w-[2.25rem] rounded-full flex items-start justify-center pt-1.5 text-[10px] font-semibold mt-1.5 ${barColorMap[b.bottomColor]}`}
            style={{ height: `${(b.bottom / maxVal) * 55}%` }}
          >
            {b.bottom}
          </div>
        </div>
      ))}
    </div>
  );
}

const timelineRows = [
  { date: "30.09", value: 16, width: 68, color: "bg-lime-400 text-black", icon: "💠" },
  { date: "29.09", value: 29, width: 88, color: "bg-orange-400 text-black", icon: "✕" },
  { date: "28.09", value: 15, width: 60, color: "bg-white text-black", icon: "avatars" },
  { date: "27.09", value: 21, width: 78, color: "bg-lime-400 text-black", icon: "🌐" },
  { date: "26.09", value: 10, width: 42, color: "bg-white text-black", icon: "💬" },
  { date: "25.09", value: 15, width: 60, color: "bg-orange-400 text-black", icon: "f" },
  { date: "24.09", value: 19, width: 84, color: "bg-lime-400 text-black", icon: "avatars2" },
  { date: "23.09", value: 8,  width: 36, color: "bg-white text-black", icon: "🐦" },
];

function TimelineChart() {
  return (
    <div className="mt-6 space-y-3.5">
      {timelineRows.map((row, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-[11px] text-neutral-500 w-10 shrink-0">{row.date}</span>
          <div className="flex-1 relative h-7">
            <div
              className={`h-7 rounded-full flex items-center gap-2 px-2 ${row.color}`}
              style={{ width: `${row.width}%` }}
            >
              <span className="w-4 h-4 rounded-full bg-black/10 flex items-center justify-center text-[10px] shrink-0">
                {row.icon === "avatars" || row.icon === "avatars2" ? "👥" : row.icon}
              </span>
              <span className="ml-auto text-[11px] font-semibold">{row.value}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-between text-[10px] text-neutral-600 pt-1 pl-10">
        {[0, 5, 10, 15, 20, 25, 30].map((n) => (
          <span key={n}>{n}</span>
        ))}
      </div>
    </div>
  );
}

function CardShell({ title, children, className = "" }) {
  return (
    <div className={`bg-neutral-900 rounded-3xl p-5 ${className}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-[11px] tracking-widest text-neutral-400 font-semibold">
          {title}
        </h3>
        <MoreHorizontal size={16} className="text-neutral-600" />
      </div>
      {children}
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen w-full bg-black p-4 sm:p-6 lg:p-8 font-sans">

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
          {/* Logo */}
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-black shrink-0">
            N
          </div>

          {/* Nav pills – hide labels on very small screens */}
          <div className="flex items-center gap-1 bg-neutral-900 rounded-full p-1 overflow-x-auto scrollbar-none">
            <button className="flex items-center gap-1.5 bg-neutral-800 text-white text-sm font-medium px-3 sm:px-4 py-2 rounded-full whitespace-nowrap">
              <Box size={15} />
              <span className="hidden xs:inline">Check Box</span>
            </button>
            <button className="flex items-center gap-1.5 text-neutral-400 text-sm font-medium px-3 sm:px-4 py-2 rounded-full hover:text-white transition whitespace-nowrap">
              <Activity size={15} />
              <span className="hidden sm:inline">Monitoring</span>
            </button>
            <button className="flex items-center gap-1.5 text-neutral-400 text-sm font-medium px-3 sm:px-4 py-2 rounded-full hover:text-white transition whitespace-nowrap">
              <Headphones size={15} />
              <span className="hidden sm:inline">Support</span>
            </button>
            <button className="p-2 text-neutral-400 hover:text-white transition">
              <Search size={16} />
            </button>
          </div>

          {/* User info */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="text-right leading-tight hidden sm:block">
              <p className="text-white text-sm font-semibold">Bogdan Nikitin</p>
              <p className="text-neutral-500 text-xs">@Nixtio</p>
            </div>
            <div className="relative">
              <Image
                src="https://i.pravatar.cc/64?img=13"
                alt="avatar"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[9px] rounded-full flex items-center justify-center font-bold">
                2
              </span>
            </div>
          </div>
        </div>

        {/* ── Body: sidebar + main ── */}
        <div className="flex gap-4 sm:gap-5">

          {/* Sidebar – hidden on very small, icon-only on small, normal on md+ */}
          <div className="hidden xs:flex flex-col items-center gap-3 w-12 sm:w-16 shrink-0">
            {sidebarIcons.map((Icon, i) => (
              <button
                key={i}
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl flex items-center justify-center transition ${
                  i === 0
                    ? "bg-neutral-800 text-white"
                    : "bg-neutral-900 text-neutral-500 hover:text-white"
                }`}
              >
                <Icon size={18} />
              </button>
            ))}
            <div className="flex-1" />
            <button className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-neutral-900 text-neutral-500 hover:text-white flex items-center justify-center transition">
              <Plus size={18} />
            </button>
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">

            {/* Title + filter bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
              <h1 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight">
                CHECK BOX
              </h1>
              <div className="flex flex-wrap items-center gap-2">
                {["Date: Now", "Product: All", "Profile: Bogdan"].map((t) => (
                  <button
                    key={t}
                    className="flex items-center gap-1.5 bg-neutral-900 text-neutral-300 text-xs font-medium px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-full whitespace-nowrap"
                  >
                    {t.split(": ")[0]}:{" "}
                    <span className="text-white font-semibold">{t.split(": ")[1]}</span>
                    <ChevronDown size={13} />
                  </button>
                ))}
                <button className="w-9 h-9 rounded-full bg-neutral-900 text-neutral-400 flex items-center justify-center">
                  <Menu size={15} />
                </button>
              </div>
            </div>

            {/* Card grid
                – mobile  : single column stack
                – tablet  : 2-col (top row) + full-width bottom
                – desktop : 3-col (matching original design)
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">

              {/* Customer */}
              <CardShell title="CUSTOMER">
                <div className="flex gap-6 mt-4">
                  <div>
                    <div className="flex items-center gap-1 text-2xl font-extrabold text-white">
                      2,4% <span className="text-lime-400 text-sm">▲</span>
                    </div>
                    <p className="text-neutral-500 text-xs mt-1">Web Surfing</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-2xl font-extrabold text-white">
                      1,1% <span className="text-orange-400 text-sm">▼</span>
                    </div>
                    <p className="text-neutral-500 text-xs mt-1">Radio Station</p>
                  </div>
                </div>
                <Sparkline points={customerPoints} />
              </CardShell>

              {/* Product (dots) */}
              <CardShell title="PRODUCT">
                <div className="flex gap-6 mt-4">
                  <div>
                    <div className="flex items-center gap-1 text-2xl font-extrabold text-white">
                      2,8% <span className="text-lime-400 text-sm">▲</span>
                    </div>
                    <p className="text-neutral-500 text-xs mt-1">Partners</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-2xl font-extrabold text-white">
                      3,2% <span className="text-orange-400 text-sm">▼</span>
                    </div>
                    <p className="text-neutral-500 text-xs mt-1">Owners</p>
                  </div>
                </div>
                <DotGrid />
              </CardShell>

              {/* Projects Timeline — spans 2 rows on desktop, full-width below */}
              <CardShell
                title="PROJECTS TIMELINE"
                className="sm:col-span-2 lg:col-span-1 lg:row-span-2"
              >
                <TimelineChart />
                <div className="flex items-center gap-4 mt-4 text-[11px] text-neutral-500 flex-wrap">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-lime-400" /> Customer
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-orange-400" /> Product
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-white" /> Web
                  </span>
                  <span className="ml-auto">Total: 284</span>
                </div>
              </CardShell>

              {/* Product bars — spans 2 cols on sm+, back to full-width on mobile */}
              <CardShell title="PRODUCT" className="sm:col-span-2">
                <ProductBars />
                <div className="flex items-center gap-4 mt-4 text-[11px] text-neutral-500 flex-wrap">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-white" /> Resources
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-lime-400" /> Valid
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-orange-400" /> Invalid
                  </span>
                  <span className="ml-auto">Total: 1,012</span>
                </div>
              </CardShell>

            </div>
          </div>
        </div>
    </div>
  );
}
