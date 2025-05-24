import React from "react";
import { Select, InputNumber, Row, Col, Button } from "antd";

type FilterValue = string | number;

type FilterPanelProps = {
  filters: Record<string, FilterValue>;
  onFilterChange: (name: string, value: FilterValue) => void;
};

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFilterChange }) => {
  const handleClearFilters = () => {
    onFilterChange("brand", "");
    onFilterChange("model", "");
    onFilterChange("category", "");
    onFilterChange("price", 0);
  };

  return (
    <div className="mb-6 mt-10">
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={24} md={6}>
          <Select
            placeholder="Select Brand"
            value={filters.brand || undefined}
            onChange={(value) => onFilterChange("brand", value)}
            allowClear
            style={{ width: "100%" }}
            options={[
              { label: "Ram", value: "ram" },
              { label: "Nisan", value: "Nisan" },
              { label: "Nissan", value: "Nissan" },
              { label: "Audi", value: "Audi" },
              { label: "Mercedes-Benz", value: "Mercedes-Benz" },
           
            ]}
          />
        </Col>

        <Col xs={24} sm={24} md={6}>
          <Select
            placeholder="Select Model"
            value={filters.model || undefined}
            onChange={(value) => onFilterChange("model", value)}
            allowClear
            style={{ width: "100%" }}
            options={[
              { label: "1500x", value: "1500x" },
              { label: "1500", value: "1500" },
              { label: "Rogue", value: "Rogue" },
              { label: "A6", value: "A6" },
              { label: "SL-Class", value: "SL-Class" },
            ]}
          />
        </Col>

        <Col xs={24} sm={24} md={6}>
          <Select
            placeholder="Select Category"
            value={filters.category || undefined}
            onChange={(value) => onFilterChange("category", value)}
            allowClear
            style={{ width: "100%" }}
            options={[
              { label: "Truck", value: "Truck" },
              { label: "Sedan", value: "Sedan" },
              { label: "SUV", value: "SUV" },
            ]}
          />
        </Col>

        <Col xs={24} sm={24} md={24}>
          <div>
            <label className="block mb-1 font-semibold">Max Price($)</label>
            <InputNumber
              min={0}
              max={1000000}
              step={1000}
              style={{ width: "100%" }}
              value={filters.price as number}
              onChange={(value) => onFilterChange("price", value ?? 0)}
            />
          </div>
        </Col>
      </Row>

      <div className="text-right mt-4">
        <Button onClick={handleClearFilters}>Clear Filters</Button>
      </div>
    </div>
  );
};

export default FilterPanel;
