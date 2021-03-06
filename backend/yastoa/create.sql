create table categoria (id int generated by default as identity, nome varchar(255), primary key (id));
create table cliente (id int generated by default as identity, bairro varchar(255), cep varchar(50), cidade varchar(255), complemento varchar(255), cpf varchar(15), email varchar(255), endereco varchar(255), estado varchar(255), nome varchar(255), numero varchar(255), pais varchar(255), senha varchar(255), telefone varchar(255), usuario varchar(255), primary key (id));
create table lista_de_desejos (cliente_id int not null, primary key (cliente_id));
create table pedido (cliente_id int not null, data timestamp, qtd_produto int not null, valor_total float not null, primary key (cliente_id));
create table produto (id int generated by default as identity, descricao varchar(255), estoque int not null, img varchar(255), nome varchar(255), preco float not null, qtd_pedido_produto int not null, categoria_id int, primary key (id));
create table produto_lista (produto_id int8 not null, lista_id int8 not null);
create table produto_pedido (produto_id int8 not null, pedido_id int8 not null);
alter table if exists lista_de_desejos add constraint FK9vsk9mjishc2s0tih2f1ktle3 foreign key (cliente_id) references cliente;
alter table if exists pedido add constraint FK30s8j2ktpay6of18lbyqn3632 foreign key (cliente_id) references cliente;
alter table if exists produto add constraint FKopu9jggwnamfv0c8k2ri3kx0a foreign key (categoria_id) references categoria;
alter table if exists produto_lista add constraint FKl2mnvae9sfsfxfp7ti9t0ae67 foreign key (lista_id) references lista_de_desejos;
alter table if exists produto_lista add constraint FKgeialworr7xegag69af0sc4w5 foreign key (produto_id) references produto;
alter table if exists produto_pedido add constraint FKawsdcony69c35yvelg8e8kkr7 foreign key (pedido_id) references pedido;
alter table if exists produto_pedido add constraint FK7sii2gvnu51osdh2f9qrmxxas foreign key (produto_id) references produto;