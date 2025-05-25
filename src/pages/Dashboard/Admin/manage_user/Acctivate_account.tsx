import { useEffect, useState } from "react";
import {
  Table,
  Button,
  Select,
  Space,
  Typography,
} from "antd";
import {
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { toast } from "sonner";
import {
  useAlluserQuery,
  useBlockedUserMutation,
} from "../../../../redux/features/cars/carsManagement";

const { Option } = Select;
const { Text } = Typography;

const Acctivate_account = () => {
  const { data: Alluser, isFetching } = useAlluserQuery(undefined);
  const [blockedUser] = useBlockedUserMutation();

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [paginatedData, setPaginatedData] = useState([]);

  const total = Alluser?.data?.length || 0;
  const totalPages = Math.ceil(total / limit);

  useEffect(() => {
    if (Alluser?.data) {
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      setPaginatedData(Alluser.data.slice(startIndex, endIndex));
    }
  }, [Alluser, page, limit]);

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handleLimitChange = (value: number) => {
    setLimit(value);
    setPage(1); 
  };

  const handleBlockUser = async (userId: string) => {
    try {
      await blockedUser({ userId });
      toast.success("User successfully blocked", {
        duration: 3000,
        position: "top-center",
        style: {
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "#fff",
        },
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Failed to block user", {
        duration: 3000,
        position: "top-center",
        style: {
          fontSize: "16px",
          backgroundColor: "#F44336",
          color: "#fff",
        },
      });
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (record: { status: string; _id: string }) => (
        <Button
          type="primary"
          danger={record.status === "blocked"}
          disabled={record.status === "blocked"}
          onClick={() => handleBlockUser(record._id)}
        >
          {record.status === "in-progress" ? "Block" : "Already Blocked"}
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        loading={isFetching}
        dataSource={paginatedData}
        rowKey="_id"
        pagination={false}
        scroll={{ x: 800 }}
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
        />

        <Text>
          Page {page} of {totalPages}
        </Text>

        <Button
          icon={<RightOutlined />}
          onClick={handleNext}
          disabled={page === totalPages}
        />

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

export default Acctivate_account;
