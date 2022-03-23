import React from "react";
import {Card, Row, Col, Button, Container} from 'react-bootstrap';
import {} from "@chakra-ui/react";


export default function Produtos() {
    return (
        <section id="product1" className="section-p1">
        <div className="pro-container">
            <div className="pro">
                <img src="https://bakastudio.com.br/wp-content/uploads/2019/05/COCAR-BRANCO-m.png" alt="" className="pro1"/>
                <div className="des">
                <span>Aldeia Fulni-ô</span>
                    <h5 className="produto-titulo">Cocar Amarelo e Preto</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4 className="preco">R$178,00</h4>
                </div>
                <i className='fal fa-shopping-cart cart1'></i>
            </div>
            <div className="pro">
                <img src="http://maimuseu.com.br/site/wp-content/uploads/2019/04/Cocar.png" alt="" className="pro1"/>
                <div className="des">
                    <span>Aldeia Fulni-ô</span>
                    <h5 className="produto-titulo">Cocar Amarelo e Preto</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4 className="preco">R$178,00</h4>
                </div>
                <i className='fal fa-shopping-cart cart1'></i>
            </div>
            <div className="pro">
                <img src="https://bakastudio.com.br/wp-content/uploads/2019/05/COCAR-BRANCO-m.png" alt="" className="pro1"/>
                <div className="des">
                    <span>Aldeia Fulni-ô</span>
                    <h5 className="produto-titulo">Cocar Branco</h5>
                    <div className="star">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                    <h4 className="preco">R$190,00</h4>
                </div>
                <i className='fal fa-shopping-cart cart1'></i>
            </div>
            </div>
            </section>
     );
}