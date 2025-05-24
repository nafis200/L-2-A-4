import { Card, Row, Col } from "antd";
import { StarFilled } from "@ant-design/icons";

const reviews = [
  {
    id: 1,
    quote: "Exceptional experience! The staff was friendly and the cars were top quality.",
    name: "Alice M.",
    location: "Boston",
  },
  {
    id: 2,
    quote: "Found the perfect family car with ease. Highly recommend this dealership!",
    name: "David K.",
    location: "Seattle",
  },
  {
    id: 3,
    quote: "Great prices and fast service. I’m really satisfied with my purchase.",
    name: "Maria S.",
    location: "Denver",
  },
  {
    id: 4,
    quote: "The customer support team helped me through every step of buying my car.",
    name: "Chris W.",
    location: "Atlanta",
  },
  {
    id: 5,
    quote: "Wide selection of cars and transparent pricing. Loved the buying experience!",
    name: "Jessica R.",
    location: "Miami",
  },
  {
    id: 6,
    quote: "The process was quick and smooth. Very happy with the quality and service.",
    name: "Kevin L.",
    location: "Portland",
  },
  {
    id: 7,
    quote: "Highly professional and attentive team. My new car runs perfectly!",
    name: "Nina T.",
    location: "Houston",
  },
  {
    id: 8,
    quote: "I’m so glad I chose this dealership. Amazing cars and excellent customer care.",
    name: "Oliver J.",
    location: "Philadelphia",
  },
];

const Praising = () => {
  return (
    <div style={{ padding: "16px", textAlign: "center" }}>
      <div style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>Our Customer Review</h2>
        <p style={{ fontSize: "16px", color: "#555" }}>
          Hear from our satisfied customers who found their perfect cars and exceptional service with us.
        </p>
      </div>

      <Row
        gutter={[16, 16]}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        {reviews.map(({ id, quote, name, location }) => (
          <Col key={id}>
            <Card
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                textAlign: "left",
                padding: "16px",
              }}
            >
              <p style={{ color: "#555", fontStyle: "italic" }}>"{quote}"</p>
              <div style={{ marginTop: "8px", color: "#fadb14" }}>
                {[...Array(5)].map((_, i) => (
                  <StarFilled key={i} style={{ marginRight: 4 }} />
                ))}
              </div>
              <p style={{ fontWeight: "bold", marginTop: "12px" }}>
                - {name}, <span style={{ color: "#4CAF50" }}>{location}</span>
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Praising;
