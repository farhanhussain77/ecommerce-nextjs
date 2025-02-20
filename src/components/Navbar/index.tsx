import Link from "next/link";

const Navbar = () => {
    return (
        <div className="hidden lg:flex items-center xl:gap-8">
            <Link className="text-sm 2xl:text-md" href="/">Home</Link>
            <Link className="text-sm 2xl:text-md" href="/">About</Link>
            <Link className="text-sm 2xl:text-md" href="/">Contact Us</Link>
            <Link className="text-sm 2xl:text-md" href="/">Blog</Link>
        </div>
    )
}

export default Navbar;