import React from "react";

import {
  ArrowUp,
  Banknote,
  UsersRound,
  Building2,
  DollarSign,
  TicketCheck,
  ClipboardClock,
  Trash2,
  ClockIcon,
} from "lucide-react";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ChartAreaInteractive } from "@/components/charts/AreaChart";
import { ChartBarStacked } from "@/components/charts/BarChart";
import { ChartLineMultiple } from "@/components/charts/LineChart";
import { ChartPieInteractive } from "@/components/charts/PieChart";
import { ChartRadarLinesOnly } from "@/components/charts/RadarChart";
import { ChartRadialLabel } from "@/components/charts/RadialChart";

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <h1 className="text-3xl font-bold"> Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card className="rounded-md">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-start">
                <div className=" p-3 rounded-md">
                  <DollarSign size={50} />
                </div>
                <div className="text-center">
                  <h1 className="font-semibold  text-sm">Total Invoices</h1>
                  <p className="text-lg font-bold ">{"0"}</p>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>

        <Card className="rounded-md">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-start">
                <div className=" p-3 rounded-md">
                  <TicketCheck size={50} />
                </div>
                <div className="text-center">
                  <h1 className="font-semibold  text-sm">Completed Invoices</h1>
                  <p className="text-lg font-bold ">{"0"}</p>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>

        <Card className="rounded-md">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-start">
                <div className=" p-3 rounded-md">
                  <ClipboardClock size={50} />
                </div>
                <div className="text-center">
                  <h1 className="font-semibold  text-sm">Pending Invoices</h1>
                  <p className="text-lg font-bold ">{"0"}</p>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>

        <Card className="rounded-md">
          <CardHeader>
            <CardTitle>
              <div className="flex items-center justify-start">
                <div className=" p-3 rounded-md">
                  <Trash2 size={50} className="text-red-500" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="font-semibold whitespace-nowrap text-lg">
                    Cancel Invoices
                  </h1>
                  <p className=" text-sm">0</p>
                </div>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>

      {/* Top grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          <Card className="rounded-md">
            <CardHeader>
              <CardTitle>
                <div className="flex flex-col items-center justify-start">
                  <div className=" p-3 rounded-md">
                    <ArrowUp size={50} />
                  </div>
                  <div className="text-center">
                    <h1 className="font-semibold  text-sm">To Pay</h1>
                    <p className="text-lg font-bold ">{"$0"}</p>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="rounded-md">
            <CardHeader>
              <CardTitle>
                <div className="flex flex-col items-center justify-start">
                  <div className=" p-3 rounded-md">
                    <Banknote size={50} />
                  </div>

                  <div className="text-center">
                    <h1 className="font-semibold  text-sm">Paid</h1>
                    <p className="text-lg font-bold ">{"$0"}</p>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="rounded-md">
            <CardHeader>
              <CardTitle>
                <div className="flex flex-col items-center justify-start">
                  <div className=" p-3 rounded-md">
                    <UsersRound size={50} />
                  </div>
                  <div className="text-center">
                    <h1 className="font-semibold  text-sm">Total Customer</h1>
                    <p className="text-lg font-bold ">{"$0"}</p>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>

          <Card className="rounded-md">
            <CardHeader>
              <CardTitle>
                <div className="flex flex-col items-center justify-start">
                  <div className=" p-3 rounded-md">
                    <Building2 size={50} />
                  </div>
                  <div className="text-center">
                    <h1 className="font-semibold  text-sm">Total Companies</h1>
                    <p className="text-lg font-bold ">$0</p>
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        <ChartPieInteractive />
      </div>
      <ChartAreaInteractive />
      {/* Bottom grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        <ChartRadarLinesOnly />
        <ChartBarStacked />

        <ChartLineMultiple />
        <ChartRadialLabel />
      </div>
    </div>
  );
};

export default Dashboard;
