

const CarShopBanner = () => {
  return (
    <section className="w-full px-4 py-10">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Welcome to Our Car Shop
        </h2>
        <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
          Discover unbeatable deals on premium, used, and electric vehicles all in one place. Our showroom is stocked
          with carefully selected cars that meet the highest standards of quality and performance. Whether you're
          looking for luxury, reliability, or eco-friendly options, we have something tailored for your needs.
          Experience hassle-free financing, expert support, and a seamless car-buying journey from start to finish.
        </p>
      </div>

      <div className="relative w-full h-[40vh] md:h-[55vh] lg:h-[65vh] rounded-lg overflow-hidden shadow-md">
        <img
          src="https://i.postimg.cc/c4cCRT9W/bigdiscountcars-1566222131.jpg"
          alt="Big Discount Cars Banner"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg">
            Drive Your Dream Car Today
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg max-w-2xl drop-shadow-md">
            Huge discounts, best deals, and flexible financing. Shop now from our premium selection!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CarShopBanner;
