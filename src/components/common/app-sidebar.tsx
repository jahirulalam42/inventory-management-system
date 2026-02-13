"use client";
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
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Inventory",
    url: "/inventory",
    icon: BaggageClaim,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileChartColumnIncreasing,
  },
  {
    title: "Suppliers",
    url: "/suppliers",
    icon: CircleUser,
  },
  {
    title: "Orders",
    url: "/orders",
    icon: ShoppingBag,
  },
  {
    title: "Manage Store",
    url: "/manageStore",
    icon: ClipboardList,
  },
];

export function AppSidebar() {
  const pathName = usePathname();

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
                  <SidebarMenuButton
                    className={pathName === item.url ? "text-blue-500" : ""}
                    size={"xl"}
                    asChild
                  >
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
            <SidebarMenuItem>
              <SidebarMenuButton
                className="cursor-pointer"
                onClick={() => signOut({ callbackUrl: "/login" })}
                size={"xl"}
                asChild
              >
                <div>
                  <LogOut className="size-6!" />
                  <span>Log Out</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
