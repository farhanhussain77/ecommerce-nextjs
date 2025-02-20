'use client'
import Image from "next/image"
import Navbar from "../Navbar";
import MobileNavbar from "../MobileNavbar";

const Header = () => {
    return (
        <div className="flex items-center justify-between gap-4 lg:gap-6 xl:gap-8 w-full h-[66px] xl:h-[88px] px-4 lg:px-[60px] xl:px-[90px] 2xl:px-[160px]">
            <Image src="/Logo.svg" alt="Logo" width={96} height={32} />
            <div className="flex items-center gap-2 bg-[#F5F5F5] rounded-lg h-[56px] w-full max-w-[290px] lg:max-w-[370px] xl:max-w-[433px] p-4">
                <Image src="/search.svg" width={16} height={16} alt="search" />
                <input placeholder="Search" className="text-sm outline-none p-2 bg-transparent ml-2" type="text" />
            </div>
            <Navbar />
            <div className="hidden lg:flex items-center lg:gap-2 xl:gap-4">
                <button className="hover:bg-[#F6F6F6] w-8 h-8 rounded flex items-center justify-center">
                    <Image src="/favourite.svg" width={16} height={16} alt="Like" />
                </button>
                <button className="hover:bg-[#F6F6F6] w-8 h-8 rounded flex items-center justify-center">
                    <Image src="/cart.svg" width={16} height={16} alt="Like" />
                </button>
                <button className="hover:bg-[#F6F6F6] w-8 h-8 rounded flex items-center justify-center">
                    <Image src="/profile.svg" width={16} height={16} alt="Like" />
                </button>
            </div>

            {/* Mobile navbar */}
            <MobileNavbar />
        </div>
    )
}

export default Header;