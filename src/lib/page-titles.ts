const titles: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/invoices": "Invoices",
  "/customers": "Customers",
  "/settings": "Settings",
};

export function getPageTitle(pathname: string): string {
  if (titles[pathname]) {
    return titles[pathname];
  }
  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment) {
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  }
  return "Dashboard";
}
