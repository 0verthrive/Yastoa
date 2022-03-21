import {Card, Row, Col, Button} from 'react-bootstrap';

const itensProduto = [
    {
        id: '1',
        title: 'Cocar Branco',
        image: 'https://bakastudio.com.br/wp-content/uploads/2019/05/COCAR-BRANCO-m.png',
        price: '120.00'
    },
    {
        id: '2',
        title: 'Cocar Branco',
        image: 'https://bakastudio.com.br/wp-content/uploads/2019/05/COCAR-BRANCO-m.png',
        price: '120.00'
    },
    {
        id: '3',
        title: 'Cocar Branco',
        image: 'https://bakastudio.com.br/wp-content/uploads/2019/05/COCAR-BRANCO-m.png',
        price: '120.00'
    }
]

export function CardsProd(){
    return (
        <div>
      <h2 className="text-center">Destinos</h2>
    <Row xs={2} md={3} className="g-2 p-5">
    {itensProduto.map((prod, idx) => (
      <Col>
      <Card>
        <Card.Img 
        variant="top"
        src={prod.image}
        width="150px"
        height="300px"
        />
        <Card.Body>
          <Card.Title>{prod.title}</Card.Title>
          <Card.Text>
            <p>{prod.price}</p>
          </Card.Text>
          <Button >
              Comprar
          </Button>
        </Card.Body>
      </Card>
    </Col>
      ))}
</Row>
</div>
    )
}
export function CardProdId(){
  return (
      <div>
    <h2 className="text-center">Destinos</h2>
  <Row xs={2} md={3} className="g-2 p-5">
  {itensProduto.map((prod, idx) => (
    <Col>
    <Card>
      <Card.Img 
      variant="top"
      src={prod.image}
      width="150px"
      height="300px"
      />
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Text>
          <p>{prod.price}</p>
        </Card.Text>
        <Button >
            Comprar
        </Button>
      </Card.Body>
    </Card>
  </Col>
    ))}
</Row>
</div>
  )
}