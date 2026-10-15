"use client";

import type { LucideIcon } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { formatCount, formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";

type StatCardVariant = "default" | "success" | "warning" | "destructive";

const variantStyles: Record<
  StatCardVariant,
  { chip: string; icon: string }
> = {
  default: {
    chip: "bg-primary/10",
    icon: "text-primary",
  },
  success: {
    chip: "bg-emerald-500/10",
    icon: "text-emerald-600 dark:text-emerald-400",
  },
  warning: {
    chip: "bg-amber-500/10",
    icon: "text-amber-600 dark:text-amber-400",
  },
  destructive: {
    chip: "bg-destructive/10",
    icon: "text-destructive",
  },
};

type StatCardProps = {
  label: string;
  value: number;
  icon: LucideIcon;
  format?: "number" | "currency";
  variant?: StatCardVariant;
};

export function StatCard({
  label,
  value,
  icon: Icon,
  format = "number",
  variant = "default",
}: StatCardProps) {
  const styles = variantStyles[variant];
  const displayValue =
    format === "currency" ? formatCurrency(value) : formatCount(value);

  return (
    <Card
      className="rounded-xl border-border/60 shadow-sm transition-shadow hover:shadow-md"
    >
      <CardContent className="flex items-center gap-4 p-4">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
            styles.chip
          )}
        >
          <Icon className={cn("h-5 w-5", styles.icon)} aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-semibold tabular-nums tracking-tight">
            {displayValue}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
