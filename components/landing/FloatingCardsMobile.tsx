"use client";

import { GrowthCard, CalendarCard } from "./AnalyticsCards";

export default function FloatingCardsMobile() {
  return (
    <div className="mt-10 flex w-full flex-col items-center gap-5 sm:hidden">
      <GrowthCard />
      <CalendarCard />
    </div>
  );
}
