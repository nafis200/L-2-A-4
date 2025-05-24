

const DiscountSection = () => {
  return (
    <section className=" mx-2 px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Drive Your Dream Car for Less!
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Take advantage of our limited-time special discounts on a wide range of vehicles!
          Whether you're searching for a sleek electric ride, a dependable used model, or a top-tier
          SUV, now is the perfect moment to make your move. Our exclusive deals combine quality with
          unbeatable pricing — designed to get you on the road faster and smarter.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
          Explore Offers
        </button>
      </div>

      <div className="w-full">
        <img
          src="https://i.postimg.cc/J4V0m2n3/pexels-photo-3905874.jpg"
          alt="Car Discount Banner"
          className="rounded-xl shadow-lg w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default DiscountSection;
