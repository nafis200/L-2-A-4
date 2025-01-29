import { Card, Typography, Spin, Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { useGetSingleCarsQuery } from "../redux/features/cars/carsManagement";
import type { Car } from "../types";

const { Title, Text } = Typography;

const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: CarData, isFetching } = useGetSingleCarsQuery([id]);

    if (isFetching) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <Spin size="large" />
            </div>
        );
    }

    if (!CarData || !CarData.data || CarData.data.length === 0) {
        return <div className="text-center">No data available</div>;
    }

    const car = CarData?.data[0] as Car;

    const handleBuyNow = () => {
        navigate(`/checkout/${car?._id}`);
    };

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <Card
                hoverable
                className="w-full md:w-1/2 lg:w-1/3  max-w-4xl shadow-2xl p-6 rounded-lg"
                cover={<div className="w-full  flex justify-center items-center overflow-hidden rounded-t-lg"> 
                            <img alt={car?.brand} src={car?.image} className="object-cover w-full h-full" />
                       </div>}
            >
                <Title level={2} className="text-center text-blue-600">{car?.brand} {car?.model} ({car?.year})</Title>
                <Text strong className="block text-lg">Category: <Text>{car?.category}</Text></Text>
                <Text strong className="block text-lg">Price: <Text className="text-green-500">${car?.price}</Text></Text>
                <Text strong className="block text-lg">Description: <Text>{car?.description}</Text></Text>
                <Text strong className="block text-lg">Stock: <Text className={car?.inStock ? "text-green-500" : "text-red-800"}>{car?.quantity ? "Available" : "Out of Stock"}</Text></Text>
                <div className="flex justify-center mt-6">
                    <Button type="primary" size="large" onClick={handleBuyNow} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                        Buy Now
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default SingleProduct;
