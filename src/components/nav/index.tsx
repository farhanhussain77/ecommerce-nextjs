import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className="hidden md:flex items-center gap-3 md:gap-6 xl:gap-8">
            <Link 
                className={`${pathname === '/' || pathname === '/home' ? 'text-blue-600 font-semibold' : ''} text-sm 2xl:text-md hover:text-blue-600`} 
                href="/"
            >
                Home
            </Link>
            <Link 
                className={`${pathname === '/about' ? 'text-blue-600 font-semibold' : ''} text-sm 2xl:text-md hover:text-blue-600`} 
                href="/"
            >
                About
            </Link>
            <Link 
                className={`${pathname === '/contact-us' ? 'text-blue-600 font-semibold' : ''} text-sm 2xl:text-md hover:text-blue-600`} 
                href="/"
            >
                Contact Us
            </Link>
            <Link 
                className={`${pathname === '/blog' ? 'text-blue-600 font-semibold' : ''} text-sm 2xl:text-md hover:text-blue-600`} 
                href="/"
            >
                Blog
            </Link>
        </div>
    )
}

export default Navbar;