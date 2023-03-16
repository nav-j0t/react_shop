import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Homescreen from './screens/Homescreen';

const App = () => {
  return (
    <div>
      <Header />
      <main className='py-4'>
        <Container>
          <Homescreen />
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default App;
