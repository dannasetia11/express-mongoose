const { Todos } = require("../../models");
const objectId = require("mongodb").ObjectId;

module.exports = {
  getAll: async (req, res) => {
    try {
      const result = await Todos.find({});
      res.status(200).json({ masage: "show data todos", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  getByEmail: (req, res) => {
    get()
      .collection("todos")
      .find({ email: req.params.email })
      .toArray()
      .then(result => {
        res.send({ message: "Get all datas by email", data: result });
      })
      .catch(error => {
        console.log(error);
      });
  },
  getOne: async (req, res) => {
    try {
      const result = await Todos.find({ _id: objectId(req.params.id) });
      res.status(200).json({ masage: "show data todos", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  getAdd: async (req, res) => {
    try {
      const result = await Todos.create(req.body);
      res.status(200).json({ masage: "show data todos", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  delOne: async (req, res) => {
    const id = req.params;
    try {
      const result = await Todos.deleteOne({ _id: id.id }, function(err) {
        if (err) return handleError(err);
      });
      res.json({ masage: "delate data todos", data: result });
    } catch (error) {
      console.log(error);
    }
  },
  updateOne: async (req, res) => {
    console.log(req.body);

    const id = req.params;
    try {
      const result = await Todos.updateOne({ _id: id.id }, req.body, function(
        err,
        res
      ) {});
      res.json({ masage: "show update todos", data: result });
    } catch (error) {
      console.log(error);
    }
  }
};
