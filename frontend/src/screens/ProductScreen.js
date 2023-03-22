import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from 'react-bootstrap';
import Rating from '../components/Rating.js';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductScreen = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchproduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchproduct();
  }, []);

  return (
    <>
      <Link className='btn btn-dark my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem className='py-3'>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem className='py-3'>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem className='py-3'>
              Price: ${product.price}
            </ListGroupItem>
            <ListGroupItem className='py-3'>
              Description: {product.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant=''>
            <ListGroupItem>
              <Row>
                <Col>Price: </Col>
                <Col> {product.price}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={product.countInStock == 0}
                >
                  Add to Cart
                </Button>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
