import LikeIcon from '@/components/icons/like';

interface IProductCardProps {
    productImage: string;
    description: string;
    price: string;
    onClickBuy?: () => void;
    isLiked?: boolean;
}

const ProductCard = ({productImage, isLiked, description, price, onClickBuy}: IProductCardProps) => {
    return (
        <div className="bg-[#F6F6F6] sm:w-[268px] w-[163px] rounded-lg">
            <div className="px-4 py-6">
                <div className="w-full flex justify-end">
                    <LikeIcon isLiked={isLiked} />
                </div>
                <div className="mt-4 text-center">
                    PRODUCT PIC
                </div>
                <p className="mt-4 text-center font-medium">
                    {description} 
                </p>
                <p className="mt-4 text-center font-semibold">
                    {price}
                </p>
                <div className="">
                    
                </div>
                <button onClick={onClickBuy} className="flex justify-center w-full mx-auto mt-6 py-3 px-16 bg-black rounded-lg">
                    <p className="text-white text-sm whitespace-nowrap">Buy Now</p>
                </button>
            </div>
        </div>
    )
}

export default ProductCard;