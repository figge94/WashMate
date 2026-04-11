export type ThemeKey =
  | "dashboard"
  | "program"
  | "product"
  | "care"
  | "troubleshoot"
  | "symbols";

export const theme = {
  dashboard: {
    gradient: "from-sky-50 to-white",
    text: "text-sky-600",
    badge: "bg-sky-100 text-sky-700",
    ring: "ring-sky-100"
  },
  program: {
    gradient: "from-blue-50 to-white",
    text: "text-blue-600",
    badge: "bg-blue-100 text-blue-700",
    ring: "ring-blue-100"
  },
  product: {
    gradient: "from-violet-50 to-white",
    text: "text-violet-600",
    badge: "bg-violet-100 text-violet-700",
    ring: "ring-violet-100"
  },
  care: {
    gradient: "from-emerald-50 to-white",
    text: "text-emerald-600",
    badge: "bg-emerald-100 text-emerald-700",
    ring: "ring-emerald-100"
  },
  troubleshoot: {
    gradient: "from-amber-50 to-white",
    text: "text-amber-600",
    badge: "bg-amber-100 text-amber-700",
    ring: "ring-amber-100"
  },
  symbols: {
    gradient: "from-rose-50 to-white",
    text: "text-rose-600",
    badge: "bg-rose-100 text-rose-700",
    ring: "ring-rose-100"
  }
};
