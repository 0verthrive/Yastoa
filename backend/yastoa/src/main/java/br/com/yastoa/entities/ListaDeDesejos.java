package br.com.yastoa.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="lista_de_desejos")
public class ListaDeDesejos {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@OneToOne
    @MapsId
    @JoinColumn(name = "cliente_id")
	@JsonIgnoreProperties("listaDeDesejos")
	private Cliente cliente;
	
	@ManyToMany(mappedBy = "listaDesejos", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JsonIgnoreProperties({"nome", "descricao", "img", "preco", "estoque", "categoria", "pedidos", "qtdPedidoProduto", "listaDesejos"})
	private List<Produto> produtos = new ArrayList<>();

	public ListaDeDesejos() {}
	
	public ListaDeDesejos(long id, Cliente cliente, List<Produto> produtos) {
		this.id = id;
		this.cliente = cliente;
		this.produtos = produtos;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public List<Produto> getProdutos() {
		return produtos;
	}

	public void setProdutos(List<Produto> produtos) {
		this.produtos = produtos;
	}
}
