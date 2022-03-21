import React from "react";
import {Container, Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "../View/Home";
import Login from "../View/Login/index";
import Produtos from "../View/Produtos/Produtos/index";
import Registrar from "../View/Registrar";

export default function Menu() {

    return (
<BrowserRouter>
<Navbar bg="light" expand="lg">
    <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <div   className="justify-content-end">
    <Navbar.Toggle aria-controls="navbarScroll" />
    
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href={"/"}>Home</Nav.Link>
        <Nav.Link href="/produtos">Produtos</Nav.Link>
        <Nav.Link>Contatos</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </div>
  </Container>
</Navbar>
<Routes>
        <Route element={<Home/>} path="/"></Route>         
        <Route element={<Produtos/>} path="/produtos"></Route> 
        <Route element={<Login/>} path="/login"></Route>
        <Route element={<Registrar/>} path="/registrar"></Route>                      
</Routes>
</BrowserRouter>
    );
}