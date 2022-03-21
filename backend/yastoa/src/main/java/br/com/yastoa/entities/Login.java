package br.com.yastoa.entities;

public class Login {
		
		private long id;
		
		private String usuario;
		
		private String nome;
		
		private String email;
		
		private String senha;
		
		private String token;
		
		private String fone;
		
		private String cpf;
		
		private String endereco;
		
		private String numero;
		
		private String complemento;
		
		private String bairro;
		
		private String cep;
		
		private String cidade;
		
		private String estado;
		
		private String pais;
		
		private String foto;
		
		private String tipo;
		
		private Pedido pedidos;
		
		private ListaDeDesejos listaDeDesejos;

		public Login() {}
		
		public Login(long id, String usuario, String nome, String email, String senha, String token, String fone,
				String cpf, String endereco, String numero, String complemento, String bairro, String cep,
				String cidade, String estado, String pais, String foto, String tipo, Pedido pedidos,
				ListaDeDesejos listaDeDesejos) {
			this.id = id;
			this.usuario = usuario;
			this.nome = nome;
			this.email = email;
			this.senha = senha;
			this.token = token;
			this.fone = fone;
			this.cpf = cpf;
			this.endereco = endereco;
			this.numero = numero;
			this.complemento = complemento;
			this.bairro = bairro;
			this.cep = cep;
			this.cidade = cidade;
			this.estado = estado;
			this.pais = pais;
			this.foto = foto;
			this.tipo = tipo;
			this.pedidos = pedidos;
			this.listaDeDesejos = listaDeDesejos;
		}

		public long getId() {
			return id;
		}

		public void setId(long id) {
			this.id = id;
		}

		public String getUsuario() {
			return usuario;
		}

		public void setUsuario(String usuario) {
			this.usuario = usuario;
		}

		public String getNome() {
			return nome;
		}

		public void setNome(String nome) {
			this.nome = nome;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}

		public String getSenha() {
			return senha;
		}

		public void setSenha(String senha) {
			this.senha = senha;
		}

		public String getToken() {
			return token;
		}

		public void setToken(String token) {
			this.token = token;
		}

		public String getFone() {
			return fone;
		}

		public void setFone(String fone) {
			this.fone = fone;
		}

		public String getCpf() {
			return cpf;
		}

		public void setCpf(String cpf) {
			this.cpf = cpf;
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

		public String getFoto() {
			return foto;
		}

		public void setFoto(String foto) {
			this.foto = foto;
		}

		public String getTipo() {
			return tipo;
		}

		public void setTipo(String tipo) {
			this.tipo = tipo;
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
