import React from 'react';
import { Container, Row, Col, Image, Form, Button, Card } from 'react-bootstrap';
import Brand from '../../assets/brand-dark.png'
import Visa from '../../assets/visa.png'
import Master from '../../assets/mastercard.png'
import Amex from '../../assets/amex.png'
import Paypal from '../../assets/paypal.png'
import './footer.css';

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-3 pb-3">
      <Container>
        <Row>
          <Col md={6}>
            <Row>
              <Col xs={12}>
                <Image src={Brand} alt="Logo de la marca" style={{ maxWidth:'75%' }} fluid />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs={12}>
                <a className='links-redes' href="https://www.instagram.com"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"><path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path></svg> Instagram</a><br />
                <a className='links-redes' href="https://www.facebook.com">Meta</a><br />
                <a className='links-redes' href="https://www.twitter.com">X (Twitter)</a><br />
                <a className='links-redes' href="https://www.youtube.com">YouTube</a><br />
                <a className='links-redes' href="/productos">Todos los productos</a><br />
                <a className='links-redes' href="/hot-week">HOT WEEK!</a>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row>
              <Col xs={12}>
                <h5>Métodos de pago:</h5>
                <div>
                  <Image src={Visa} alt="Visa" className="mx-1" style={{ maxWidth: '10%' }} fluid />
                  <Image src={Master} alt="MasterCard" className="mx-1" style={{ maxWidth: '10%' }} fluid />
                  <Image src={Amex} alt="American Express" className="mx-1" style={{ maxWidth: '12%' }} fluid />
                  <Image src={Paypal} alt="PayPal" className="mx-1" style={{ maxWidth: '12%' }} fluid />
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs={12}>
                <h5>Suscríbete a nuestro newsletter</h5>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="¡Ingresa tu email!" />
                  </Form.Group>
                  <Button className='button-newsletter' variant="primary" type="submit">
                    Recibír ofertas
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
        <Card.Text style={{ display:'flex', justifyContent:'center', fontSize:'xs', color:'grey' }}>© 2024 - USA2ARG - Todos los derechos reservados - Todas las marcas son propiedad de sus respectivos dueños</Card.Text>
      </Container>
    </footer>
  );
};

export default Footer;