const clientes = require("../models/clientes");

const getAll = (req, res) => {
    clientes.find((err, clientes) => {
      if (err) {
        res.status(500).send({message: err.message});
      }
        res.status(200).send(clientes)
    })
};

const getCompradores = (req, res) => {
  clientes.find({ comprou: true }, (err, clientes) => {
    err ? res.status(424).send({ message: err.message }): res.status(200).send(clientes.map(cliente => ({
        nome: cliente.nome,
        email: cliente.email
      }))
      );
  clientes.find({ comprou: true }, {nome: 1, email: 1, _id: 0}, (err, clientes) => {
    err ? res.status(424).send({ message: err.message }) : res.status(200).send(clientes);   
    })
  })
};

const getByCpf = (req, res) => {
  const cpf = req.params.cpf;
  clientes.find({ cpf }, (err, cliente) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else if (cliente.length > 0) {
      res.status(200).send(cliente);
    } else {
      res.status(404).send('Cliente não encontrado');
    };
  });
};
const postCliente = (req, res) => {
  console.log(req.body);
  let cliente = new clientes(req.body);
  cliente.save(function (err) {
    if (err) {
      res.status(500).send({message: err.message});
    }
    res.status(201).send(cliente.toJSON());
  });
};

module.exports = {
    getAll,
    getCompradores,
    getByCpf,
    postCliente
}
