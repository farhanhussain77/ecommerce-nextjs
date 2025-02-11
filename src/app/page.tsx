import { AppSidebar } from "@/components/app-sidebar"
import { Sidebar, SidebarTrigger } from "@/components/ui/sidebar"
import Image from "../../node_modules/next/image"
import Link from "../../node_modules/next/link"

const HomePage = () => {
  return (
    <div className='flex justify-between items-start mx-20 my-4'>
      <Image className="2xl:w-[85px] 2xl:h-[85px]"  src="logo.svg" width="70" height="70" alt="" />
      <div  className="flex flex-row bg-[#F5F5F5] lg:w-[480px] h-[40px] 2xl:w-[780px] xl:w-[580px] md:w-[350px] sm:w-[300px] mx-5 max-sm:hidden" >
        <button className="p-2">
          <Image src="/search.png" height="15" width="15" alt="" />
        </button>
        <input className="focus:outline-none bg-[#F5F5F5] text-sm 2xl:text-normal w-[100%]" placeholder="Search"/>
      </div>
      <div className="flex flex-row justify-between w-[28rem] md:w-[35rem]  max-sm:hidden"> 
        <Link className="font-sans text-base font-medium" href="/">Home</Link>
        <Link className="font-sans text-base text-[#2E2E2E]" href="/">About</Link>
        <Link className="font-sans text-base text-[#2E2E2E]" href="/">Contact Us</Link>
        <Link className="font-sans text-base text-[#2E2E2E]" href="/">Blog</Link>
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
            <AppSidebar  />
        <SidebarTrigger className="sm:hidden ml-[18rem]" />
    </div>
  )
}

export default HomePage