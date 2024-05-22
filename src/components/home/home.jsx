import React from 'react';
import { Carousel, Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

import TecnologiaAd from '../../assets/tecnología-ad.webp';
import OfertasAd from '../../assets/ofertas-ad.webp';
import EntregaSeguraAd from '../../assets/entrega-segura-ad.webp';

import Stanley from '../../assets/stanley-card.jpg';
import Samsung from '../../assets/samsung-card.jpg';
import TheNorthFace from '../../assets/thenorthface-card.jpg';

import Chromecast4 from '../../assets/chromecast4.jpg';
import KitStanley from '../../assets/kit-stanley.webp';
import Airpods from '../../assets/airpods.webp';
import Notebook from '../../assets/laptop-dell.jpg';

const Home = () => {
  return (
    <Container style={{ marginTop:'0px' }}>
      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={TecnologiaAd}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={OfertasAd}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={EntregaSeguraAd}
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
            <Card.Body>Suscríbete a nuestro Newsletter! Enterate primero de nuestras ofertas!</Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Three Square Cards */}
      <Row className="mt-2">
      <Col>
          <Card>
            <Card.Img src={Samsung} alt="Third slide" />
            <Card.ImgOverlay className="d-flex justify-content-start align-items-end p-3">
              <Button variant="primary" className="mb-3 ml-3">Ver productos</Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src={Stanley} alt="Third slide" />
            <Card.ImgOverlay className="d-flex justify-content-start align-items-end p-3">
              <Button variant="primary" className="mb-3 ml-3">Ver productos</Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src={TheNorthFace} alt="Third slide" />
            <Card.ImgOverlay className="d-flex justify-content-start align-items-end p-3">
              <Button variant="primary" className="mb-3 ml-3">Ver productos</Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>

      {/* Tendencias Section */}
      <h2 className="mt-4">Tendencias</h2>
      <Row className="mt-3 justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Chromecast4} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={KitStanley} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Airpods} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Notebook} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Los Mas Vendidos Section */}
      <h2 className="mt-4">Los Más Vendidos</h2>
      <Row className="mt-3 justify-content-center">
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3} xl={2} className="d-flex justify-content-center">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Three Square Cards */}
      <Row className="mt-4">
      <Col>
          <Card>
            <Card.Img src={Samsung} alt="Third slide" />
            <Card.ImgOverlay className="d-flex justify-content-start align-items-end p-3">
              <Button variant="primary" className="mb-3 ml-3">Ver productos</Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src={Stanley} alt="Third slide" />
            <Card.ImgOverlay className="d-flex justify-content-start align-items-end p-3">
              <Button variant="primary" className="mb-3 ml-3">Ver productos</Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img src={TheNorthFace} alt="Third slide" />
            <Card.ImgOverlay className="d-flex justify-content-start align-items-end p-3">
              <Button variant="primary" className="mb-3 ml-3">Ver productos</Button>
            </Card.ImgOverlay>
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