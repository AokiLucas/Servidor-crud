//Imports
const config = require("config");
const express = require("express");
const bodyParser = require("body-parser");
const clientesRoute = require("./routes/clientes-routes");

const app = express();

app.use(express.urlencoded({extended: true}));

let port = config.get("server.port");

clientesRoute(app);

app.listen(port, () => {
	console.log("Web server funcionando!");
});