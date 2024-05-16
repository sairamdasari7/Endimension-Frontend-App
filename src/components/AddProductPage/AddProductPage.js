import React from 'react';
import { Button, Form, Input, Select } from 'antd';
import './AddProductPage.css';

const { Option } = Select;

const AddProductPage = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div className="add-product-page">
      <h1>Add Product</h1>
      <ProductForm onFinish={onFinish} />
    </div>
  );
};

const ProductForm = ({ onFinish }) => {
  return (
    <Form onFinish={onFinish} className="add-product-form">
      <Form.Item name="category" label="Category">
        <Select>
          <Option value="Electronics">Electronics</Option>
          <Option value="Clothing">Clothing</Option>
          <Option value="Books">Books</Option>
        </Select>
      </Form.Item>
      <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter product name' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter product description' }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="price" label="Price" rules={[{ required: true, message: 'Please enter product price' }]}>
        <Input type="number" />
      </Form.Item>
      <Form.Item>
      <Button style={{ backgroundColor: '#ff9999' }} type="primary" htmlType="submit">Submit</Button>

      </Form.Item>
    </Form>
  );
};

export default AddProductPage;