"use client";

import {
  ArrowUp,
  Banknote,
  Building2,
  ClipboardClock,
  DollarSign,
  TicketCheck,
  Trash2,
  UsersRound,
} from "lucide-react";

import { ChartAreaInteractive } from "@/components/charts/AreaChart";
import { ChartPieInteractive } from "@/components/charts/PieChart";
import { MoreAnalyticsSection } from "@/components/more-analytics-section";
import { StatCard } from "@/components/stat-card";

const Dashboard = () => {
  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Overview of invoices and payments
        </p>
      </header>

      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
        <StatCard label="Total invoices" value={0} icon={DollarSign} />
        <StatCard
          label="Completed invoices"
          value={0}
          icon={TicketCheck}
          variant="success"
        />
        <StatCard
          label="Pending invoices"
          value={0}
          icon={ClipboardClock}
          variant="warning"
        />
        <StatCard
          label="Cancelled invoices"
          value={0}
          icon={Trash2}
          variant="destructive"
        />
        <StatCard
          label="To pay"
          value={0}
          icon={ArrowUp}
          format="currency"
        />
        <StatCard label="Paid" value={0} icon={Banknote} format="currency" />
        <StatCard label="Total customers" value={0} icon={UsersRound} />
        <StatCard label="Total companies" value={0} icon={Building2} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ChartAreaInteractive />
        </div>
        <div className="lg:col-span-1">
          <ChartPieInteractive />
        </div>
      </div>

      <MoreAnalyticsSection />
    </div>
  );
};

export default Dashboard;
