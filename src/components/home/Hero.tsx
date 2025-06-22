const Hero = () => {
    return (
        <div className="mt-4 bg-[#211C24] w-full h-[632px]">
            <div className="flex items-center justify-center gap-10">
                <div>
                    <p className="text-white text-lg font-bold opacity-40">Pro.Beyond.</p>
                    <h1 className="text-white text-[60px]">Iphone 14 <span className="text-white font-bold text-[60px]">Pro</span></h1>
                    <p className="mt-2 text-white text-sm opacity-40">Created to change everything for the better. For everyone</p>
                    <button className="mt-6 border border-white rounded-sm px-10 py-2.5 text-white text-sm">
                        Shop Now
                    </button>
                </div>
                <div className="relative top-[73px]">
                    <img src="/iphone-image.png" alt="iphone-image" width={406} height="auto" />
                </div>
            </div>
        </div>
    )
}

export default Hero;