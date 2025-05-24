import { useEffect, useState } from "react";
import { Car, TQueryParam } from "../types";
import { useGetAllCarsQuery } from "../redux/features/cars/carsManagement";
import { Button, Input, Pagination, message, Row, Col, Card } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import { addProduct, orderedProductsSelector } from "../redux/features/cars/carSlice";
import { BsFillCarFrontFill } from "react-icons/bs";
import { FaDollarSign, FaPlusCircle } from "react-icons/fa";
import FilterPanel from "./Filtered";

export type TTableData = Pick<
  Car,
  "price" | "model" | "brand" | "category" | "quantity" | "image"
> & { key: string };

const AllProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useAppSelector(orderedProductsSelector);
  const [searchParams, setSearchParams] = useSearchParams();

  const initialPage = Number(searchParams.get("page")) || 1;
  const initialLimit = Number(searchParams.get("limit")) || 10;
  const initialSearchTerm = searchParams.get("searchTerm") || "";
  const initialBrand = searchParams.get("brand") || "";
  const initialModel = searchParams.get("model") || "";
  const initialCategory = searchParams.get("category") || "";
  const initialPrice = Number(searchParams.get("price")) || 0;

  const [pagination, setPagination] = useState({
    current: initialPage,
    pageSize: initialLimit,
  });

  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);

  const [filters, setFilters] = useState<Record<string, string | number>>({
    brand: initialBrand,
    model: initialModel,
    category: initialCategory,
    price: initialPrice,
  });

  useEffect(() => {
    const newParams = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== "" && value !== 0) {
        newParams.set(key, String(value));
      }
    });

    newParams.set("page", pagination.current.toString());
    newParams.set("limit", pagination.pageSize.toString());

    if (searchTerm) {
      newParams.set("searchTerm", searchTerm);
    }

    setSearchParams(newParams);
  }, [filters, pagination, searchTerm, setSearchParams]);

  const params: TQueryParam[] = [];

  Object.entries(filters).forEach(([key, value]) => {
    if (key === "price" && value !== 0) {
      params.push({ name: "price", value: String(value) });
    } else if (value !== "") {
      params.push({ name: key, value: String(value) });
    }
  });

  params.push({ name: "page", value: pagination.current.toString() });
  params.push({ name: "limit", value: pagination.pageSize.toString() });

  if (searchTerm) {
    params.push({ name: "searchTerm", value: searchTerm });
  }

  const { data: CarData, isFetching } = useGetAllCarsQuery(params);

  const tableData: TTableData[] =
    CarData?.data?.map(({ _id, price, model, brand, category, quantity, image }) => ({
      key: _id,
      price,
      model,
      brand,
      category,
      quantity,
      image,
    })) || [];

  const onAddToCart = (item: TTableData) => {
    if (products.length === 0) {
      dispatch(addProduct(item));
      message.success("Successfully added product");
      navigate("/stores");
    } else {
      setTimeout(() => {
        message.error("First pay for your current order before adding new one.");
      }, 2000);
      navigate("/stores");
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setPagination((prev) => ({ ...prev, current: 1 }));
  };

 

  const handleFilterChange = (name: string, value: string | number) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
    setPagination((prev) => ({ ...prev, current: 1 }));
  };

   

  return (
    <div className="px-5">
      <FilterPanel filters={filters} onFilterChange={handleFilterChange} />

      <div className="flex justify-center mt-5 mb-6">
        <Input
          placeholder="Search by brand, model, category"
          value={searchTerm}
          onChange={handleSearch}
          className="rounded-full border-green-600 focus:border-green-600 focus:ring-green-500"
          style={{
            width: "100%",
            maxWidth: 400,
            padding: "10px 16px",
            borderWidth: 2,
          }}
        />
      </div>

      <Row
        gutter={[16, 16]}
        justify="start"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {tableData.map((product) => (
          <Col key={product.key}>
            <Card
              loading={isFetching}
              cover={
                <img
                  alt={product.model}
                  src={product.image}
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
              }
              style={{
                width: "100%",
                minHeight: "360px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "2px solid #4CAF50",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="flex flex-col flex-grow justify-between h-full">
                <div className="space-y-2">
                  <p>
                    <BsFillCarFrontFill /> <strong>Brand:</strong> {product.brand}
                  </p>
                  <p>
                    <FaDollarSign /> <strong>Price:</strong> ${product.price}
                  </p>
                </div>

                <div className="flex gap-2 mt-3">
                  <Button
                    type="primary"
                    onClick={() => navigate(`/car-detail/${product.key}`)}
                  >
                    View
                  </Button>
                  <Button type="default" onClick={() => onAddToCart(product)}>
                    <FaPlusCircle className="mr-1" /> Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="pagination-container mt-5 mb-5 flex justify-center">
        <Pagination
          current={pagination.current}
          pageSize={pagination.pageSize}
          total={CarData?.meta?.total}
          showSizeChanger
          showQuickJumper
          pageSizeOptions={["5", "6", "8", "10"]}
          onChange={(page, pageSize) => setPagination({ current: page, pageSize })}
        />
      </div>
    </div>
  );
};

export default AllProduct;
