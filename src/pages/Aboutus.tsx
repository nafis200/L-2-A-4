import { FaCar, FaHandshake, FaDollarSign } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="w-full mx-auto bg-white px-4 py-16">
      <div className="">
        <h2 className="text-4xl text-center font-extrabold text-gray-900 mb-10">
          About Our Car Shop
        </h2>

        <div className="grid grid-cols-1 gap-8 text-left">
         
          <div className="flex items-start gap-4">
            <FaCar className="text-4xl text-blue-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p className="text-gray-700 leading-relaxed">
               We take pride in offering an extensive and diverse collection of vehicles, including top-tier premium models, carefully inspected used cars, and the latest electric vehicles. Whether you're searching for a reliable commuter, a family-friendly SUV, or an eco-conscious ride, our inventory is tailored to fit every lifestyle, need, and budget. With new arrivals regularly added, you're sure to find the perfect match that aligns with your personal style and driving preference
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaHandshake className="text-4xl text-green-600 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
              <p className="text-gray-700 leading-relaxed">
                Our dedicated team is committed to delivering outstanding customer support at every step of your car-buying journey. From the moment you walk through our doors or visit our website, we ensure that your needs are heard, your questions are answered, and your preferences are prioritized. We aim to make the entire process—whether it's browsing, test-driving, financing, or finalizing your purchase—as smooth, transparent, and enjoyable as possible. With personalized guidance and a friendly, knowledgeable staff, we strive to turn what could be a stressful experience into a truly memorable and satisfying one
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaDollarSign className="text-4xl text-yellow-500 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Flexible Financing</h3>
              <p className="text-gray-700 leading-relaxed">
                We provide flexible payment plans tailored to your budget so you can drive away happy.
                We provide flexible payment plans tailored to your budget so you can drive away happy.
                We provide flexible payment plans tailored to your budget so you can drive away happy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
