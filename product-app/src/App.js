import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import "./App.css"

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleSaveProduct = (product) => {
    if (currentProduct) {
      setProducts(products.map(p => p.id === product.id ? product : p));
      setCurrentProduct(null);
    } else {
      setProducts([...products, product]);
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const handleEditProduct = (id) => {
    setCurrentProduct(products.find(p => p.id === id));
  };

  return (
    <div>
      <Header />
      <ProductForm product={currentProduct} onSave={handleSaveProduct} />
      <ProductList products={products} onDelete={handleDeleteProduct} onEdit={handleEditProduct} />
    </div>
  );
};

export default App;