import React, { useState } from 'react';
import api from '../../services/api';

const ProductionForm = ({ onProductionCreated }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [productionDate, setProductionDate] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await api.post('/productions', {
        name,
        quantity,
        production_date: productionDate,
      });
      setSuccess('Production record created successfully!');
      setName('');
      setQuantity(1);
      setProductionDate('');
      if (onProductionCreated) onProductionCreated(response.data);
    } catch (err) {
      setError('Failed to create production record.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Add Production Record</h2>
      <form onSubmit={handleSubmit} className="card p-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Production Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity</label>
          <input
            type="number"
            id="quantity"
            className="form-control"
            min="1"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productionDate" className="form-label">Production Date</label>
          <input
            type="date"
            id="productionDate"
            className="form-control"
            value={productionDate}
            onChange={e => setProductionDate(e.target.value)}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <button type="submit" className="btn btn-success" disabled={loading}>
          {loading ? 'Saving...' : 'Add Production'}
        </button>
      </form>
    </div>
  );
};

export default ProductionForm;