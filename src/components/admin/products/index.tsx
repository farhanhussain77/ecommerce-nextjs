import { Delete, Plus, Search } from "lucide-react";
import Table from "./table";
import { Button } from "@/components/ui/button";
import AddProduct from "./AddProduct";

const Products = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="relative">
                    <input placeholder="Search..." className="border rounded-lg px-6 py-1 text-[11px] focus:outline-none" />
                    <Search className="w-3 h-3 text-gray-400 absolute top-1/2 -translate-y-1/2 left-2" />
                </div>
                <AddProduct />
            </div>
            <div className="mt-6">
                <Table />
            </div>
        </div>
    )
}

export default Products;