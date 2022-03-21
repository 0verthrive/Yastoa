import {Card, Nav, Container, Form, Button} from "react-bootstrap";
import { Link} from 'react-router-dom';

export default function LoginForm(){
return(
   <Container className="w-25 p-3">
    <Card>
  <Card.Header className="px-5">
    <Nav>
      <Nav.Item>
        <Nav>Sing in</Nav>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
  <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Senha</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3">
      <Nav.Link as={Link} to={"/registrar"}>Registre-se aqui</Nav.Link>
  </Form.Group>
  <Button variant="primary" type="submit">
    Entrar
  </Button>
</Form>
  </Card.Body>
  </Card>
  </Container>
)}
