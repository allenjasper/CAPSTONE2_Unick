import React from 'react';
import OrderList from '../../components/Order/OrderList';

const OrdersPage = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Order Management</h1>
      <OrderList />
    </div>
  );
};

export default OrdersPage;