import { AppSidebar } from "@/components/app-sidebar"
import { Sidebar, SidebarTrigger } from "@/components/ui/sidebar"
import Image from "../../node_modules/next/image"
import Link from "../../node_modules/next/link"
export const Navbar = () => {
    return (
<div className='max-sm:flex sm:grid lg:grid-cols-[0.4fr_1.5fr_1.1fr] md:grid-cols-[0.4fr_1.2fr_1.4fr]  sm:grid-cols-[0.3fr_1fr_1.7fr]  justify-between items-center gap-4 h-[6rem] w-full mx-20'>
      <Image className="2xl:w-[85px] 2xl:h-[85px]"  src="logo.svg" width="70" height="70" alt="" />
      <div  className="flex flex-row bg-[#F5F5F5]  h-[40px] sm:h-[30px] max-sm:hidden" >
        <button className="p-2">
          <Image src="/search.png" height="15" width="15" alt="" />
        </button>
        <input className="focus:outline-none bg-[#F5F5F5] text-sm 2xl:text-normal w-[100%]" placeholder="Search"/>
      </div>
      <div className="flex flex-row justify-between max-sm:hidden "> 
        <Link className="font-sans lg:text-base font-medium  md:text-sm sm:text-xs" href="/">Home</Link>
        <Link className="font-sans lg:text-base text-[#2E2E2E]  md:text-sm sm:text-xs" href="/">About</Link>
        <Link className="font-sans lg:text-base text-[#2E2E2E]  md:text-sm sm:text-xs" href="/">Contact Us</Link>
        <Link className="font-sans lg:text-base text-[#2E2E2E]  md:text-sm sm:text-xs" href="/">Blog</Link>
        <button>
          <Image src="/heart.png" width="20" height="17" alt="" />
        </button>
        <button>
          <Image src="/cart.png" width="24" height="22" alt="" />
        </button>
        <button>
          <Image src="/profile.png" width="10" height="10" alt="" />
        </button>
      </div>
      <div className="sm:hidden">
            <AppSidebar  />
          <SidebarTrigger className="sm:hidden ml-[18rem]" />
      </div>
    </div>
    );
}