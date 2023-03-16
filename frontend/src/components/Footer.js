import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            Copyright &copy;{' '}
            <a className='navjot-bedi' href='https://www.navjotbedi.me'>
              Navjot Bedi
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
