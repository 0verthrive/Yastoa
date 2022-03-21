import {Card, Nav, Container, Form, Button} from "react-bootstrap";
import { Link} from 'react-router-dom';
import {useState} from 'react';


export default function LoginForm(){
    const [form, setForm] = useState({
        email: "",
        senha: ""
    });
    const handleBlur =(e) => {
        let novoValor = form;
        novoValor[e.target.name] = e.target.value;
        setForm({ ...novoValor });
        console.log(novoValor);
    }

    const [camposVazios, setCamposVazios] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

       const camposVazios = Object.values(form).some(obj => obj === "");
       setCamposVazios(camposVazios);
    }

return(
   <Container className="w-25 p-3 py-5">
    <Card>
  <Card.Header className="px-5">
    <Nav>
      <Nav.Item>
        <Nav>Entrar</Nav>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
  <Form onSubmit={(e) => {handleSubmit(e)}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" onBlur={(e) => handleBlur(e)} />
    <br/>
    { camposVazios && form["nome"] === "" ? <span style={{color: "red"}}>Insira seu email</span> : ""}
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Senha</Form.Label>
    <Form.Control type="password" placeholder="Password" name="senha" onBlur={(e) => handleBlur(e)} />
    <br/>
    { camposVazios && form["nome"] === "" ? <span style={{color: "red"}}>Insira sua Senha</span> : ""}
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
