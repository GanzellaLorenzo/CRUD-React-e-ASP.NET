import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Modal, Form, message } from 'antd';
import axios from 'axios';

const API_URL = 'http://localhost:5052/api/Produtos';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); 
  const [editingProduct, setEditingProduct] = useState(null);
  const [form] = Form.useForm();

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setProducts(response.data);
    } catch (error) {
      message.error('Erro ao carregar os produtos.');
    } finally {
      setLoading(false);
    }
  };

  const showModal = (product = null) => {
    setEditingProduct(product);
    form.resetFields();
    if (product) {
      form.setFieldsValue(product);
    }
    setModalVisible(true);
  };

  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      if (editingProduct) {
        await axios.put(`${API_URL}/${editingProduct.id}`, { id: editingProduct.id, ...values });
        message.success('Produto atualizado com sucesso!');
      } else {
        await axios.post(API_URL, values);
        message.success('Produto adicionado com sucesso!');
      }
      fetchProducts();
      setModalVisible(false);
    } catch (error) {
      message.error('Erro ao salvar o produto.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${id}`);
      message.success('Produto excluído com sucesso!');
      fetchProducts();
    } catch (error) {
      message.error('Erro ao excluir o produto.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Preço de Custo',
      dataIndex: 'precoCusto',
      key: 'precoCusto',
    },
    {
      title: 'Preço de Venda',
      dataIndex: 'precoVenda',
      key: 'precoVenda',
    },
    {
      title: 'Quantidade',
      dataIndex: 'quantidade',
      key: 'quantidade',
    },
    {
      title: 'Ações',
      key: 'actions',
      render: (text, record) => (
        <>
          <Button onClick={() => showModal(record)} style={{ marginRight: 8 }}>
            Editar
          </Button>
          <Button onClick={() => handleDelete(record.id)} danger>
            Excluir
          </Button>
        </>
      ),
    },
  ];

  return (
    <div>
      <Button
        type="primary"
        onClick={() => showModal()}
        style={{ marginBottom: 16 }}
      >
        Adicionar Produto
      </Button>
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 5 }}
      />
      <Modal
        title={editingProduct ? 'Editar Produto' : 'Adicionar Produto'}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <Form
          form={form}
          onFinish={handleFormSubmit}
          initialValues={{ nome: '', precoCusto: '', precoVenda: '', quantidade: '' }}
        >
          <Form.Item
            label="Nome"
            name="nome"
            rules={[{ required: true, message: 'Por favor insira o nome do produto' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Preço de Custo"
            name="precoCusto"
            rules={[{ required: true, message: 'Por favor insira o preço de custo' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Preço de Venda"
            name="precoVenda"
            rules={[{ required: true, message: 'Por favor insira o preço de venda' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Quantidade"
            name="quantidade"
            rules={[{ required: true, message: 'Por favor insira a quantidade' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              {editingProduct ? 'Atualizar' : 'Adicionar'}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ProductList;
