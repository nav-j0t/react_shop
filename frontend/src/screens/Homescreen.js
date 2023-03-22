import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Homescreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get('/api/products');

      setProducts(data);
    };

    fetchproducts();
  }, []);

  return (
    <>
      <h1>Lastest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homescreen;
