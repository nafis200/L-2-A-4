"use client";


import { Collapse, Typography, Card } from "antd";

const { Panel } = Collapse;
const { Title } = Typography;

const faqs = [
  {
    question: "What types of cars do you sell?",
    answer:
      "We offer a wide variety of vehicles including sedans, SUVs, trucks, electric cars, and certified pre-owned vehicles from top brands like Toyota, Honda, BMW, Tesla, and more.",
  },
  {
    question: "Can I book a test drive online?",
    answer:
      "Yes! You can easily book a test drive online by selecting your preferred car and scheduling a date and time. One of our representatives will confirm your appointment.",
  },
  {
    question: "Do you offer car financing?",
    answer:
      "Absolutely. We partner with several banks and financial institutions to provide you with flexible financing options tailored to your needs and credit profile.",
  },
  {
    question: "What documents are required to buy a car?",
    answer:
      "You’ll need a valid driving license, national ID/passport, recent utility bill (for address proof), and income documents if applying for financing.",
  },
  {
    question: "Do you offer warranty and after-sales service?",
    answer:
      "Yes, every vehicle comes with a limited warranty and we provide full after-sales support, including maintenance, servicing, and spare parts.",
  },
];

const CarShopFAQ = () => {
  return (
    <div
      style={{
        padding: "4rem 1.5rem",
        background: "",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        style={{ width: "100%", maxWidth: 1800 }}
        bodyStyle={{ padding: "2rem" }}
      >
        <Title level={2} style={{ textAlign: "center", marginBottom: "2rem" }}>
          Frequently Asked Questions
        </Title>

        <Collapse accordion>
          {faqs.map((faq, index) => (
            <Panel header={faq.question} key={index}>
              <p>{faq.answer}</p>
            </Panel>
          ))}
        </Collapse>
      </Card>
    </div>
  );
};

export default CarShopFAQ;
