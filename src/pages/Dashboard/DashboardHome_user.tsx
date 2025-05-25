"use client";

import { useEffect, useState } from "react";
import { DollarSign, Users } from "lucide-react";
import { Card, Col, Row, Spin, Typography } from "antd";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

import {
  useAlluserQuery,
  useOrderRevenueQuery,
} from "../../redux/features/cars/carsManagement";

const { Title } = Typography;

const COLORS = ["#4f46e5", "#10b981"];

const DashboardHome_user = () => {
  const { data: AlluserData, isFetching: loadingUsers } =
    useAlluserQuery(undefined);
  const { data: RevenueData, isFetching: loadingRevenue } =
    useOrderRevenueQuery(undefined);

  const totalUsers = AlluserData?.data?.length || 0;
  const totalRevenue = RevenueData?.data?.totalRevenue || 0;

  const data = [
    { name: "Amount", value: totalRevenue },
    { name: "Users", value: totalUsers },
  ];

  const [radius, setRadius] = useState({ inner: 70, outer: 100 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius({ inner: 40, outer: 60 });
      } else if (window.innerWidth < 1024) {
        setRadius({ inner: 60, outer: 80 });
      } else {
        setRadius({ inner: 70, outer: 100 });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Title level={2} style={{ textAlign: "center", marginBottom: 40 }}>
        Dashboard Summary
      </Title>

      <Row gutter={[24, 24]} justify="center" style={{ marginBottom: 40 }}>
        <Col xs={24} sm={12} md={10} lg={8} xl={6}>
          <Card
            bordered={false}
            style={{
              borderRadius: 10,
              boxShadow: "0 4px 12px rgb(0 0 0 / 0.1)",
            }}
          >
            {loadingUsers ? (
              <Spin size="large" />
            ) : (
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="text-sm text-gray-500">Total Users</p>
                  <h2 className="text-3xl font-bold text-blue-600">
                    {totalUsers}
                  </h2>
                </div>
                <Users className="w-12 h-12 text-blue-500" />
              </div>
            )}
          </Card>
        </Col>

        <Col xs={24} sm={12} md={10} lg={8} xl={6}>
          <Card
            bordered={false}
            style={{
              borderRadius: 10,
              boxShadow: "0 4px 12px rgb(0 0 0 / 0.1)",
            }}
          >
            {loadingRevenue ? (
              <Spin size="large" />
            ) : (
              <div className="flex items-center justify-between p-4">
                <div>
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <h2 className="text-3xl font-bold text-green-600">
                    ${totalRevenue.toFixed(2)}
                  </h2>
                </div>
                <DollarSign className="w-12 h-12 text-green-500" />
              </div>
            )}
          </Card>
        </Col>
      </Row>

      <Card
        bordered={false}
        style={{
          borderRadius: 10,
          boxShadow: "0 4px 12px rgb(0 0 0 / 0.1)",
          padding: 24,
        }}
      >
        <Title level={4} style={{ marginBottom: 20 }}>
          Amount vs Users
        </Title>
        <div className="w-full max-w-[500px] mx-auto h-auto">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={radius.inner}
                outerRadius={radius.outer}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => value.toLocaleString()} />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default DashboardHome_user;
