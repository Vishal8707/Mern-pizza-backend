const pizzaModel = require("../Models/pizzaModel");


const pizzaList = async function (req, res) {
    let data = req.body;
    let createPizaa = await pizzaModel.create(data);
    return res
      .status(201)
      .send({ status: true, message: "Success", data: createPizaa });
  }

  const getpizaaList = async function(req,res){
    let data = req.body
    let getList = await pizzaModel.find(data);
    return res
      .status(201)
      .send({ status: true, message: "Success", data: getList });
  }



module.exports = {pizzaList,getpizaaList}