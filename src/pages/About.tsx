

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-4">Welcome to Our Car Shop</h1>
          <p className="text-lg">
            Providing Quality Cars and Exceptional Service Since 2000
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Mission</h2>
        <div className="flex flex-row md:flex-row items-center gap-10 justify-between space-y-8 md:space-y-0 mt-5">
          <div className="md:w-1/2 text-gray-700">
            <p className="text-lg mb-4">
              At Carshop, we believe in providing top-quality vehicles at affordable prices.
              With over 20 years of experience, we have been committed to helping our customers find the
              perfect car that fits their needs. Our goal is not just to sell cars but to provide an
              exceptional car-buying experience, ensuring every customer leaves satisfied and confident
              in their purchase.
            </p>
            <p className="text-lg">
              We pride ourselves on a large selection of cars, professional and friendly service, and
              an easy and stress-free buying process. Whether you're looking for a brand-new car or a
              reliable used vehicle, we have something for everyone.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://i.postimg.cc/05mWVy9Z/pexels-photo-2896135.jpg"
              alt="Car Shop"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-5">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Car Sales</h3>
              <p className="text-gray-700">
                We offer a wide selection of new and used cars. Our team will help you find the car that
                suits your needs, budget, and style.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Car Maintenance</h3>
              <p className="text-gray-700">
                Our shop offers professional maintenance and repair services for all car brands. Keeping
                your car in great condition is our priority.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Financing Options</h3>
              <p className="text-gray-700">
                We provide flexible financing options to help you purchase your car. Our team works
                with various lenders to offer competitive rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-lg text-gray-700">
            <p>
              We are committed to delivering the best car-buying experience with:
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Wide selection of cars</li>
              <li>Competitive prices</li>
              <li>Excellent customer service</li>
              <li>Flexible financing options</li>
              <li>Certified and experienced staff</li>
              <li>Comprehensive after-sales support</li>
            </ul>
          </div>
          <div className="text-lg text-gray-700">
            <p>
              Our reputation is built on trust, and our customers have consistently praised us for our
              transparent approach, no-pressure sales, and honest pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-lg mb-8">
            Have any questions or need assistance? Our team is here to help you find your dream car or
            assist with any service-related inquiries.
          </p>
          <a
            className="bg-white text-blue-600 py-2 px-6 rounded-lg shadow-md hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
