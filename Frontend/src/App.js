import React from 'react';
import { Layout } from 'antd';
import ProductList from './components/ProductList';
import { ConfigProvider } from 'antd';

const { Header, Content } = Layout;

const App = () => {
  return (
    <ConfigProvider>
      <Layout>
        <Header style={{ color: 'white', fontSize: 24, textAlign: 'center' }}>
          CRUD de produtos
        </Header>
        <Content style={{ padding: '20px' }}>
          <ProductList />
        </Content>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
