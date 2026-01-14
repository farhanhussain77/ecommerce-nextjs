const Hero = () => {
    return (
      <section className="bg-[#211C24] w-full">
        <div className="xl:mx-40 mx-20 pt-28 lg:py-0 flex justify-center flex-col lg:flex-row items-center lg:items-stretch lg:gap-4 gap-20 lg:h-[632px]">

            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                <p className="text-white text-lg font-semibold opacity-40">Pro.Beyond.</p>
                <h1 className="mt-4 text-white text-[60px] leading-[1.1]">
                    IPhone 14 <strong>Pro</strong>
                </h1>
                <p className="mt-2 text-white text-base opacity-40">
                    Created to change everything for the better. For everyone
                </p>
                <button className="w-[184px] mt-6 border border-white rounded-sm px-10 py-2.5 text-white text-sm">
                    Shop Now
                </button>
            </div>
  
            <div className="flex-1 flex h-full items-end justify-center lg:justify-end">
                <img
                src="/iphone-image.png"
                alt="iphone-image"
                className="h-auto max-w-full"
                />
            </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  