import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Select } from 'antd';
import './ProductListPage.css';

const { Option } = Select;

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const columns = [
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <div>
          <Button type="primary" onClick={() => editProduct(record)}>Edit</Button>
          <Button type="danger" onClick={() => deleteProduct(record)}>Delete</Button>
        </div>
      ),
    },
  ];

  const editProduct = (product) => {
    setEditingProduct(product);
    setVisible(true);
  };

  const deleteProduct = (product) => {
    setProducts(products.filter(p => p !== product));
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setVisible(false);
  };

  const onFinish = (values) => {
    if (editingProduct) {
      const updatedProducts = products.map(p => {
        if (p === editingProduct) {
          return { ...p, ...values };
        }
        return p;
      });
      setProducts(updatedProducts);
    } else {
      setProducts([...products, values]);
    }
    setEditingProduct(null);
    setVisible(false);
  };

  return (
    <div className="product-list-page">
      <h1>Product List</h1>
      <Button type="primary" onClick={() => setVisible(true)}>Add Product</Button>
      <Table columns={columns} dataSource={products} />
      <Modal
        title={editingProduct ? 'Edit Product' : 'Add Product'}
        visible={visible}
        onCancel={handleCancel}
        footer={null}
      >
        {/* Pass editProduct and deleteProduct as props */}
        <ProductForm
          editingProduct={editingProduct}
          onFinish={onFinish}
          editProduct={editProduct}
          deleteProduct={deleteProduct}
        />
      </Modal>
    </div>
  );
};

const ProductForm = ({ editingProduct, onFinish, editProduct, deleteProduct }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} onFinish={onFinish} initialValues={editingProduct}>
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
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default ProductListPage;
