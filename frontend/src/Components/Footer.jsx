import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
        <div>
        <section id="newsletter" class="section-p1 section-m1">
        <div class="newstext">
            <h4>Inscreva-se para receber alerta de Novas Coleções e Reposições</h4>
            <p>Digite seu e-mail para receber os <span>Alertas</span> </p>
        </div>
        <div class="form">
            <input type="text" placeholder="Seu endereço de e-mail"/>
            <button class="button normal">Increver-se</button>
        </div>
    </section>
            
            <footer class="section-p1">
        <div class="col">
            <img class="logo" src="./img/logo.png" alt=""/>
            <h4>Contato</h4>
            <p><strong>Endereço: </strong> Rua Além Paraíba<br/>100 Pedra Branca - São Paulo</p>
            <p><strong>Telefone:</strong> +44-000-888-999</p>
            <div class="follow">
                <h4>Redes sociais</h4>
                <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-pinterest-p"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div class="col install">
            <h4>Sobre</h4>
            <Link to="/SobreNos">Sobre Nós</Link>
            <a href="/">Entrega de informação</a>
            <a href="/">Política de privacidade</a>
            <a href="/">Termos & Condições</a>
            <a href="/">Fale conosco</a>
        </div>

        <div class="col">
            <h4>Minha conta</h4>
            <Link to="/Login">Login</Link>
            <a href="/">Ver Carrinho</a>
            <a href="/">Lista de desejo</a>
            <a href="/">Pedidos</a>
            <a href="/">Ajuda</a>
        </div>

        <div class="col install">
            <h4>Baixe nosso app</h4>
            <p>Pelo App Store ou Google Play</p>
            <div class="row">
                <img src="./img/app.jpg" alt=""/>
                <img src="./img/play.jpg" alt=""/>
            </div>
            <p>Pagamentos seguros</p>
            <img src="./img/pay.png" alt=""/>
        </div>

        <div class="copyright">
            <p>&copy; YASTOA — Privacidade</p>
        </div>
    </footer>
    </div>
        </>
    );
}