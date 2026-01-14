'use client'
import { useAuth } from "@/context/Auth";
import { Bell, User } from "lucide-react";

const Header = () => {
    const {selectedMenu} = useAuth();
    return (
        <div className="shadow-sm flex items-center justify-between bg-white px-10 py-3">
            <p className="text-lg">{selectedMenu}</p>
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    <p className="text-sm">Farhan Hussain</p>
                    <button>
                        <User size={20} className="w-full h-full bg-gray-200 rounded-full p-2" />
                    </button>
                </div>
                
                <button>
                    <Bell size={16} className="text-black p-2 rounded-full hover:bg-gray-200 w-full h-full" />
                </button>
            </div>
        </div>
    )
};

export default Header;