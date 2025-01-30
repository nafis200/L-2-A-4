import { Button, Row, Col } from 'antd';
import PHForm from '../../../../components/form/PHForm';
import PHInput from '../../../../components/form/PHInput';
import PHSelect from '../../../../components/form/PHSelect';
import { toast } from 'sonner'; 
import type { FieldValues } from 'react-hook-form';
import carValidationSchema from '../../../../schemas/ValidationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
const CreateCar = () => {
  const onSubmit = (data: FieldValues) => {
    console.log('Submitted Data:', { ...data, inStock: true });

    toast.success('Car added successfully!');
  };

  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '', padding: '2px' }}>
      <PHForm onSubmit={onSubmit}
       resolver={zodResolver(carValidationSchema)}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={12}><PHInput type="text" name="brand" label="Brand" placeholder="Enter brand" /></Col>
          <Col xs={24} lg={12}><PHInput type="text" name="model" label="Model" placeholder="Enter model" /></Col>
          <Col xs={24} lg={12}><PHInput type="number" name="year" label="Year" placeholder="Enter year" /></Col>
          <Col xs={24} lg={12}><PHInput type="number" name="price" label="Price" placeholder="Enter price" /></Col>
          <Col xs={24}><PHSelect 
            name="category"
            label="Category"
            options={[
              { value: 'Sedan', label: 'Sedan' },
              { value: 'SUV', label: 'SUV' },
              { value: 'Truck', label: 'Truck' },
              { value: 'Coupe', label: 'Coupe' },
              { value: 'Convertible', label: 'Convertible' }
            ]}
          /></Col>
          <Col xs={24}><PHInput type="text" name="image" label="Image URL" placeholder="Enter image URL" /></Col>
          <Col xs={24}><PHInput type="text" name="description" label="Description" placeholder="Enter description" /></Col>
          <Col xs={24} lg={12}><PHInput type="number" name="quantity" label="Quantity" placeholder="Enter quantity" /></Col>
        </Row>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Submit</Button>
        </div>
      </PHForm>
    </div>
  );
};

export default CreateCar;
