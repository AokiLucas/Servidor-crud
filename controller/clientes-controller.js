module.exports = () => {
	const clientesDB = require("../data/clientes-data.json").clientes.data;

	const controller = {
		home: (req, res) => {
			res.send(
				"<h2>Olá</h2> </br> <h2>Feito por: Lucas Aoki, RM: 821239078</h2>"
			);
		},

		showList: (req, res) => {
			res.status(200).json(clientesDB);
		},

		searchByID: (req, res) => {
			let clienteid = clienteById(req.params.id);

			res.status(200).json(clienteid);
		},

		add: (req, res) => {
			let id = req.params.id;
			let nome = req.params.nome;
			let endereco = req.params.endereco;
			let email = req.params.email;

			addCliente(id, nome, endereco, email);

			res.status(200).json(clientesDB);
		},

		update: (req, res) => {
			let id = req.params.id;
			let nome = req.params.nome;
			let endereco = req.params.endereco;
			let email = req.params.email;

			let clienteAlterado = alterarCliente(id, nome, endereco, email);

			res.status(200).json(clienteAlterado);
		},

		excludeByID: (req, res) => {
			let id = req.params.id;

			excluirCliente(id);

			res.status(200).json(clientesDB);
		},
	};

	//Método para pesquisar o cliente pelo id
	function clienteById(id) {
		for (let i = 0; i <= clientesDB.length; i++) {
			if (clientesDB[i].id == id) {
				return clientesDB[i];
			}
		}
	}

	//Método para adicionar um novo cliente
	function addCliente(id, nome, endereco, email) {
		clientesDB.push({id, nome, endereco, email});
	}

	//Método para alterar os dados de um cliente pesquisando com base no id
	function alterarCliente(id, nome, endereco, email) {
		for (let i = 0; i <= clientesDB.length; i++) {
			if (clientesDB[i].id == id) {
				clientesDB[i].nome = nome;
				clientesDB[i].endereco = endereco;
				clientesDB[i].email = email;
				return clientesDB[i];
			}
		}
	}

	//Método para excluir um cliente pelo id
	function excluirCliente(id) {
		for (let i = 0; i <= clientesDB.length; i++) {
			if (clientesDB[i].id == id) {
				clientesDB.splice(i, 1);
				break;
			}
		}
	}

	return controller;
};
