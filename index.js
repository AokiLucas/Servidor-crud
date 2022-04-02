//Import do pacote express
var express = require("express");
var app = express();

var clienteArray = [
    {
        id: 1,
        nome: "Lucas Aoki",
        endereco: "endereco",
        email: "aokilucas90@gmail.com",
        altura: 1.85,
        casado: false
    },

    {
        id: 2,
        nome: "Pedro Henrique",
        endereco: "endereco",
        email: "pedrinho@gmail.com",
        altura: 1.75,
        casado: false
    },

    {
        id: 3,
        nome: "Caroline Eugênio",
        endereco: "endereco",
        email: "Carol@gmail.com",
        altura: 1.61,
        casado: true
    },

    {
        id: 4,
        nome: "Flavio Calado",
        endereco: "endereco",
        email: "flavio.calado@gmail.com",
        altura: 1.85,
        casado: true
    },

    {
        id: 5,
        nome: "Kleber Rodrigues",
        endereco: "endereco",
        email: "Kleber404@gmail.com",
        altura: 1.90,
        casado: false
    }
];

//Faz com que o web server escute na porta 3000
//Para acessar  o link http://localhost:3000/
app.listen(3000, () => {
    console.log("Web server funcionando!")
});

app.get('/', function (req, res) {
    res.send("<h2>Olá</h2> </br> <h2>Feito por: Lucas Aoki, RM: 821239078</h2>");
});

//Acessar todos os clientes cadastrados
app.get('/clientes', function (req, res) {
    res.json(clienteArray);
    res.status(200).send();
});

//Acessar os dados do cliente utilizando o id fornecido
app.get('/clientes/:id', function (req, res) {
    clienteid = clienteById(req.params.id);
    res.json(clienteid);
});

//Cadastrar um novo cliente
app.post('/clientes/:id/:nome/:endereco/:email', function (req, res) {
    addCliente(req.params.id, req.params.nome, req.params.endereco, req.param.email);
    res.json(clienteArray);
});

//Alterar os dados de um cliente
app.patch('/clientes/:id/:nome/:endereco/:email', function (req, res) {
    alterarCliente(req.params.id, req.params.nome, req.params.endereco, req.params.email);
    res.json(clienteArray);
});

//Excluir um clienteArray 
app.delete('/clientes/:id', function(req, res){
    excluirCliente(req.params.id);
    res.json(clienteArray);
});

//Método para pesquisar o cliente pelo id
function clienteById(id) {
    for (let i = 0; i <= clienteArray.length; i++) {
        if (clienteArray[i].id == id) {
            return (clienteArray[i]);
        }
    }
}

//Método para adicionar um novo cliente
function addCliente(id, nome, endereco, email) {
    clienteArray.push({ id, nome, endereco, email });
}

//Método para alterar os dados de um cliente pesquisando com base no id
function alterarCliente(id, nome, endereco, email) {
    for (let i = 0; i <= clienteArray.length; i++) {
        if (clienteArray[i].id == id) {
            clienteArray[i].nome = nome;
            clienteArray[i].endereco = endereco;
            clienteArray[i].email = email;
            console.log(clienteArray[i]);
            break;
        }
    }
}

//Método para excluir um cliente pelo id
function excluirCliente(id){
    for (let i = 0; i <= clienteArray.length; i++) {
        if (clienteArray[i].id == id) {
            clienteArray.splice(i,1);
            console.log(clienteArray);
            break;
        }
    }
}
