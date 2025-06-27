import React, { useState } from 'react';
import api from '../../services/api';

const OrderForm = ({ products, onOrderCreated }) => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await api.post('/orders', {
        product_id: selectedProduct,
        quantity: quantity,
      });
      setSuccess('Order placed successfully!');
      setSelectedProduct('');
      setQuantity(1);
      if (onOrderCreated) onOrderCreated(response.data);
    } catch (err) {
      setError('Failed to place order.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Place an Order</h2>
      <form onSubmit={handleSubmit} className="card p-3">
        <div className="mb-3">
          <label htmlFor="product" className="form-label">Product</label>
          <select
            id="product"
            className="form-select"
            value={selectedProduct}
            onChange={e => setSelectedProduct(e.target.value)}
            required
          >
            <option value="">Select a product</option>
            {products && products.map(product => (
              <option key={product.id} value={product.id}>
                {product.name} (Stock: {product.stock})
              </option>
            ))}
          </select>
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
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </form>
    </div>
  );
};

export default OrderForm;