"use client";

import {
  CircleHelp,
  LayoutDashboard,
  ReceiptText,
  Settings,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    exact: true,
  },
  {
    title: "Invoices",
    url: "/invoices",
    icon: ReceiptText,
    exact: false,
  },
  {
    title: "Customers",
    url: "/customers",
    icon: UsersRound,
    exact: false,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    exact: false,
  },
];

export function AppSidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <Sidebar
      collapsible="icon"
      className={cn("border-sidebar-border", className)}
    >
      <SidebarHeader className="flex h-14 shrink-0 flex-row items-center border-b border-sidebar-border px-3">
        <Link
          href="/dashboard"
          className="flex min-w-0 items-center gap-3 overflow-hidden"
        >
          <Image
            src="/logo.svg"
            height={32}
            width={32}
            alt="Logo"
            className="shrink-0"
          />
          <span className="truncate text-base font-semibold tracking-tight group-data-[collapsible=icon]:hidden">
            Invoice Desk
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = item.exact
                  ? pathname === item.url
                  : pathname.startsWith(item.url);

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                      className={cn(
                        "h-9 rounded-lg",
                        isActive &&
                          "border-l-2 border-primary bg-primary/10 font-medium text-primary hover:bg-primary/15 hover:text-primary data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                      )}
                    >
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              tooltip="Help & documentation"
              className="h-9 rounded-lg text-muted-foreground"
            >
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CircleHelp />
                <span>Help</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
