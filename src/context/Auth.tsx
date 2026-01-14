"use client";

import { MenuItems } from "@/components/admin/sidebar/const";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
console.log("pathname", MenuItems.find(item => pathname.includes(item.href))?.label);
  const [user, setUser] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState(() => {
    return MenuItems.find(item => pathname.includes(item.href))?.label ?? "";
  });

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        setUser,
        selectedMenu,
        setSelectedMenu
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if(!authContext){
    throw new Error("Auth context not available")
  }
  return authContext;
};
