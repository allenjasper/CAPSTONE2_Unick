import React from 'react';
import ProductionForm from '../../components/Production/ProductionForm';

const ProductionPage = () => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Production Management</h1>
      <ProductionForm />
    </div>
  );
};

export default ProductionPage;