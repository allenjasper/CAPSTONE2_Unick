import React from 'react';
import InventoryList from '../../components/Inventory/InventoryList';
import OrderList from '../../components/Order/OrderList';
import ProductionForm from '../../components/Production/ProductionForm';

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Admin Dashboard</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Inventory</h4>
              <InventoryList />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Orders</h4>
              <OrderList />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">Add Production</h4>
              <ProductionForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;