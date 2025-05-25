import { useState, useEffect } from "react";
import { Table, Button, Select, Space, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useAllsurjopayQuery } from "../../../../redux/features/cars/carsManagement";

const { Option } = Select;
const { Text } = Typography;

const All_order = () => {
  const { data: CarData, isFetching } = useAllsurjopayQuery(undefined);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    if (CarData?.data) {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      setPaginatedData(CarData.data.slice(startIndex, endIndex));
    }
  }, [CarData, page, limit]);

  const total = CarData?.data?.length || 0;
  const totalPages = Math.ceil(total / limit);

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handleLimitChange = (value: number) => {
    setLimit(value);
    setPage(1); // Reset to page 1 when limit changes
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone Number", dataIndex: "phone_number", key: "phone_number" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Quantity", dataIndex: "quantity", key: "quantity" },
    { title: "Total Price", dataIndex: "totalPrice", key: "totalPrice" },
    { title: "Status", dataIndex: "status", key: "status" },
    {
      title: "Bank Status",
      dataIndex: ["transaction", "bank_status"],
      key: "bank_status",
    },
    {
      title: "Transaction Date",
      dataIndex: ["transaction", "date_time"],
      key: "date_time",
    },
    {
      title: "Payment Method",
      dataIndex: ["transaction", "method"],
      key: "method",
    },
    {
      title: "SP Code",
      dataIndex: ["transaction", "sp_code"],
      key: "sp_code",
    },
    {
      title: "SP Message",
      dataIndex: ["transaction", "sp_message"],
      key: "sp_message",
    },
  ];

  return (
    <div style={{ overflowX: "auto" }}>
      <Table
        columns={columns}
        dataSource={paginatedData}
        loading={isFetching}
        rowKey="_id"
        pagination={false}
        scroll={{ x: true }}
      />

      <Space
        direction="horizontal"
        size="middle"
        style={{
          marginTop: 24,
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          display: "flex",
        }}
      >
        <Button
          icon={<LeftOutlined />}
          onClick={handlePrevious}
          disabled={page === 1}
        ></Button>

        <Text>
          Page {page} of {totalPages}
        </Text>

        <Button
          icon={<RightOutlined />}
          onClick={handleNext}
          disabled={page === totalPages}
        ></Button>

        <Select
          value={limit}
          onChange={handleLimitChange}
          style={{ width: 120 }}
          size="middle"
        >
          <Option value={2}>2 / page</Option>
          <Option value={4}>4 / page</Option>
          <Option value={6}>6 / page</Option>
          <Option value={8}>8 / page</Option>
          <Option value={10}>10 / page</Option>
        </Select>
      </Space>
    </div>
  );
};

export default All_order;
