import Link from "next/link";

const CategoryCard = ({title, href, icon}:{title: string, href?:string, icon?: string}) => {
    return (
        <Link href="/#" className="flex items-center justify-center mt-8 w-40 h-32 bg-[#EDEDED] rounded-xl">
            <p className="text-xs font-medium">{title}</p>
        </Link>
    )
}

export default CategoryCard;