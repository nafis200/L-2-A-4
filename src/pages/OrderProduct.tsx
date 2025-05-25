import { Button, message, Spin } from "antd";
import { MinusOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { useAppSelector, useAppDispatch } from "../redux/hooks";

import {
  decrementOrderQuantity,
  incrementOrderQuantity,
  orderedProductsSelector,
  removeProduct,
} from "../redux/features/cars/carSlice";
import { useGetSingleCarsQuery } from "../redux/features/cars/carsManagement";

const OrderProduct = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(orderedProductsSelector);

  const product = products?.[0];

  const { data: CarData, isFetching } = useGetSingleCarsQuery(product?.key, {
    skip: !product?.key,
  });

  if (!product)
    return (
      <div className="min-h-screen flex justify-center text-red-800">
        No products found.
      </div>
    );
  if (isFetching) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  const quantity = CarData?.data?.[0]?.quantity;

  const productWithImage = {
    ...product,
    image: product.image || "/default-image.png",
    name: product.model || "Unknown Model",
    _id: product.key,
  };

  const handleIncrementQuantity = (id: string) => {
    if ((quantity ?? 0) >= product.orderQuantity + 1) {
      dispatch(incrementOrderQuantity(id));
    } else {
      message.error("Out of stock");
    }
  };

  const handleDecrementQuantity = (id: string) => {
    dispatch(decrementOrderQuantity(id));
  };

  const handleRemoveProduct = (id: string) => {
    dispatch(removeProduct(id));
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        display: "flex",
        padding: "20px",
        gap: "20px",
        alignItems: "center",
        width: "70%",
      }}
    >
      <div className="w-full max-w-[150px] aspect-square overflow-hidden rounded-lg">
        <img
          src={productWithImage.image}
          alt={productWithImage.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/default-image.png";
          }}
        />
      </div>

      <div style={{ flexGrow: 1 }}>
        <h2>
          <span className="font-bold">Model: </span> {productWithImage.name}
        </h2>
        <h2>
          <span className="font-bold">Brand: </span> {productWithImage.brand}
        </h2>
        <hr style={{ margin: "8px 0" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <strong>Price:</strong> {productWithImage.price}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Button
              onClick={() => handleDecrementQuantity(productWithImage._id)}
              icon={<MinusOutlined />}
            />
            <span style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              {productWithImage.orderQuantity}
            </span>
            <Button
              onClick={() => handleIncrementQuantity(productWithImage._id)}
              icon={<PlusOutlined />}
            />
            <Button
              onClick={() => handleRemoveProduct(productWithImage._id)}
              icon={<DeleteOutlined />}
              danger
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
