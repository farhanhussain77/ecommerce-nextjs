import CategoryCard from "./CategoryCard";

const Category = () => {
    return (
        <div className="mt-20 mb-20 mx-40">
            <p>Browse By Category</p>
            <div className="flex items-center gap-8">
                <CategoryCard title="Phones" />
                <CategoryCard title="Smart Watches" />
                <CategoryCard title="Cameras" />
                <CategoryCard title="Headphones" />
                <CategoryCard title="Computers" />
                <CategoryCard title="Gaming" />
            </div>
        </div>
    )
}

export default Category;