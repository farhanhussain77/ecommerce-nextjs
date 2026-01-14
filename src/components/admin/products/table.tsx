'use client'
import {
    Table, 
    TableCaption, 
    TableHeader, 
    TableRow, 
    TableHead, 
    TableBody,
    TableCell
} from "@/components/ui/table"
import { Trash2 } from "lucide-react";

const ProductTable = () => {
    return (
        <Table className="bg-white rounded-lg">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[200px]">Name</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell>$250.00</TableCell>
                    <TableCell>
                        <button onClick={() => {}}>
                            <Trash2 size={24} className="hover:bg-gray-100 p-[5px] rounded-lg" />
                        </button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default ProductTable;