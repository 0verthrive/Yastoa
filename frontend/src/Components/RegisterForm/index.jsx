import {Card, Nav, Container, Form, Button} from "react-bootstrap";
import { Link} from 'react-router-dom';

function Cadastrar(){
    const email = document.getElementById('#email');
    const senha = document.getElementById('#senha');
    const nome = document.getElementById('#nome')
    if(email == null || senha == null || nome == null){
        return alert("Por favor preencha todos os campos");
    }
    return alert('Cadastro realizado com sucesso');
}

export default function RegisterForm(){
    
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
    <Form.Label>Nome</Form.Label>
    <Form.Control id="nome" type="text" placeholder="Nome e sobrenome" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Telefone:</Form.Label>
    <Form.Control type="text" placeholder="(11)9.9999-9999" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control id="email" type="email" placeholder="exemplo@gmail.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Senha</Form.Label>
    <Form.Control id="senha" type="password" placeholder="Exemplo1235@" />
  </Form.Group>
  <Form.Group className="mb-3">
      <Nav.Link as={Link} to={"/"}>Cancelar</Nav.Link>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={Cadastrar}>
    Cadastrar
  </Button>
</Form>
  </Card.Body>
  </Card>
  </Container>
)}
