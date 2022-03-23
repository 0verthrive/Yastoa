import {Card, Row, Col, Button, Container} from 'react-bootstrap';


const itensProduto = [
  {
    id: '1',
    title: 'Cocar Branco',
    image: 'https://bakastudio.com.br/wp-content/uploads/2019/05/COCAR-BRANCO-m.png',
    price: '120.00'
  },
  {
    id: '2',
    title: 'Cocar verde',
    image: 'http://maimuseu.com.br/site/wp-content/uploads/2019/04/Cocar.png',
    price: '120.00'
  },
  {
    id: '3',
    title: 'Cocar laranja',
    image: 'https://http2.mlstatic.com/D_NQ_NP_872351-MLB48346663109_112021-O.jpg',
    price: '300.00'
  }
]

export default function CardsProd() {
  return (
      <Row className="col-sm-6">
          <Col>
            <Card>
              <Card.Img
                variant="top"
                width="90px"
                height="90px"
                src="https://bakastudio.com.br/wp-content/uploads/2019/05/COCAR-BRANCO-m.png"
              />
              <Card.Body>
                <Card.Title>Cocar Azul</Card.Title>
                <Card.Text>
                  <p>120.00</p>
                </Card.Text>
                <Button >
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                width="90px"
                height="90px"
                src="http://maimuseu.com.br/site/wp-content/uploads/2019/04/Cocar.png"
              />
              <Card.Body>
                <Card.Title>Cocar ver</Card.Title>
                <Card.Text>
                  <p>202.00</p>
                </Card.Text>
                <Button >
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                width="90px"
                height="90px"
                src="https://bakastudio.com.br/wp-content/uploads/2019/05/COCAR-BRANCO-m.png"
              />
              <Card.Body>
                <Card.Title>Cocar laranja</Card.Title>
                <Card.Text>
                  <p>320.00</p>
                </Card.Text>
                <Button >
                  Comprar
                </Button>
              </Card.Body>
            </Card>
          </Col>
      </Row>
  );
}