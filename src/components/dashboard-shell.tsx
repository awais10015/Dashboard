"use client";

import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/Navbar";
import {
  PrivacyBlurProvider,
  usePrivacyBlur,
} from "@/context/privacy-blur-context";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

function ShellContent({ children }: { children: React.ReactNode }) {
  const { blurActive } = usePrivacyBlur();

  return (
    <SidebarProvider>
      <AppSidebar
        className={cn(
          "transition-[filter]",
          blurActive && "blur-lg select-none"
        )}
      />
      <main className="flex w-full min-w-0 flex-col">
        <Navbar />
        <div
          className={cn(
            "min-h-0 flex-1 transition-[filter]",
            blurActive && "blur-lg select-none"
          )}
        >
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <PrivacyBlurProvider>
      <ShellContent>{children}</ShellContent>
    </PrivacyBlurProvider>
  );
}
