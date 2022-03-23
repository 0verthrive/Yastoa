import React from "react";

export default function Contato() {
    return (
        <>
           <section className="w3l-contact-12">
        <div className="wrapper ">
            <div className="contact-main">
                <div className="grid grid-column-2">
                    <div className="column">
                        <h3 className="header">Sobre nós:</h3>
                        <p className="head-main">
                            Somos Yastoa, parceira dos povos indígenas ajudando no desenvolvimento socio economico de suas aldeias.
                            Dividindo entre compra e venda para geração de renda a estes povos.
                            Conectando não indígenas com a cultura dos primeiros originários do Brasil e suas causas.
                            Venha conosco!
                        </p>
                    </div>
                    <div className="column2">
                        <div className="href1">
                            <span className="fa fa-envelope-o" aria-hidden="true"></span><a href="mailto:info@example.com">info@example.com</a>
                        </div>
                        <div className="href2">
                            <span className="fa fa-phone" aria-hidden="true"></span><a href="tel:+44-000-888-999">+44-000-888-999</a>
                        </div>
                        <div>
                            <p className="contact-para">
                                <span className="fa fa-map-marker" aria-hidden="true"></span>
                                Rua Além Paraíba, 100 Pedra Branca - São Paulo
                            </p>
                        </div>
                    </div>
                    <div className="column3">
                        <p className="follow">Fale conosco:</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="contacts-9">
            <div className="contacts-sub-9">
                <div className="map-content-9">
                    <div className="sub-grids-cont-9">
                        <h4 className="sub-feat-text">Entre em contato conosco</h4>
                        <p className="sub-para">Campos obrigatórios estão marcados com *</p>
                    </div>
                    <form action="https://sendmail.w3layouts.com/submitForm" method="post">
                        <div className="twice-two">
                            <input type="text" name="w3lName" id="w3lName" placeholder="Name"/>
                            <input type="email" name="w3lSender" id="w3lSender" placeholder="Email*" required=""/>
                        </div>
                         <textarea name="w3lMessage" id="w3lMessage" placeholder="Message*" required=""></textarea>
                         <button type="button" className="btnmap btn-lg btn-block">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}