import { useState } from "react";
import { Car, TQueryParam } from "../types";
import { useGetAllCarsQuery } from "../redux/features/cars/carsManagement";
import {
  Button,
  Input,
  Table,
  Pagination,
  type TableColumnsType,
  type TableProps,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import "./pagination.css";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/hooks";
import {
  addProduct,
  orderedProductsSelector,
} from "../redux/features/cars/carSlice";

export type TTableData = Pick<
  Car,
  "price" | "model" | "brand" | "category" | "quantity" | "image"
> & { key: string };

const Allproduct = () => {
  const [params] = useState<TQueryParam[] | undefined>(undefined);
  const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });
  const [searchTerm, setSearchTerm] = useState<string>("");

  const navigate = useNavigate();

  const { data: CarData, isFetching } = useGetAllCarsQuery([
    ...(params || []),
    { name: "page", value: pagination.current.toString() },
    { name: "limit", value: pagination.pageSize.toString() },
    { name: "searchTerm", value: searchTerm },
  ]);

  const dispatch = useDispatch();
  const products = useAppSelector(orderedProductsSelector);

  

  const tableData = CarData?.data?.map(
    ({ _id, price, model, brand, category, quantity,image }) => ({
      key: _id,
      price,
      model,
      brand,
      category,
      quantity,
      image
    })
  );

  const onAddToCart = (item: TTableData) => {
    console.log(item);
    if (products.length === 0) {
      dispatch(addProduct(item));
      message.success("successfully add products");
      navigate('/stores')
    } else {
      setTimeout(()=>{
          message.error("first you payment your product then give new order");
      },2000)
      navigate('/stores')
    }
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Model",
      key: "model",
      dataIndex: "model",
    },
    {
      title: "Brand",
      key: "brand",
      dataIndex: "brand",
    },
    {
      title: "Price",
      key: "price",
      dataIndex: "price",
    },
    {
      title: "Category",
      key: "category",
      dataIndex: "category",
    },
    {
      title: "Quantity",
      key: "quantity",
      dataIndex: "quantity",
    },
    {
      title: "Action",
      key: "x",
      render: (record: TTableData) => (
        <div className="flex gap-2">
          <Button
            type="primary"
            onClick={() => navigate(`/car-detail/${record.key}`)}
          >
            View
          </Button>
          <Button type="default" onClick={() => onAddToCart(record)}>
            Add to Cart
          </Button>
        </div>
      ),
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    paginationConfig,
    _filters,
    _sorter,
    extra
  ) => {
    const { current, pageSize } = paginationConfig;

    if (extra.action === "paginate") {
      setPagination({ current: current!, pageSize: pageSize! });
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="px-5">
      <Input
        placeholder="Search by brand, model, category"
        value={searchTerm}
        onChange={handleSearch}
        style={{
          marginBottom: 16,
          width: "100%",
          maxWidth: 300,
          marginTop: 20,
          padding: 5,
          borderColor: "green",
          borderRadius: "16px",
        }}
      />
      <div className="overflow-x-auto">
        <Table
          loading={isFetching}
          columns={columns}
          dataSource={tableData}
          pagination={false}
          onChange={onChange}
          scroll={{ x: 800 }}
        />
      </div>

      <div className="pagination-container mt-2 mb-2 flex justify-center">
        <Pagination
          current={pagination.current}
          pageSize={pagination.pageSize}
          total={CarData?.meta?.total}
          showSizeChanger={true}
          showQuickJumper={true}
          responsive={false}
          pageSizeOptions={["2", "4", "6", "8", "10"]}
          onChange={(page, pageSize) =>
            setPagination({ current: page, pageSize })
          }
        />
      </div>
    </div>
  );
};

export default Allproduct;
