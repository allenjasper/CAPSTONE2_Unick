import React from 'react';
import InventoryList from '../../components/Inventory/InventoryList';

const InventoryPage = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Inventory Management</h1>
      <InventoryList />
    </div>
  );
};

export default InventoryPage;