import React from "react";
import Carousel from 'react-bootstrap/Carousel'


export default function Home() {
    return (
  
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./img/bannerp.jpg"
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./img/banner2.png"
                        alt=""
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./img/Bannerp3.png"
                        alt=""
                    />

                </Carousel.Item>
            </Carousel>
            <section id="feature" class="section-p1">
                <div class="fe-box">
                    <img src="img/features/f1.png" alt=""/>
                        <h6>Envio Rápido</h6>
                </div>
                <div class="fe-box">
                    <img src="img/features/f2.png" alt=""/>
                        <h6>Compra em menor tempo</h6>
                </div>
                <div class="fe-box">
                    <img src="img/features/f3.png" alt=""/>
                        <h6>Compra segura</h6>
                </div>
                <div class="fe-box">
                    <img src="img/features/f4.png" alt=""/>
                        <h6>Promoções</h6>
                </div>
            </section>
            <section id="product1" class="section-p1">
                <h2>Produtos em Destaque</h2>
                <br/>
                    <p>Nova Coleção</p>
                    <div class="pro-container">
                        <div class="pro">
                            <img src="./img/products/Cocar-1.png" alt="" class="pro1"/>
                            <div class="des">
                                <span>Aldeia Fulni-ô</span>
                                <h5 class="produto-titulo">Cocar "Arara"</h5>
                                <div class="star">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h4 class="preco">R$130,00</h4>
                            </div>
                            <i class='fal fa-shopping-cart cart1'></i>
                        </div>
                        <div class="pro">
                            <img src="./img/products/Cocar-2.png" alt="" class="pro1"/>
                                <div class="des">
                                    <span>Aldeia Fulni-ô</span>
                                    <h5 class="produto-titulo">Cocar Azul</h5>
                                    <div class="star">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <h4 class="preco">R$180,00</h4>
                                </div>
                                <i class='fal fa-shopping-cart cart1'></i>
                        </div>
                        <div class="pro">
                            <img src="./img/products/Abanilho.png" alt="" class="pro1"/>
                                <div class="des">
                                    <span>Aldeia Fulni-ô</span>
                                    <h5 class="produto-titulo">Abanilho Texturizado</h5>
                                    <div class="star">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <h4 class="preco">R$90,00</h4>
                                </div>
                                <i class='fal fa-shopping-cart cart1'></i>
                        </div>
                        <div class="pro">
                            <img src="./img/products/Prendedor.png" alt="" class="pro1"/>
                                <div class="des">
                                    <span>Aldeia Fulni-ô</span>
                                    <h5>Predendor de Cabelo</h5>
                                    <div class="star">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <h4 class="preco">R$30,00</h4>
                                </div>
                                <i class='fal fa-shopping-cart cart1'></i>
                        </div>
                        <div class="pro">
                            <img src="./img/products/Cocar-3.png" alt="" class="pro1"/>
                                <div class="des">
                                    <span>Aldeia Fulni-ô</span>
                                    <h5 class="produto-titulo"> Branco e Azul</h5>
                                    <div class="star">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <h4 class="preco">R$160,00</h4>
                                </div>
                                <i class="fal fa-shopping-cart cart1"></i>
                        </div>
                        <div class="pro">
                            <img src="./img/products/Colar.png" alt="" class="pro1"/>
                                <div class="des">
                                    <span>Aldeia Fulni-ô</span>
                                    <h5 class="produto-titulo">Colar</h5>
                                    <div class="star">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <h4 class="preco">R$36,00</h4>
                                </div>
                                <i class='fal fa-shopping-cart cart1'></i>
                        </div>
                        <div class="pro">
                            <img src="./img/products/Maracas.png" alt="" class="pro1"/>
                                <div class="des">
                                    <span>Aldeia Fulni-ô</span>
                                    <h5 class="produto-titulo">Maraca Personalizado</h5>
                                    <div class="star">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <h4 class="preco">R$90,00</h4>
                                </div>
                                <i class='fal fa-shopping-cart cart1'></i>
                        </div>
                        <div class="pro">
                            <img src="./img/products/Tiara.png" alt="" class="pro1"/>
                                <div class="des">
                                    <span>Aldeia Fulni-ô</span>
                                    <h5 class="produto-titulo">Tiara de Penas</h5>
                                    <div class="star">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                    <h4 class="preco">R$40,00</h4>
                                </div>
                                <i class='fal fa-shopping-cart cart1'></i>
                        </div>
                    </div>
            </section>
            <section id="banner3">
                <div class="banner-box">
                </div>
                <div class="banner-box banner-box2">
                </div>
                <div class="banner-box banner-box3">
                </div>
            </section>

        </>
    );
}