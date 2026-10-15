"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { ChartBarStacked } from "@/components/charts/BarChart";
import { ChartLineMultiple } from "@/components/charts/LineChart";
import { ChartRadarLinesOnly } from "@/components/charts/RadarChart";
import { ChartRadialLabel } from "@/components/charts/RadialChart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MoreAnalyticsSection() {
  const [open, setOpen] = React.useState(false);

  return (
    <section className="space-y-4">
      <Button
        type="button"
        variant="outline"
        className="w-full justify-between sm:w-auto"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        More analytics
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform",
            open && "rotate-180"
          )}
        />
      </Button>
      {open && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ChartRadarLinesOnly />
          <ChartBarStacked />
          <ChartLineMultiple />
          <ChartRadialLabel />
        </div>
      )}
    </section>
  );
}
