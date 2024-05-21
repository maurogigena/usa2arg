import React from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="url_de_tu_imagen1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="url_de_tu_imagen2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="url_de_tu_imagen3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Horizontal Card with Columns */}
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>Comprá en el exterior de modo fácil, rápido y seguro.</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>Sin trámites en la aduana. ¡Hacemos todo por vos!</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>Pagá el total de tu compra de la forma que prefieras.</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>Ayuda y asesoramiento en nuestro Centro de ayuda en línea.</Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>Suscríbete a nuestro newsletter para enterarte primero de nuestras ofertas!</Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Three Square Cards */}
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <Button variant="primary">Ver productos</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Button variant="primary">Ver productos</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Button variant="primary">Ver productos</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Tendencias Section */}
      <h2 className="mt-4">Tendencias</h2>
      <Row className="mt-3">
        <Col>
          <Card>
            <Card.Img variant="top" src="url_de_la_imagen_producto_tendencia_1.jpg" />
            <Card.Body>
              <Card.Title>Producto 1</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="url_de_la_imagen_producto_tendencia_2.jpg" />
            <Card.Body>
              <Card.Title>Producto 2</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="url_de_la_imagen_producto_tendencia_3.jpg" />
            <Card.Body>
              <Card.Title>Producto 3</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="url_de_la_imagen_producto_tendencia_4.jpg" />
            <Card.Body>
              <Card.Title>Producto 4</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="url_de_la_imagen_producto_tendencia_5.jpg" />
            <Card.Body>
              <Card.Title>Producto 5</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Los Más Vendidos Section */}
      <h2 className="mt-4">Los más vendidos</h2>
      <Row className="mt-3">
        <Col>
          <Card>
            <Card.Img variant="top" src="url_de_la_imagen_producto_vendido_1.jpg" />
            <Card.Body>
              <Card.Title>Producto 1</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="url_de_la_imagen_producto_vendido_2.jpg" />
            <Card.Body>
              <Card.Title>Producto 2</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="url_de_la_imagen_producto_vendido_3.jpg" />
            <Card.Body>
              <Card.Title>Producto 3</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="url_de_la_imagen_producto_vendido_4.jpg" />
            <Card.Body>
              <Card.Title>Producto 4</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="url_de_la_imagen_producto_vendido_5.jpg" />
            <Card.Body>
              <Card.Title>Producto 5</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="url_de_la_imagen_producto_vendido_6.jpg" />
            <Card.Body>
              <Card.Title>Producto 6</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

       {/* Marcas Más Buscadas Section */}
       <h2 className="text-center mt-4">Marcas más buscadas</h2>
      <Row className="mt-3 justify-content-md-center">
        <Col xs={1}>
          <img src="logo1.jpg" alt="Marca 1" className="img-fluid" />
        </Col>
        <Col xs={1}>
          <img src="logo2.jpg" alt="Marca 2" className="img-fluid" />
        </Col>
        <Col xs={1}>
          <img src="logo3.jpg" alt="Marca 3" className="img-fluid" />
        </Col>
        <Col xs={1}>
          <img src="logo4.jpg" alt="Marca 4" className="img-fluid" />
        </Col>
        <Col xs={1}>
          <img src="logo5.jpg" alt="Marca 5" className="img-fluid" />
        </Col>
        <Col xs={1}>
          <img src="logo6.jpg" alt="Marca 6" className="img-fluid" />
        </Col>
        <Col xs={1}>
          <img src="logo7.jpg" alt="Marca 7" className="img-fluid" />
        </Col>
        <Col xs={1}>
          <img src="logo8.jpg" alt="Marca 8" className="img-fluid" />
        </Col>
        <Col xs={1}>
          <img src="logo9.jpg" alt="Marca 9" className="img-fluid" />
        </Col>
        <Col xs={1}>
          <img src="logo10.jpg" alt="Marca 10" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;