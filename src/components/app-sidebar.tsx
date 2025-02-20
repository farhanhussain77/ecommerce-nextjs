import {UserRound, ShoppingCart, Heart, Rss, Phone, Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "About",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Contact Us",
    url: "#",
    icon: Phone,
  },
  {
    title: "Blog",
    url: "#",
    icon: Rss,
  },
  {
    title: "Like",
    url: "#",
    icon: Heart,
  },
  {
    title: "Cart",
    url: "#",
    icon: ShoppingCart,
  },
  {
    title: "Profile",
    url: "#",
    icon: UserRound ,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="sm:hidden md:hidden" side="right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
