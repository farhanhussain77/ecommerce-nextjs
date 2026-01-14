'use client'
import { useState } from "react";
import Tabs from "./tabs";
import ProductCard from "@/components/product-card";

const ProductTabs = () => {
    const [selected, setSelected] = useState("New Arrival")
    return (
        <section className="xl:max-w-[1120px] lg:max-w-[1000px] md:max-w-[850px] sm:max-w-[600px] mt-14 mx-auto xl:px-0 lg:px-20 md:px-10 px-4">
            <Tabs 
                selected={selected} 
                setSelected={(selected: string) => setSelected(selected)}
            />
            <div className="mt-8 flex flex-wrap gap-4">
                <ProductCard 
                    onClickBuy={() => {}}
                    productImage="PRODUCT PIC"
                    description="Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)"
                    price="$900"
                />
                <ProductCard 
                    onClickBuy={() => {}}
                    productImage="PRODUCT PIC"
                    description="Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)"
                    price="$900"
                />
                <ProductCard 
                    onClickBuy={() => {}}
                    productImage="PRODUCT PIC"
                    description="Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)"
                    price="$900"
                />
                <ProductCard 
                    onClickBuy={() => {}}
                    productImage="PRODUCT PIC"
                    description="Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)"
                    price="$900"
                />
                <ProductCard 
                    onClickBuy={() => {}}
                    productImage="PRODUCT PIC"
                    description="Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)"
                    price="$900"
                />
            </div>
        </section>
    )
};

export default ProductTabs;