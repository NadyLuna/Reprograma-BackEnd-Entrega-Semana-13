const clientes = require("../models/clientes");

const getAll = (req, res) => {
    console.log("getAll");
      res.status(200).send("ok");
};

const getCompradores = (req, res) => {
    console.log("getCompradores");
      res.status(200).send("ok");
};

const getByCpf = (req, res) => {
    console.log("getByCpf");
      res.status(200).send("ok");
};

const postCliente = (req, res) => {
  console.log(req.body);
  let cliente = new clientes(req.body);
  cliente.save(function (err) {
    if (err) {
      res.status(500).send({
        message: err.message
      });
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
