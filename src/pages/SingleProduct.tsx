import { Typography, Spin, Button, message, Rate } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { useGetSingleCarsQuery } from "../redux/features/cars/carsManagement";
import type { Car } from "../types";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/features/cars/carSlice";

import {
  FaCarAlt,
  FaDollarSign,
  FaCheckCircle,
  FaExclamationTriangle,
  FaStar,
  FaChartBar,
  FaLink,
} from "react-icons/fa";

const { Title, Text, Paragraph } = Typography;

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: CarData, isFetching } = useGetSingleCarsQuery([id]);

  if (isFetching) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (!CarData || !CarData.data || CarData.data.length === 0) {
    return (
      <div className="text-center text-red-500 font-semibold mt-10">
        No data available
      </div>
    );
  }

  const car = CarData?.data[0] as Car;

  const handleBuyNow = (item: Car) => {
    dispatch(addProduct(item));
    message.success("Successfully added product");
    navigate("/stores");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 space-y-10">
     
      <section className="text-center">
        <img
          src={car?.image}
          alt={car?.brand}
          className="w-full max-h-[400px] object-contain rounded-lg mb-6"
        />
        <Title level={2} className="text-blue-600">
          {car?.brand} {car?.model} ({car?.year})
        </Title>
      </section>

  
      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-md space-y-4">
        <Title level={4} className="flex items-center gap-2">
          <FaCarAlt className="text-blue-600" /> Product Details
        </Title>
        <Paragraph className="flex items-center gap-2">
          <FaCarAlt className="text-blue-600" /> <strong>Category:</strong> {car?.category}
        </Paragraph>
        <Paragraph className="flex items-center gap-2">
          <FaDollarSign className="text-green-600" /> <strong>Price:</strong>{" "}
          <span className="text-green-600">${car?.price}</span>
        </Paragraph>
        <Paragraph>
          <strong>Description:</strong> {car?.description}
        </Paragraph>
        <Paragraph className="flex items-center gap-2">
          {car?.inStock && car?.quantity ? (
            <span className="text-green-600 flex items-center gap-1">
              <FaCheckCircle /> In Stock
            </span>
          ) : (
            <span className="text-red-600 flex items-center gap-1">
              <FaExclamationTriangle /> Out of Stock
            </span>
          )}
        </Paragraph>
        <div className="flex justify-center mt-4">
          <Button
            type="primary"
            size="large"
            onClick={() => handleBuyNow(car)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Add to Cart
          </Button>
        </div>
      </section>

 
      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-md space-y-3">
        <Title level={4} className="flex items-center gap-2">
          <FaStar className="text-yellow-500" /> Star Rating
        </Title>
        <Rate allowHalf defaultValue={4.5} disabled />
        <Text>(Based on user reviews)</Text>
      </section>


      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-md space-y-3">
        <Title level={4} className="flex items-center gap-2">
          <FaChartBar className="text-purple-500" /> Average Ratings
        </Title>
        <Paragraph>
          <strong>Performance:</strong> 4.6/5
        </Paragraph>
        <Paragraph>
          <strong>Comfort:</strong> 4.4/5
        </Paragraph>
        <Paragraph>
          <strong>Value for Money:</strong> 4.5/5
        </Paragraph>
      </section>

      <section className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <Title level={4} className="flex items-center gap-2">
          <FaLink className="text-blue-500" /> Suggested Products
        </Title>
        <Text type="secondary">
          Similar cars from <span className="font-semibold">{car?.brand}</span> will be listed here
          (Static placeholder for now).
        </Text>
      </section>
    </div>
  );
};

export default SingleProduct;
