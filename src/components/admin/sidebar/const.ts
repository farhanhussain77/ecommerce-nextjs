import {
    LayoutDashboard,
    ShoppingCart,
    Package,
    Layers,
    Warehouse,
    Users,
    CreditCard,
    Percent,
    Truck,
    FileText,
    BarChart3,
    Star,
    ShieldCheck,
    Settings
} from "lucide-react";
  
export const MenuItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Orders", href: "/orders", icon: ShoppingCart },
    { label: "Products", href: "/products", icon: Package },
    { label: "Categories", href: "/categories", icon: Layers },
    { label: "Inventory", href: "/inventory", icon: Warehouse },
    { label: "Customers", href: "/customers", icon: Users },
    { label: "Payments", href: "/payments", icon: CreditCard },
    { label: "Discounts", href: "/discounts", icon: Percent },
    { label: "Shipping", href: "/shipping", icon: Truck },
    { label: "Content", href: "/content", icon: FileText },
    { label: "Reports", href: "/reports", icon: BarChart3 },
    { label: "Reviews", href: "/reviews", icon: Star },
    { label: "Users & Roles", href: "/users", icon: ShieldCheck },
    { label: "Settings", href: "/settings", icon: Settings }
];
  