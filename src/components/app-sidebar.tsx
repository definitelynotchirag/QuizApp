import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Transcript Generator",
    url: "/transcript",
    icon: Inbox,
  },
  {
    title: "Quiz Generator",
    url: "/quiz",
    icon: Calendar,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarHeader className="flex text-2xl">Quizzify</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    {/* <Link to={item.url}>
                      <item.icon />
                      <span className="text-base">{item.title}</span>
                    </Link> */}
                    <a href={item.url}>
                      <item.icon />
                      <span className="text-base">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex justify-centerc items-center ml-7 h-12 text-md">
          <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={"/vite.svg"} alt="{user.name}" />

            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left ml-4 text-sm leading-tight">
            <span className="truncate font-semibold">Username</span>
            <span className="truncate text-xs">mx@gmail.com</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
