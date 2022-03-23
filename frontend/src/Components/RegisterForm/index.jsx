import { Card, Nav, Container, Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { useState } from 'react';


export default function RegisterForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: ""
  });
  const handleBlur = (e) => {
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

  return (
    <Container className="w-50 p-3">
      <Card>
        <Card.Header className="px-5">
          <Nav>
            <Nav.Item>
              <Nav>Cadastrar</Nav>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={(e) => { handleSubmit(e) }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nome</Form.Label>
              <Form.Control name="nome" type="text" placeholder="Nome" onBlur={(e) => handleBlur(e)} />
              <br />
              {camposVazios && form["nome"] === "" ? <span style={{ color: "red" }}>Preencha o campo nome</span> : ""}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Telefone:</Form.Label>
              <Form.Control type="text" placeholder="(11)9.9999-9999" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder="exemplo@gmail.com" onBlur={(e) => handleBlur(e)} />
              <br />
              {camposVazios && form["email"] === "" ? <span style={{ color: "red" }}>Preencha o campo email corretamente</span> : ""}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control name="senha" type="password" placeholder="Exemplo1235@" onBlur={(e) => handleBlur(e)} />
              <br />
              {camposVazios && form["senha"] === "" ? <span style={{ color: "red" }}>Preencha o campo senha</span> : ""}
            </Form.Group>
            <Form.Group className="mb-3">
              <Nav.Link as={Link} to={"/"}>Cancelar</Nav.Link>
            </Form.Group>
            <Button variant="primary" type="submit">
              Registrar-se
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
