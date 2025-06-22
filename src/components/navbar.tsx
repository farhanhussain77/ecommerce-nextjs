import { AppSidebar } from "@/components/app-sidebar"
import Image from "../../node_modules/next/image"
import Link from "../../node_modules/next/link";
import { User } from "lucide-react";

export const Navbar = () => {
    return (
      <div className='flex items-center justify-center h-[6rem] gxl:mx-40 mx-16'>
        <div className="flex items-center gap-6 xl:gap-8 w-full">
          <Image className="2xl:w-[85px] 2xl:h-[85px]" src="logo.svg" width="70" height="70" alt="" />
          <div className="flex bg-[#F5F5F5] rounded-lg h-[46px] max-w-[433px] w-full" >
            <button className="p-2">
              <Image src="/search.png" height="15" width="15" alt="" />
            </button>
            <input className="focus:outline-none bg-[#F5F5F5] text-sm 2xl:text-normal w-[100%]" placeholder="Search"/>
          </div>
          <div className="hidden lg:flex items-center gap-12 w-max-full"> 
            <Link className="font-sans lg:text-base font-medium  md:text-sm sm:text-xs" href="/">Home</Link>
            <Link className="font-sans lg:text-base text-[#2E2E2E]  md:text-sm sm:text-xs" href="/">About</Link>
            <Link className="font-sans lg:text-base text-[#2E2E2E]  md:text-sm sm:text-xs" href="/">Contact Us</Link>
            <Link className="font-sans lg:text-base text-[#2E2E2E]  md:text-sm sm:text-xs" href="/">Blog</Link>
          </div>
          <div className="hidden lg:flex items-center justify-center gap-4 max-w-32 2xl:w-full">
            <button>
              <Image src="/heart.png" width="20" height="17" alt="" />
            </button>
            <button>
              <Image src="/cart.png" width="24" height="22" alt="" />
            </button>
            <button>
              <User color="#000000" />
            </button>
          </div>
          <div className="lg:hidden">
            <AppSidebar  />
          </div>
        </div>
      </div>
    );
}