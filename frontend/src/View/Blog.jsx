import React from "react";

export default function Blog() {
    return (
        <>

        <section id="blog">
            <div className="blog-box">
                <div className="blog-img">
                    <img src="https://www.agenciamural.org.br/wp-content/uploads/2019/05/IMG_20190428_131923-e1557520155510-1600x1120.jpg" alt="" />
                </div>

                <div className="blog-details">
                    <h1>10/02</h1>
                    <h4>Onde estao os 21 Mil Indigenas da Grande São Paulo</h4>
                    <p>Em Guarulhos desde os anos 1990, Paulo Matos da Silva, 45, é cacique do povo Wassu Cocal. Mais populosa cidade do estado depois da capital, com 1,3 milhão de habitantes, o município da Grande ...</p>
                    <a href="https://www.agenciamural.org.br/guarulhos-e-osasco-o-passado-e-o-presente-indigena-na-grande-sp/">CONTINUE LENDO</a>
                </div>
            </div>
            <div className="blog-box">
                <div className="blog-img">
                    <img src="https://amazoniareal.com.br/wp-content/uploads/2022/03/CRIANCAS-INDIGENAS-QUE-ESTAVAM-DESAPARECIDAS-EM-MANICORE1-1.jpg" alt="" />
                </div>
                <div className="blog-details">
                    <h1>17/03</h1>
                    <h4>Perdidos na floresta amazônica: meninos Mura são encontrados vivos</h4>
                    <p> “Vem me buscar”. O apelo, vindo de uma voz triste e distante, salvou as vidas dos irmãos indígenas Glauco, 6, e Gleison, 8, que passaram 26 dias perdidos na floresta amazônica, no município de Manicoré, no sul...</p>
                    <a href="https://amazoniareal.com.br/perdidos-na-floresta-amazonica-meninos-mura-sao-encontrados-vivos/">CONTINUE LENDO</a>
                </div>
               
            </div>
            <div className="blog-box">
                <div className="blog-img">
                    <img src="https://s2.glbimg.com/bXDep9OQxAwP41pLqPM1OrlnYZg=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/S/J/iFDzKCTFqaJZaooKhA5w/indigenas-24-5.jpg" alt="" />
                </div>
                <div className="blog-details">
                    <h1>24/08</h1>
                    <h4>Indígenas protestam em Brasília contra medidas que dificultam demarcação de terras</h4>
                    <p>Indígenas de várias regiões do país protestaram na Esplanada dos Ministérios, em Brasília, nesta terça-feira (24), contra medidas que dificultam a demarcação de terras e ...</p>
                    <a href="https://g1.globo.com/df/distrito-federal/noticia/2021/08/24/indigenas-protestam-em-brasilia-contra-medidas-que-dificultam-demarcacao-de-terras.ghtml">CONTINUE LENDO</a>
                </div>
        
            </div>
            <div className="blog-box">
                <div className="blog-img">
                    <img src="https://s1.static.brasilescola.uol.com.br/be/e/Indios%20Brasileiros%20-%20BRASIL%20ESCOLA.jpg" alt="" />
                </div>
                <div className="blog-details">
                    <h1>22/03</h1>
                    <h4>Índios no Brasil</h4>
                    <p>A presença dos índios no território brasileiro é muito anterior ao processo de ocupação estabelecido pelos exploradores europeus que aportaram em nossas terras. Segundo os dados presentes em algumas...</p>
                    <a href="https://brasilescola.uol.com.br/historiab/indios-brasil.htm">CONTINUE LENDO</a>
                </div>
            
            </div>
            <div className="blog-box">
                <div className="blog-img">
                    <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/f08f1807676a95bc508959f2a6c734b2.jpg" alt="" />
                </div>
                <div className="blog-details">
                    <h1>08/02</h1>
                    <h4>População indígena no Brasil</h4>
                    <p>A população indígena no Brasil representa um grande contingente de povos indígenas que, ao longo dos anos, sofreu um considerável decréscimo, seja por extermínio, seja por doenças...</p>
                    <a href="https://mundoeducacao.uol.com.br/geografia/a-populacao-indigena-no-brasil.htm">CONTINUE LENDO</a>
                </div>
             
            </div>
        </section>

        <section id="pagination" className="section-p1">
            <a href="/">1</a>
            <a href="/"><i className="fal fa-long-arrow-alt-right"></i></a>
        </section>
    </>
);
    }