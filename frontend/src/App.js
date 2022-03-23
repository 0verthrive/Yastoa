import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./View/Home";
import Login from "./View/Login/index";
import Produtos from "./View/Produtos/Produtos/index"
import Registrar from "./View/Registrar/index";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Blog from "./View/Blog"
import Contatos from "./View/Contatos";

import "./Assets/site.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import SobreNos from "./View/SobreNos";


function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
      <Route element={<Home/>} path="/"></Route>         
      <Route element={<Produtos/>} path="/Produtos"></Route> 
      <Route element={<Login/>} path="/Login"></Route>
      <Route element={<Registrar/>} path="/Registrar"></Route>
      <Route element={<Blog/>} path="/Blog"></Route>
      <Route element={<Contatos/>} path="/Contatos"></Route>
      <Route element={<SobreNos/>} path="/SobreNos"></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;