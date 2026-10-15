"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Eye, EyeOff, LogOut, User } from "lucide-react";

import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "./ui/separator";
import { SidebarTrigger } from "./ui/sidebar";
import { usePrivacyBlur } from "@/context/privacy-blur-context";
import { getPageTitle } from "@/lib/page-titles";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const pathname = usePathname();
  const { blurActive, toggleBlur } = usePrivacyBlur();
  const pageTitle = getPageTitle(pathname);

  return (
    <nav
      className="sticky top-0 z-50 flex h-14 w-full items-center justify-between gap-4 border-b border-border bg-background/80 px-3 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-4"
    >
      <div className="flex min-w-0 items-center gap-2">
        <SidebarTrigger className="size-9 shrink-0" />
        <div className="hidden min-w-0 flex-col sm:flex">
          <span className="truncate text-sm font-medium leading-tight">
            {pageTitle}
          </span>
          <span className="truncate text-xs text-muted-foreground leading-tight">
            Invoice Desk
          </span>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <div
          className="flex items-center rounded-lg border border-border bg-muted/40 p-0.5"
          role="toolbar"
          aria-label="Display options"
        >
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={cn("size-9", blurActive && "bg-muted text-primary")}
            onClick={toggleBlur}
            aria-pressed={blurActive}
            title={blurActive ? "Show dashboard" : "Hide dashboard"}
          >
            {blurActive ? (
              <EyeOff className="size-4" />
            ) : (
              <Eye className="size-4" />
            )}
          </Button>
          <ModeToggle />
        </div>

        <Separator orientation="vertical" className="hidden h-6 sm:block" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-9 gap-2 px-2 sm:pl-2 sm:pr-3"
            >
              <Image
                src="/avatar-placeholder.svg"
                alt="Admin avatar"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="hidden text-sm font-medium sm:inline">
                Admin
              </span>
              <ChevronDown className="hidden size-4 text-muted-foreground sm:inline" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>My account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/settings" className="cursor-pointer">
                <User className="size-4" />
                Profile & settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled className="text-muted-foreground">
              <LogOut className="size-4" />
              Sign out (soon)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
