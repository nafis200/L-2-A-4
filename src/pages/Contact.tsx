"use client";

import {
  Row,
  Col,
  Typography,
  Space,
  Card,
} from "antd";
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaTelegramPlane,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
} from "react-icons/fa";

const { Title, Text, Paragraph } = Typography;

const Contact = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "4rem 1.5rem",
        background: "linear-gradient(to bottom right, white, #ebf8ff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        bordered={false}
        style={{ width: "100%", maxWidth: 960, background: "transparent" }}
        bodyStyle={{ padding: 0 }}
      >
        <Row gutter={[16, 24]} justify="center">
          <Col span={24}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <Title level={2} style={{ marginBottom: 8 }}>
                Get in Touch With Us
              </Title>
              <Paragraph style={{ color: "#4B5563", fontSize: "16px" }}>
                Have a question, feedback, or just want to say hello? We’re here to help!
              </Paragraph>
            </div>
          </Col>

          <Col span={24}>
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <Space size="middle" align="center">
                <FaMapMarkerAlt size={20} />
                <Text>Dhaka, Bangladesh</Text>
              </Space>

              <Space size="middle" align="center">
                <FaPhoneAlt size={20} />
                <Text>+8801922208141</Text>
              </Space>

              <Space size="middle" align="center">
                <FaWhatsapp size={20} />
                <Text>+8801744136454</Text>
              </Space>

              <Space size="middle" align="center">
                <FaTelegramPlane size={20} />
                <Text>+8801922208141</Text>
              </Space>

              <Space size="middle" align="center">
                <FaEnvelope size={20} />
                <Text>support@mealshop.com</Text>
              </Space>

              <Space size="middle" align="center">
                <FaClock size={20} />
                <Text>Open Daily: 10:00 AM - 10:00 PM</Text>
              </Space>
            </Space>
          </Col>

          <Col span={24}>
            <Space size="large" style={{ marginTop: 32 }}>
              <a
                href="https://www.linkedin.com/in/n-ahamed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: "#0A66C2" }}
              >
                <FaLinkedinIn size={28} />
              </a>
              <a
                href="https://github.com/nafis200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ color: "#171515" }}
              >
                <FaGithub size={28} />
              </a>
            </Space>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Contact;
