package br.com.yastoa.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "cliente")
public class Cliente {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String nome;
	
	private String usuario;
	
	private String telefone;
	
	private String email;
	
	private String cpf;
	
	private String senha;
	
	private String endereco;
	
	private String numero;
	
	private String complemento;
	
	private String bairro;
	
	private String cep;
	
	private String cidade;
	
	private String estado;
	
	private String pais;
	
	@OneToOne(mappedBy = "cliente", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    @JsonIgnoreProperties("cliente")
	private Pedido pedidos;
	
	@OneToOne(mappedBy = "cliente", cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    @JsonIgnoreProperties("cliente")
	private ListaDeDesejos listaDeDesejos;
	
	public Cliente() {}

	public Cliente(long id, String nome, String usuario, String telefone, String email, String cpf, String senha,
			String endereco, String numero, String complemento, String bairro, String cep, String cidade, String estado,
			String pais, Pedido pedidos, ListaDeDesejos listaDeDesejos) {
		this.id = id;
		this.nome = nome;
		this.usuario = usuario;
		this.telefone = telefone;
		this.email = email;
		this.cpf = cpf;
		this.senha = senha;
		this.endereco = endereco;
		this.numero = numero;
		this.complemento = complemento;
		this.bairro = bairro;
		this.cep = cep;
		this.cidade = cidade;
		this.estado = estado;
		this.pais = pais;
		this.pedidos = pedidos;
		this.listaDeDesejos = listaDeDesejos;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getEndereco() {
		return endereco;
	}

	public void setEndereco(String endereco) {
		this.endereco = endereco;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	public String getPais() {
		return pais;
	}

	public void setPais(String pais) {
		this.pais = pais;
	}

	public Pedido getPedidos() {
		return pedidos;
	}

	public void setPedidos(Pedido pedidos) {
		this.pedidos = pedidos;
	}

	public ListaDeDesejos getListaDeDesejos() {
		return listaDeDesejos;
	}

	public void setListaDeDesejos(ListaDeDesejos listaDeDesejos) {
		this.listaDeDesejos = listaDeDesejos;
	}
}
