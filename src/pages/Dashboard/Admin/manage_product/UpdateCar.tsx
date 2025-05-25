import { useState } from "react";
import {
  useGetAllCarsQuery,
  useUpdateCarMutation,
} from "../../../../redux/features/cars/carsManagement";
import {
  Button,
  Table,
  Modal,
  Form,
  InputNumber,
  type TableProps,
} from "antd";
import { toast } from "sonner";
import type { TTableData } from "../../../Allproduct";
import '../../dashboard.css'

const UpdateCar = () => {
  const [selectedCar, setSelectedCar] = useState<TTableData | null>(null);
  const [form] = Form.useForm();
  const [updateCar] = useUpdateCarMutation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const { data: CarData, isFetching, refetch } = useGetAllCarsQuery([
    { name: "page", value: pagination.current.toString() },
    { name: "limit", value: pagination.pageSize.toString() },
  ]);

  const tableData = CarData?.data?.map(
    ({ _id, price, model, brand, category, quantity }) => ({
      key: _id,
      price,
      model,
      brand,
      category,
      quantity,
    })
  );

  const handleUpdateClick = (record: TTableData) => {
    setSelectedCar(record);
    form.setFieldsValue({
      price: record.price,
      quantity: record.quantity,
    });
    setIsModalVisible(true);
  };

  const handleUpdateSubmit = async (values: {
    price: number;
    quantity: number;
  }) => {
    if (selectedCar) {
      try {
        await updateCar({
          data: values,
          order_id: selectedCar.key, 
        }).unwrap();

        toast.success("Car updated successfully!");
        setIsModalVisible(false);
        setSelectedCar(null);
        refetch();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("Update failed");
      }
    }
  };

  const columns = [
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      key: "action",
      render: (record: TTableData) => (
        <Button onClick={() => handleUpdateClick(record)}>Update</Button>
      ),
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (paginationConfig) => {
    const { current, pageSize } = paginationConfig;
    setPagination({
      current: current ?? 1,
      pageSize: pageSize ?? 10,
    });
  };

  return (
    <div className="px-5">
      <Table
         className="custom-pagination"
        loading={isFetching}
        columns={columns}
        dataSource={tableData}
        pagination={{
          current: pagination.current,
          pageSize: pagination.pageSize,
          total: CarData?.meta?.total,
          showSizeChanger: true,
          pageSizeOptions: ["2", "4", "6", "8", "10"],
        }}
        onChange={onChange}
        scroll={{ x: 800 }}
        rowKey="key"
      />

      <Modal
        title="Update Car"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} layout="vertical" onFinish={handleUpdateSubmit}>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Please input the price!" }]}
          >
            <InputNumber style={{ width: "100%" }} min={1} />
          </Form.Item>
          <Form.Item
            label="Quantity"
            name="quantity"
            rules={[{ required: true, message: "Please input the quantity!" }]}
          >
            <InputNumber style={{ width: "100%" }} min={1} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UpdateCar;
