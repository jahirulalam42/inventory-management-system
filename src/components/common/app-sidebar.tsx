import {
  BaggageClaim,
  CircleUser,
  ClipboardList,
  FileChartColumnIncreasing,
  Home,
  LogOut,
  Settings,
  ShoppingBag,
} from "lucide-react";
import SidebarLogo from "../../../public/images/sidebar-logo.png";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Inventory",
    url: "#",
    icon: BaggageClaim,
  },
  {
    title: "Reports",
    url: "#",
    icon: FileChartColumnIncreasing,
  },
  {
    title: "Suppliers",
    url: "#",
    icon: CircleUser,
  },
  {
    title: "Orders",
    url: "#",
    icon: ShoppingBag,
  },
  {
    title: "Manage Store",
    url: "#",
    icon: ClipboardList,
  },
];

const footerItems = [
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Log Out",
    url: "#",
    icon: LogOut,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-6 py-10">
            <Image src={SidebarLogo} alt="Sidebar Logo" />
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton size={"xl"} asChild>
                    <Link href={item.url}>
                      <item.icon className="size-6!" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenu>
            {footerItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton size={"xl"} asChild>
                  <Link href={item.url}>
                    <item.icon className="size-6!" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
