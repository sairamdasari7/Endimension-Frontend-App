import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductListPage from './components/ProductListPage/ProductListPage';
import AddProductPage from './components/AddProductPage/AddProductPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;