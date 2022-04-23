module.exports = (app) => {
	const config = require("config");
	const defaultPath = config.get("server.path_root");

	const controllerFactory = require("../controller/clientes-controller");
	const controller = controllerFactory();

	//Diretório "/"
	app.route("/").get(controller.home);

	//Diretório .../cliente para acessar todos os clientes
	app.route(defaultPath + "clientes").get(controller.showList);

	//Diretório .../cliente para acessar um cliente pelo id
	app.route(defaultPath + "clientes/:id").get(controller.searchByID);

	//Diretório .../cliente para adicionar um cliente
	app.route(defaultPath + "clientes/:id/:nome/:endereco/:email").post(controller.add);

    //Diretório .../cliente para atualizar um cliente pelo seu id
	app.route(defaultPath + "clientes/:id/:nome/:endereco/:email").patch(controller.update);

    //Diretório .../cliente para excluir um cliente pelo id
	app.route(defaultPath + "clientes/:id").delete(controller.excludeByID);
};
