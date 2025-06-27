import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const InventoryList = () => {
  const [inventories, setInventories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/inventories')
      .then(response => {
        setInventories(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching inventory:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '200px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading inventory...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Inventory List</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {inventories.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.product ? item.product.name : 'N/A'}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryList;