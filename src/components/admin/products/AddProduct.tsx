'use client'
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectValue, SelectTrigger } from "@/components/ui/select";
import { Plus } from "lucide-react";
import { ChangeEvent, useState } from "react";


const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        sku: '',
        price: '',
        quantity: 1,
        status: 'draft',
        category: ''
    });

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="text-[12px]">
                        <Plus />
                        Add Product
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Product</DialogTitle>
                    </DialogHeader>
                    <form>
                        <div>
                            <Label>Name</Label>
                            <Input 
                                name="name" 
                                value={formData.name} 
                                onChange={onChange}
                            />
                        </div>

                        <div className="flex items-center gap-6 mt-6">
                            <div className="w-1/2">
                                <Label>SKU</Label>
                                <Input 
                                    name="sku" 
                                    value={formData.sku} 
                                    onChange={onChange}
                                />
                            </div>
                            <div className="w-1/2">
                                <Label>Quantity</Label>
                                <Input 
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={onChange}
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mt-6">
                            <div className="w-1/2">
                                <Label>Status</Label>
                                <Select 
                                    value={formData.status} 
                                    onValueChange={value => setFormData(prev => ({...prev, status: value}))}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="active">Active</SelectItem>
                                        <SelectItem value="draft">Draft</SelectItem>
                                        <SelectItem value="archived">Archived</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="w-1/2">
                            <Label>Category</Label>
                                <Select 
                                    value={formData.category} 
                                    onValueChange={value => setFormData(prev => ({...prev, category: value}))}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="cloth">Cloth</SelectItem>
                                        <SelectItem value="sports">Sports</SelectItem>
                                        <SelectItem value="electronics">Electronis</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                    <DialogFooter className="mt-6">
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default AddProduct;