'use client'

import { MenuItems } from "./const";
import { useAuth } from "@/context/Auth";
import Link from "next/link";

const Sidebar = () => {
    const {selectedMenu, setSelectedMenu} = useAuth();

    const handleClickMenuItem = (item: string) => {
        setSelectedMenu(item);
    }
    return(
        <div 
            className="py-4 w-full max-w-[230px] bg-[#211C24] h-screen"
        >
            <p className="text-white text-xl text-center pb-4 border-0 border-b border-gray-600">ShopNow</p>
            <ul className="px-1 pt-4">
                {MenuItems.map((item: {label: string, href: string, icon:any}, idx:number) => {
                    const IconComponent = item.icon;
                    return (
                        <li className={`${idx === 0 ? '' : 'mt-1'} ${item.label === selectedMenu ? 'bg-white/30' : ''} py-1 ps-2 rounded-sm text-sm hover:bg-white/30 text-white`}>
                            <Link 
                                href={item.href}
                                onClick={() => handleClickMenuItem(item.label)}
                                className="w-full h-full text-left flex items-center gap-1.5"
                            >
                                <IconComponent className="w-4 h-4" />
                                {item.label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar;